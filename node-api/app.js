const express = require("express");
const app = express();
const todoRoutes = require("./routes/todos");
const bodyParser = require("body-parser");

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log("middleware");
  next();
});

app.use(todoRoutes);

app.listen(3000);
