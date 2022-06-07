const mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/react_api");

mongoose.Promise = Promise;

module.exports.Todo = require("./todo");
