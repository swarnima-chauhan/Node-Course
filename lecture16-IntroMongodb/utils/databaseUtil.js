const mongo = require("mongodb");

const MongoClient = mongo.MongoClient;

let _db;

const MONGO_URL =
  "mongodb+srv://root:root@completecoding.bswvdui.mongodb.net/?retryWrites=true&w=majority&appName=CompleteCoding";

const mongoConnect = (callback) => {
  MongoClient.connect(MONGO_URL)
    .then((client) => {
      _db = client.db("airbnb");
      callback();
    })
    .catch((err) => {
      console.log("Error connecting to MongoDB:", err);
    });
};

const getDB = () => {
  if (!_db) {
    throw new Error("Mongo Not connected!");
  }
  return _db;
};

exports.mongoConnect = mongoConnect;
exports.getDB = getDB;
