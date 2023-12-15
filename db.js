const mongoose = require("mongoose");
mongoose.connect("mongodb+srv://AqRWUser:VMm5VmYA3HxtxtKp@cluster0.dyh9h.mongodb.net/AquariusTestDB");
const db = mongoose.connection;

db.on("error", console.error.bind(console, "connection error:"));
db.once("open", function () {
  console.log("Mongo Database connected successfully");
});

module.exports = db;