"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.connMongoDB = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
require('dotenv').config();
exports.connMongoDB = mongoose_1.default.createConnection(process.env.MongoDB_URL);
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
//# sourceMappingURL=db.js.map