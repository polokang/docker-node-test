const { PrismaClient: PrismaSQLClient } = require('@prisma/client');
import { AuditLogsModel } from "../models/ActUser";
const sqlClient = new PrismaSQLClient({ log: ["query", "info"] });

export const getUserById = async (req, res) => {
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
    } else {
      res.status(404).json("User not found");
    }
  } catch (e) {
    console.log(e);
  }
};




export const getActUsers = async (req, res) => {
  try {
    const users = await AuditLogsModel.find({});
    res.send(users);
  } catch (error) {
    console.error(error);
    res.status(500).send(error);
  }
}
