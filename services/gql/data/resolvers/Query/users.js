import getAllUsers from "../../repositories/User/getAllUsers";

export default async (root, args, context) => {
  return await getAllUsers();
};
