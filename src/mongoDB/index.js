import mongodb from "mongodb";

const MongoClient = mongodb.MongoClient;
let mongoConnection = new MongoClient({});

mongoConnection = new MongoClient(process.env.MONGODB_URL, {
  bufferMaxEntries: 0,
  useNewUrlParser: true,
  socketTimeoutMS: 60000,
  promiseLibrary: Promise,
  poolSize: 10,
});
mongoConnection
  .connect()
  .then(() => {
    console.log("mongoDb Connected");
  })
  .catch((e) => {
    console.log(e);
  });

const mongoDB = mongoConnection;

export default mongoDB;
