import Users from "./Users";

export default async ids => {
  return Users.filter(user => ids.includes(user.id));
};
