const mongoose = require("mongoose");
const db = require("../db");
const actUserSchema = new mongoose.Schema(
  {
    _id: mongoose.Types.ObjectId
  },
  {
    collection: "Act_User",
    versionKey: false,
    strict: false,
  }
);

const actUser = db.model("Act_User", actUserSchema);

module.exports = actUser;
