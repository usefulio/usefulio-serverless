import { createUser } from "../../repositories/User";

export default async (root, args, context) => {
  return await createUser();
};
