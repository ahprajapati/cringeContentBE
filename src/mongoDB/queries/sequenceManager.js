const DB = process.env.MONGODB_NAME;
const table = "sequenceManager";

export const getId = async (mongoDB, id) => {
  const data = await mongoDB.db(DB).collection(table).findOne({ id });
  await mongoDB
    .db(DB)
    .collection(table)
    .updateOne({ id }, { $set: { sequence: data.sequence + 1 } });
  return data.sequence + 1;
};
