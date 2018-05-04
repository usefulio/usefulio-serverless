import generateToken from "../../utils/generateToken";
import mochaPlugin from "serverless-mocha-plugin";

const expect = mochaPlugin.chai.expect;

describe('Calling the "graphql" endpoint', async function() {
  let graphql;
  let payload;
  let token;

  before(function() {
    // GraphQL endpoint function handler.
    graphql = mochaPlugin.getWrapper("graphql", "/handlers.js", "graphql");
    // Prepare payload for the JWT token generation.
    payload = {
      userId: "1"
    };
    // Generate JWT token with payload.
    token = generateToken(payload);
  });

  describe("with an invalid query", function() {
    it("should return error", async function() {
      // Prepare GraphQL query to be exeucted in test.
      const query = `
      query {
        echo
      }
      `;
      // Prepare fake request object with only necessary data.
      const request = {
        headers: {
          Authorization: `Bearer ${token}`
        },
        requestContext: {
          authorizer: { principalId: payload.userId, claims: payload }
        },
        httpMethod: "POST",
        body: JSON.stringify({ query })
      };
      const response = await graphql.run(request);
      const body = JSON.parse(response.body);
      expect(body).to.have.property("errors");
    });
  });

  describe("with a valid query", function() {
    it("should return result", async function() {
      // Prepare GraphQL query to be exeucted in test.
      const query = `
      query {
        echo(message: "message")
      }
      `;
      // Prepare fake request object with only necessary data.
      const request = {
        headers: {
          Authorization: `Bearer ${token}`
        },
        requestContext: {
          authorizer: { principalId: payload.userId, claims: payload }
        },
        httpMethod: "POST",
        body: JSON.stringify({ query })
      };
      const response = await graphql.run(request);
      const body = JSON.parse(response.body);

      expect(response.statusCode).to.equal(200);
      expect(body).to.have.property("data");
      expect(body.data).to.have.property("echo");
      expect(body.data.echo).to.equal("message");
    });
  });
});
