"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getActUsers = exports.getUserById = void 0;
const { PrismaClient: PrismaSQLClient } = require('@prisma/client');
const ActUser_1 = require("../models/ActUser");
const sqlClient = new PrismaSQLClient({ log: ["query", "info"] });
const getUserById = async (req, res) => {
    const { userId } = req.query;
    const intUserId = parseInt(userId);
    try {
        const user = await sqlClient.userInfomation.findUnique({
            where: {
                UserId: intUserId,
            },
        });
        if (user) {
            res.status(200).json({ data: user });
        }
        else {
            res.status(404).json("User not found");
        }
    }
    catch (e) {
        console.log(e);
    }
};
exports.getUserById = getUserById;
const getActUsers = async (req, res) => {
    try {
        const users = await ActUser_1.AuditLogsModel.find({});
        res.send(users);
    }
    catch (error) {
        console.error(error);
        res.status(500).send(error);
    }
};
exports.getActUsers = getActUsers;
//# sourceMappingURL=users.js.map