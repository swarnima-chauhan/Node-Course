//core modules
const { getDB } = require("../utils/databaseUtil");

module.exports = class Home {
  constructor(houseName, price, location, rating, photoUrl, description, id) {
    this.id = id ? id : null;
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
  }

  save() {
    const db = getDB();
    return db.collection("homes").insertOne(this);
  }

  static fetchAll() {
    const db = getDB();
    return db.collection("homes").find().toArray();
  }

  static findById(homeId) {}

  static deleteById(homeId) {}
};
