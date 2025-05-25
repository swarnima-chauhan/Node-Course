//Core Modules
// const path = require("path");

//External modules
const express = require("express");
const userRouter = express.Router();

//local module
const rootDir = require("../utils/pathUtil");
const { registeredHomes } = require("./hostRouter");

userRouter.get("/", (req, res, next) => {
  console.log(registeredHomes);
  // res.sendFile(path.join(rootDir, "views", "home.html"));
  res.render("home", { registeredHomes, pageTitle: "airbnb home" });
});

module.exports = userRouter;
