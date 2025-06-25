//core modules

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

  save() {}

  static fetchAll() {}

  static findById(homeId) {}

  static deleteById(homeId) {}
};
