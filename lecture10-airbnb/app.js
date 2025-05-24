//External module
const express = require("express");

//local module
const userRouter = require("./routes/userRouter");

const app = express();

app.use((req, res, next) => {
  console.log(req.url, req.method);
  next();
});

app.use(express.urlencoded());

app.use(userRouter);

app.get("/host/add-home", (req, res, next) => {
  res.send(`
        <h1> Register your home here </h1>
        <form action="/host/add-home" method="POST">
        <input type="text" name="houseName" placeholder="Enter the name of your house" />
        <input type="submit"/>
        </form>
    `);
});

app.post("/host/add-home", (req, res, next) => {
  console.log(req.body);
  res.send(`
    <h1>Home registered successfully</h1>
    <a href="/">Go to Home</a>
    `);
});

app.listen(3000, () => {
  console.log(`Server running on http://localhost:3000`);
});
