import Mutation from "./Mutation.graphql";
import Query from "./Query.graphql";
import User from "./User.graphql";
import UserInput from "./UserInput.graphql";
import combineAstSchemas from "../../utils/combineAstSchemas";
import schema from "./schema.graphql";

export default combineAstSchemas([Mutation, Query, User, UserInput, schema]);

// export default `
// input UserInput {
//   email: String
//   password: String
//   firstName: String
//   lastName: String
// }
// type User {
//   id: ID!
//   email: String
//   firstName: String
//   lastName: String
// }
// type Query {
//   user(id: String!): User
// }
// type Mutation {
//   createUser(input: UserInput): User
// }
// schema {
//   mutation: Mutation
//   query: Query
// }
// `;
