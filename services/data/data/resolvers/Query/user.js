export default async (root, args, context) => {
  return await context.loaders.User.load(args.id);
};
