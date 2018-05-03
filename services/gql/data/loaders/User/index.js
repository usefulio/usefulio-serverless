import DataLoader from "dataloader";
import ensureOrder from "../../utils/ensureOrder";
import getUsersByIds from "../../repositories/User/getUsersByIds";

export default new DataLoader(async ids => {
  const users = await getUsersByIds(ids);
  return ensureOrder({
    docs: users,
    keys: ids,
    prop: "id",
    error: id => `User does not exist (${id})`
  });
});
