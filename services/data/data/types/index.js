export default `
type User {
  id: ID!
  email: String
  firstName: String
  lastName: String
}

type Query {
  user(id: String!): User
}

type Mutation {
  createUser: User
}

schema {
  query: Query
  mutation: Mutation
}
`;
