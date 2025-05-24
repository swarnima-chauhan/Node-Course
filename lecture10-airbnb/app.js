//External module
const express = require("express");

//local module
const userRouter = require("./routes/userRouter");
const hostRouter = require("./routes/hostRouter");

const app = express();

app.use(express.urlencoded());
app.use(userRouter);
app.use(hostRouter);

app.use((req, res, next) => {
  res.status(404).send(`<h1>404 Your page is not found on airbnb</h1>`);
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
