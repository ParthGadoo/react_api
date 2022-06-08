const express = require("express");
const app = express();
const port = process.env.PORT || 3000;
const mongoose = require("mongoose");
const todoRoutes = require("./routes/todos");
const bodyParser = require("body-parser");
mongoose
  .connect("mongodb://localhost/react_api")
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(__dirname + "/views"));
app.use(express.static(__dirname + "/public"));

app.get("/", (req, res) => {
  res.sendFile(index.html);
});

app.use("/api/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Serving on Port 3000");
});
