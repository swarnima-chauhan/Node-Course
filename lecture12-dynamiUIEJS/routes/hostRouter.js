//Core Modules
const path = require("path");

//External MOdules
const express = require("express");

//local modules
const rootDir = require("../utils/pathUtil");

const hostRouter = express.Router();

hostRouter.get("/add-home", (req, res, next) => {
  res.sendFile(path.join(__dirname, "../", "views", "addHome.html"));
});

const registeredHomes = [];

hostRouter.post("/add-home", (req, res, next) => {
  console.log(
    "Home Registration successful for:",
    req.body,
    req.body.houseName
  );
  registeredHomes.push({ houseName: req.body.houseName });
  res.sendFile(path.join(rootDir, "views", "homeAdded.html"));
});

exports.hostRouter = hostRouter;
exports.registeredHomes = registeredHomes;
