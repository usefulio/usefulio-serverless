import jwt from "jsonwebtoken";

const generatePolicy = function(principalId, effect, resource) {
  const authResponse = { principalId };
  if (effect && resource) {
    authResponse.policyDocument = {
      Version: "2012-10-17",
      Statement: [
        {
          Action: "execute-api:Invoke",
          Effect: effect,
          Resource: resource
        }
      ]
    };
  }
  return authResponse;
};

export default (event, context, callback) => {
  const authorizationToken = event.authorizationToken;
  // Request is unauthorized if there is no token in request's headers.
  if (!authorizationToken) {
    console.log("Authentication header missing");
    return callback("Unauthorized");
  }
  // Split authorization token into two parts: "Bearer" and actual token value.
  const tokenParts = authorizationToken.split(" ");
  const token = tokenParts[1];
  if (tokenParts[0].toLowerCase() !== "bearer" || !token) {
    console.log("Authentication token missing");
    return callback("Unauthorized");
  }
  // Read secret phrase from the file.
  const secret = process.env.AUTHORIZATION_SECRET;
  // Verify that token is correct and decode data.
  try {
    const decoded = jwt.verify(token, secret);
    console.log("Authentication token valid", decoded);
    callback(null, generatePolicy(decoded.userId, "Allow", event.methodArn));
  } catch (err) {
    console.log("Authentication token invalid");
    callback("Unauthorized");
  }
};
