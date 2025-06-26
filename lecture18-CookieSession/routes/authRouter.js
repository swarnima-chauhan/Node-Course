//External modules
const express = require("express");
const authRouter = express.Router();

//local module
const authController = require("../controllers/authController");

authRouter.get("/login", authController.getLogin);
authRouter.post("/login", authController.postLogin);

module.exports = authRouter;
