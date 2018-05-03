import combineAstTypes from "./combineAstTypes";
import { visit } from "graphql/language";

export default schemas => {
  const result = { kind: "Document", definitions: [] };
  const queries = [],
    mutations = [],
    subscriptions = [];
  const withoutRootTypes = schemas.map(schema =>
    visit(schema, {
      enter(node /*, key, parent, path, ancestors*/) {
        if (node.kind === "ObjectTypeDefinition") {
          if (node.name.value == "Query") {
            queries.push(node);
            return null;
          } else if (node.name.value == "Mutation") {
            mutations.push(node);
            return null;
          } else if (node.name.value == "Subscription") {
            subscriptions.push(node);
            return null;
          }
        }
      }
    })
  );
  const query = combineAstTypes(queries);
  const mutation = combineAstTypes(mutations);
  const subscription = combineAstTypes(subscriptions);
  if (queries.length) {
    result.definitions.push(query);
  }
  if (mutations.length) {
    result.definitions.push(mutation);
  }
  if (subscriptions.length) {
    result.definitions.push(subscription);
  }
  withoutRootTypes.forEach(
    schema =>
      (result.definitions = [...result.definitions, ...schema.definitions])
  );
  return result;
};
