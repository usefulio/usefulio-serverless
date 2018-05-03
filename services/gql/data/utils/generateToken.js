import jwt from "jsonwebtoken";

export default options => {
  const {
    payload,
    // Get secret key from the environment variable.
    secret = process.env.AUTHORIZATION_SECRET,
    // By default token expires after 5 days.
    expiresIn = "5d"
  } = options;
  // Generate token.
  return jwt.sign(payload, secret, { expiresIn });
};
