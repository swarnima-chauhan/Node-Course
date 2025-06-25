const { getDB } = require("../utils/databaseUtil");
module.exports = class Favourite {
  constructor(homeId) {
    this.homeId = homeId;
  }

  save() {
    const db = getDB();
    return db.collection("favourites").insertOne(this);
  }

  static getFavourites() {
    const db = getDB();
    return db.collection("favourites").find().toArray();
  }

  static deleteById(delHomeId) {
    const db = getDB();
    return db.collection("favourites").deleteOne({ homeId: delHomeId });
  }
};
