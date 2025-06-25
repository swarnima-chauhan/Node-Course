//core modules
const mongoose = require("mongoose");

const homeSchema = mongoose.Schema({
  houseName: { type: String, required: true },
  price: { type: Number, required: true },
  location: { type: String, required: true },
  rating: { type: Number, required: true },
  photoUrl: { type: String },
  description: { type: String },
});

module.exports = mongoose.model("Home", homeSchema);

/**
 * this._id = _id ? _id : null;
    this.houseName = houseName;
    this.price = price;
    this.location = location;
    this.rating = rating;
    this.photoUrl = photoUrl;
    this.description = description;
    *
    save()
    find()
    findById(homeId)
    deleteById()
 */
