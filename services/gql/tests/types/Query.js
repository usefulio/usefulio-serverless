import { GraphQLID, GraphQLNonNull, GraphQLString, graphql } from "graphql";

import mochaPlugin from "serverless-mocha-plugin";
import schema from "../../data/schema";

const expect = mochaPlugin.chai.expect;

describe('The "Query" type', function() {
  const QueryType = schema.getType("Query");
  const UserType = schema.getType("User");

  it('should have the "user" field of the "User" type', () => {
    expect(QueryType.getFields()).to.have.property("user");
    expect(QueryType.getFields().user.type).to.deep.equals(UserType);
  });
});
