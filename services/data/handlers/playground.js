import playgroundLambda from "graphql-playground-middleware-lambda";

let endpoint;
switch (process.env.STAGE) {
  case "development":
  case "production":
    endpoint = `/${process.env.STAGE}/graphql`;
    break;
  default:
    endpoint = "/graphql";
}

export default playgroundLambda({ endpoint });
