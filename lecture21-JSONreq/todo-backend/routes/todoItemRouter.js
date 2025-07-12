//External modules
const express = require("express");
const todoItemsRouter = express.Router();

//local module
const todoItemsController = require("../controllers/todoItemsController");

todoItemsRouter.post("/", todoItemsController.createTodoItem);

module.exports = todoItemsRouter;
