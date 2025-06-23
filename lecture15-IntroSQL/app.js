//Core Modules
const path = require("path");

//External module
const express = require("express");

//local module
const storeRouter = require("./routes/storeRouter");
const hostRouter = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");
const errorsController = require("./controllers/errors");
const db = require("./utils/databaseUtil");

db.execute("SELECT * FROM homes")
  .then(([rows, fields]) => {
    console.log("Getting from db:", rows);
  })
  .catch((err) => {
    console.log("Error fetching from db:", err);
  });

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(storeRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use(errorsController.pageNotFound);

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
