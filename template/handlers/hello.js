// import {
//   connect,
//   disconnect,
//   getCollection,
//   generateId
// } from "@useful/mongo";

export default async (input, context, callback) => {
  try {
    // await connect();
    // const Collection = await getCollection("collection");
    // await Collection.insert({ _id: generateId(), name: "Name" });
    const body = JSON.stringify({
      message: "Go Serverless v1.0! Your function executed successfully!",
      input
    });
    callback(null, { statusCode: 200, body });
  } catch (err) {
    const body = JSON.stringify({ error: err.message });
    callback(null, { statusCode: 400, body });
  } finally {
    // await disconnect();
  }
};
