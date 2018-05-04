import generateToken from "../../utils/generateToken";
import mochaPlugin from "serverless-mocha-plugin";
import sha256 from "../../utils/sha256";

const expect = mochaPlugin.chai.expect;

describe('Calling the "loginWithPassword" endpoint', function() {
  let loginWithPassword;
  const invalidEmail = "invalidemail@example.com";
  const invalidPassword = "invalidpassword";
  const validEmail = "john.smith@example.com";
  const validPassword = "password";

  before(function() {
    loginWithPassword = mochaPlugin.getWrapper(
      "loginWithPassword",
      "/handlers.js",
      "loginWithPassword"
    );
  });

  describe("without email address", function() {
    it("should return an error", async function() {
      const formData = {
        email: "",
        password: ""
      };
      // Prepare fake request object with only necessary data.
      const request = {
        httpMethod: "POST",
        body: JSON.stringify(formData)
      };
      const response = await loginWithPassword.run(request);
      const body = JSON.parse(response.body);
      expect(response.statusCode).to.equal(401);
      expect(body.error).to.equal("E-mail address not provided");
    });
  });

  describe("without password", function() {
    it("should return an error", async function() {
      const formData = {
        email: validEmail,
        password: ""
      };
      // Prepare fake request object with only necessary data.
      const request = {
        httpMethod: "POST",
        body: JSON.stringify(formData)
      };
      const response = await loginWithPassword.run(request);
      const body = JSON.parse(response.body);
      expect(response.statusCode).to.equal(401);
      expect(body.error).to.equal("Password not provided");
    });
  });

  describe("with invalid email", function() {
    it("should return an error", async function() {
      const formData = {
        email: invalidEmail,
        password: invalidPassword
      };
      // Prepare fake request object with only necessary data.
      const request = {
        httpMethod: "POST",
        body: JSON.stringify(formData)
      };
      const response = await loginWithPassword.run(request);
      const body = JSON.parse(response.body);
      expect(response.statusCode).to.equal(401);
      expect(body.error).to.equal("Invalid email or password");
    });
  });

  describe("with invalid password", function() {
    it("should return an error", async function() {
      const formData = {
        email: validEmail,
        password: invalidPassword
      };
      // Prepare fake request object with only necessary data.
      const request = {
        httpMethod: "POST",
        body: JSON.stringify(formData)
      };
      const response = await loginWithPassword.run(request);
      const body = JSON.parse(response.body);
      expect(response.statusCode).to.equal(401);
      expect(body.error).to.equal("Invalid email or password");
    });
  });

  describe("with valid email address and password", function() {
    it("should return a JWT token", async function() {
      const formData = {
        email: validEmail,
        password: sha256(validPassword)
      };
      // Prepare fake request object with only necessary data.
      const request = {
        httpMethod: "POST",
        body: JSON.stringify(formData)
      };
      const response = await loginWithPassword.run(request);
      const body = JSON.parse(response.body);
      expect(response.statusCode).to.equal(200);
      expect(body.token).to.be.a("string");
    });
  });
});
