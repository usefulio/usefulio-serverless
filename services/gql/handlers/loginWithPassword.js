import bcryptjs from "bcryptjs";
import generateToken from "../utils/generateToken";
import getUserByEmail from "../data/repositories/User/getUserByEmail";

export default async (request, context, callback) => {
  try {
    const data = JSON.parse(request.body);
    const { email, password } = data;
    if (!email) {
      throw new Error("E-mail address not provided");
    }
    if (!password) {
      throw new Error("Password not provided");
    }
    // Find user with the given email address.
    const user = await getUserByEmail(email);
    // Throw error if a user has not been found.
    if (!user) {
      throw new Error("Invalid email or password");
    }
    // Throw error if passwords are not equal.
    if (!(await bcryptjs.compare(password, user.password))) {
      throw new Error("Invalid email or password");
    }
    // Generate token with the "userId" payload and that expires after 5 days.
    const token = generateToken({ payload: { userId: user.id } });
    callback(null, {
      statusCode: 200,
      body: JSON.stringify({ token })
    });
  } catch (err) {
    callback(null, {
      statusCode: 401,
      body: JSON.stringify({ error: err.message })
    });
  }
};
