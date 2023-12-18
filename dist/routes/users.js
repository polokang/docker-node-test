"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const users_1 = require("../controllers/users");
const userRouter = (0, express_1.Router)();
userRouter.get("/", (req, res) => {
    res.send("welecom to get user function!!");
});
userRouter.get("/getUserById", users_1.getUserById);
userRouter.get("/getActUsers", users_1.getActUsers);
exports.default = userRouter;
//# sourceMappingURL=users.js.map