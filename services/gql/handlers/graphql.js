import * as loaders from "../data/loaders";

import _get from "lodash/get";
import { graphqlLambda } from "apollo-server-lambda";
import schema from "../data/schema";

export default async (request, context, callback) => {
  const userId =
    _get(request, "requestContext.authorizer.claims.userId") ||
    _get(request, "requestContext.authorizer.principalId");
  const handler = graphqlLambda({
    schema,
    context: {
      loaders
    }
  });
  return handler(request, context, (err, response) => {
    // Add headers.
    response.headers["Access-Control-Allow-Origin"] = "*";
    callback(err, response);
  });
};
