import Users from "./Users";
import bcryptjs from "bcryptjs";
import getUserByEmail from "./getUserByEmail";

const createUser = async data => {
  const { email, password, firstName, lastName } = data;

  if (await getUserByEmail(email)) {
    throw new Error("Email already exists");
  }

  const id = String(Users.length + 1);
  const hashed = await bcryptjs.hash(password, 10);

  const user = {
    id,
    email,
    password: hashed,
    firstName,
    lastName
  };
  Users.push(user);

  return user;
};

export default createUser;
