const mongoose = require("mongoose");
require('dotenv').config();
mongoose.connect(process.env.MongoDB_URL);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongo Database connected successfully");
});

module.exports = db;
