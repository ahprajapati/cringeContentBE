
const DB = process.env.MONGODB_NAME;
const table = "content";

export const getContentByID = (mongoDB, id) =>
  mongoDB.db(DB).collection(table).findOne({ id });

export const createContent = (mongoDB, content) =>
  mongoDB.db(DB).collection(table).insertOne(content);
