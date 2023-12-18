import { Router } from "express";

import { getUserById, getActUsers } from "../controllers/users";

const userRouter = Router();
userRouter.get("/", (req, res) => {
  res.send("welecom to get user function!!");
});

userRouter.get("/getUserById", getUserById);
userRouter.get("/getActUsers", getActUsers);

export default userRouter;
