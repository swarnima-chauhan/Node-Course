//External modules
const express = require("express");
const storeRouter = express.Router();

//local module
const storeController = require("../controllers/storeController");

storeRouter.get("/", storeController.getHomes);
storeRouter.get("/bookings", storeController.getBookings);

module.exports = storeRouter;
