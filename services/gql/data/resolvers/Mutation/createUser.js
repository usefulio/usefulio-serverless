import createUser from "../../repositories/User/createUser";

export default async (root, args, context) => {
  return await createUser(args.input);
};
