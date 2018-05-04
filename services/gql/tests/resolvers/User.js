import { GraphQLNonNull, GraphQLString, graphql } from "graphql";

import mochaPlugin from "serverless-mocha-plugin";
import schema from "../../data/schema";

const expect = mochaPlugin.chai.expect;

describe('The "User" type', function() {
  const UserType = schema.getType("User");

  it('should resolve the "id" field', () => {
    // If there is any resolver in a type, we should check if it properly
    // resolves values.
    // expect(UserType.getFields().id.resolve({ id: "id" })).to.equal("id");
  });
});
