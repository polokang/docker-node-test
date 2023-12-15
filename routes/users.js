const express = require("express");
const actUser = require("../models/ActUser");
const getUserById = require("../controllers/users");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("welecom to get user function!!");
});

userRouter.get("/getUserById", getUserById);

userRouter.get("/users", async (req, res) => {
  try {
    const users = await actUser.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
});

module.exports = userRouter;
