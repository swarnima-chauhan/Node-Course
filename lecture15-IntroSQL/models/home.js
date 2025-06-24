//core modules
const db = require("../utils/databaseUtil");

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
    db.execute(
      "INSERT INTO homes (houseName, price, location, rating, photoUrl, description) VALUES (?, ?, ?, ?, ?, ?)",
      [
        this.houseName,
        this.price,
        this.location,
        this.rating,
        this.photoUrl,
        this.description,
      ]
    );
  }

  static fetchAll() {
    return db.execute("SELECT * FROM homes");
  }

  static findById(homeId, callback) {}

  static deleteById(homeId, callback) {}
};
