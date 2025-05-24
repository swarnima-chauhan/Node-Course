const express = require("express");
const app = express();

app.post("/contact-us", (req, res, next) => {
  console.log("got the post request");
});

app.get("/contact-us", (req, res, next) => {
  console.log("middleware handing path /contact-us");
  res.send(`
    <html>
    <head><title>Contact-Us</title></head>
    <body>
        <form action="/contact-us" method="post">
        <input type="text" name="name" placeholder="Enter your name"/>
        <input type="email" name="email" placeholder="Enter your email"/>
        <input type="submit" name="Submit">
        </form>
    </body>
    </html>
    `);
});

app.use("/", (req, res, next) => {
  console.log("middleware handling path /");
  next();
});

app.use((req, res, next) => {
  console.log(req.url);
  next();
});

app.use((req, res, next) => {
  console.log(req.method);
  next();
});

app.use((req, res, next) => {
  console.log("third middleware");
  res.send("<h1>Welcome to express practice set</h1>");
});

app.listen(3000, () => {
  console.log(`Server is running on http://localhost:3000`);
});
