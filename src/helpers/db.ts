import mongoose from "mongoose";
require('dotenv').config();
export const connMongoDB = mongoose.createConnection(process.env.MongoDB_URL);

// const mongoose = require("mongoose");

// import db from "./db"
// require('dotenv').config();
// mongoose.connect(process.env.MongoDB_URL);
// const db = mongoose.connection;

// db.on("error", console.error.bind(console, "connection error:"));
// db.once("open", function () {
//   console.log("Mongo Database connected successfully");
// });

// module.exports = db;