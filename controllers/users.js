const { PrismaClient: PrismaSQLClient } = require('@prisma/client');

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
    } else {
      res.status(404).json("User not found");
    }
  } catch (e) {
    console.log(e);
  }
};

module.exports = getUserById;
