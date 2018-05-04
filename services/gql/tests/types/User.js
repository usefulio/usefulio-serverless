import { GraphQLID, GraphQLNonNull, GraphQLString, graphql } from "graphql";

import mochaPlugin from "serverless-mocha-plugin";
import schema from "../../data/schema";

const expect = mochaPlugin.chai.expect;

describe('The "User" type', function() {
  const UserType = schema.getType("User");

  it('should have the "id" field of the "ID!" type', () => {
    expect(UserType.getFields()).to.have.property("id");
    expect(UserType.getFields().id.type).to.deep.equals(
      new GraphQLNonNull(GraphQLID)
    );
  });

  it('should have the "email" field of the "String!" type', () => {
    expect(UserType.getFields()).to.have.property("email");
    expect(UserType.getFields().email.type).to.deep.equals(
      new GraphQLNonNull(GraphQLString)
    );
  });

  it('should have the "firstName" field of the "String!" type', () => {
    expect(UserType.getFields()).to.have.property("firstName");
    expect(UserType.getFields().firstName.type).to.deep.equals(
      new GraphQLNonNull(GraphQLString)
    );
  });

  it('should have the "lastName" field of the "String!" type', () => {
    expect(UserType.getFields()).to.have.property("lastName");
    expect(UserType.getFields().lastName.type).to.deep.equals(
      new GraphQLNonNull(GraphQLString)
    );
  });
});
