//Core Modules
const path = require("path");

//External modules
const express = require("express");
const userRouter = express.Router();

//local module
const rootDir = require("../utils/pathUtil");

userRouter.get("/", (req, res, next) => {
  res.sendFile(path.join(rootDir, "views", "home.html"));
});

module.exports = userRouter;
