const mongoClient = require('mongodb').MongoClient;

const DB_URL = 'mongodb://localhost:27017/';
const DB_NAME = 'juris_hand';

const connection = async () => {
  return mongoClient
    .connect(DB_URL, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then((connection: { db: (arg0: string) => any; }) => connection.db(DB_NAME))
    .catch((err: any) => {
      console.error(err);
      process.exit(1);
   });
};

module.exports = connection;
