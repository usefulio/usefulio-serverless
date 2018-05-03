import { graphiqlLambda } from "apollo-server-lambda";

let endpoint;
switch (process.env.STAGE) {
  case "development":
  case "production":
    endpoint = `/${process.env.STAGE}/graphql`;
    break;
  default:
    endpoint = "/graphql";
}

export default graphiqlLambda({ endpointURL: endpoint });
