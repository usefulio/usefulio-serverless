import mochaPlugin from "serverless-mocha-plugin";
// import { connect, disconnect } from "@useful/mongo";

const expect = mochaPlugin.chai.expect;

const hello = mochaPlugin.getWrapper("hello", "/handlers.js", "hello");

describe('Calling the "hello" function', async function() {
  before(async function() {
    // await connect();
  });

  before(async function() {
    // await disconnect();
  });

  it("should return the 200 status code", async function() {
    const response = await hello.run({ value: "value" });
    expect(response.statusCode).to.be.equal(200);
  });
});
