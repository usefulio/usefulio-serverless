import Users from "./Users";

export default async () => {
  // To simulate long response you can uncomment this chunk of code.
  // return new Promise((resolve, reject) => {
  //   setTimeout(() => {
  //     resolve(Users);
  //   }, 1000);
  // });
  return Users;
};
