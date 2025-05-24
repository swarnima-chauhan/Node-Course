//external module
const express = require("express");
//core module
const path = require("path");
//local module
const rootDir = require("../utils/pathUtil");

const contactRouter = express.Router();

contactRouter.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for GET", req.url, req.method);
  res.sendFile(path.join(rootDir, "views", "contact.html"));
});

contactRouter.post("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us for POST", req.url, req.method, req.body);
  res.sendFile(path.join(rootDir, "views", "contactSuccess.html"));
});

module.exports = contactRouter;
