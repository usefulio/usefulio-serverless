import Mutation from "./Mutation.graphql";
import Query from "./Query.graphql";
import User from "./User.graphql";
import UserInput from "./UserInput.graphql";
import combineAstSchemas from "../utils/combineAstSchemas";
import schema from "./schema.graphql";

export default combineAstSchemas([Mutation, Query, User, UserInput, schema]);
