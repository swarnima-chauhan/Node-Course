//Core Modules
const path = require("path");

//External module
const express = require("express");
const session = require("express-session");
const MongoDBStore = require("connect-mongodb-session")(session);

//local module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const authRouter = require("./routes/authRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const mongoose = require("mongoose");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const store = new MongoDBStore({
  uri: "mongodb+srv://root:root@completecoding.bswvdui.mongodb.net/airbnb?retryWrites=true&w=majority&appName=CompleteCoding",
  collection: "sessions",
});

app.use(express.urlencoded());
app.use(
  session({
    secret: "KnowledgeGate AI with Complete Coding",
    resave: false,
    saveUninitialized: true,
    store: store,
  })
);

app.use((req, res, next) => {
  req.isLoggedIn = req.session.isLoggedIn;
  next();
});

app.use(authRouter);
app.use(storeRouter);
app.use("/host", (req, res, next) => {
  if (req.isLoggedIn) {
    next();
  } else {
    res.redirect("/login");
  }
});
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.pageNotFound);

mongoose
  .connect(
    "mongodb+srv://root:root@completecoding.bswvdui.mongodb.net/airbnb?retryWrites=true&w=majority&appName=CompleteCoding"
  )
  .then(() => {
    console.log("Connected to MongoDB");
    app.listen(3000, () => {
      console.log(`Server running on http://localhost:3000`);
    });
  })
  .catch((err) => {
    console.log("Error connecting to MongoDB:", err);
  });
