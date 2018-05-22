// import { connect, disconnect } from "@useful/mongo";
import { graphqlLambda } from "apollo-server-lambda";
import _get from "lodash/get";

import * as loaders from "../data/loaders";
import schema from "../data/schema";

export default async (request, context, callback) => {
  // DO NOT REMOVE NEXT LINE, CAUSES 504 ERRORS EVEN WHEN AWAITING DISCONNECT().
  context.callbackWaitsForEmptyEventLoop = false;

  try {
    // await connect();
    const handler = graphqlLambda({
      schema,
      context: {
        loaders
      }
    });
    return handler(request, context, (err, response) => {
      // Add headers.
      response.headers["Access-Control-Allow-Origin"] =
        request.headers.origin || "*";
      response.headers["Access-Control-Allow-Credentials"] = "true";
      callback(err, response);
    });
  } catch (error) {
    callback(error);
  } finally {
    // await disconnect();
  }
};
