//Core Modules
const path = require("path");

//External module
const cors = require("cors");
const express = require("express");
const mongoose = require("mongoose");
const DB_PATH =
  "mongodb+srv://root:root@completecoding.bswvdui.mongodb.net/todo?retryWrites=true&w=majority&appName=CompleteCoding";

const app = express();

const errorsController = require("./controllers/errors");
const todoItemsRouter = require("./routes/todoItemRouter");

app.use(express.urlencoded());
app.use(express.json());
app.use(cors());

app.use("/api/todo", todoItemsRouter);

app.use(errorsController.pageNotFound);

mongoose
  .connect(DB_PATH)
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Server running on http://localhost:3000`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
