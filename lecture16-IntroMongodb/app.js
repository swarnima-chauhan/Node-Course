//Core Modules
const path = require("path");

//External module
const express = require("express");

//local module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const { mongoConnect } = require("./utils/databaseUtil");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.pageNotFound);

mongoConnect(() => {
  app.listen(3000, () => {
    console.log(`Server running on http://localhost:3000`);
  });
});
