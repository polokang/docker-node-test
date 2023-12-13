const express = require("express");

const getUserById = require("../controllers/users");

const userRouter = express.Router();

userRouter.get("/", (req, res) => {
  res.send("welecom to get user function!!");
});

userRouter.get("/getUserById", getUserById);

module.exports = userRouter;
