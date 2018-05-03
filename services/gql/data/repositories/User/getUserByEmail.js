import Users from "./Users";

export default async email => {
  return Users.find(user => user.email === email);
};
