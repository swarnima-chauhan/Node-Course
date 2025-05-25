//Core Modules
const path = require("path");

//External module
const express = require("express");

//local module
const userRouter = require("./routes/userRouter");
const { hostRouter } = require("./routes/hostRouter");
const rootDir = require("./utils/pathUtil");

const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

app.use(express.urlencoded());
app.use(userRouter);
app.use("/host", hostRouter);

app.use(express.static(path.join(rootDir, "public")));

app.use((req, res, next) => {
  res.render("404", { pageTitle: "Page not found" });
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
