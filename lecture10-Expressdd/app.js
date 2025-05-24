const express = require("express");
const bodyParser = require("body-parser");

const app = express();

app.use((req, res, next) => {
  console.log("First Dummy middleware", req.url);
  next();
});

app.use((req, res, next) => {
  console.log("Second Dummy middleware", req.method);
  next();
});

app.get("/", (req, res, next) => {
  console.log("Handling / to GET");
  res.send(`Welcome`);
});

app.get("/contact-us", (req, res, next) => {
  console.log("Handling /contact-us to GET");
  res.send(`<html>
    <head><title>Contact-Us</title></head>
    <body>
        <form action="/contact-us" method="post">
        <input type="text" name="name" placeholder="Enter your name"/>
        <input type="email" name="email" placeholder="Enter your email"/>
        <input type="submit">
        </form>
    </body>
    </html>`);
});

app.post("/contact-us", (req, res, next) => {
  console.log("First handling", req.url, req.method, req.body);
  next();
});

app.use(bodyParser.urlencoded());

app.post("/contact-us", (req, res, next) => {
  console.log("we got the request", req.url, req.method, req.body);
  res.send("<p>we will contact you shortly</p>");
});

app.listen(3000, () => {
  console.log("Server is starting at http://localhost:3000");
});
