const express = require("express");
const app = express();
const userRouter = require("./routes/users");
const cors = require("cors");

const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use("/api", userRouter);
app.get("/get", (req, res) => res.send(`Get REST API  on ${port}.`));

app.listen(port, () => {
  console.log(`My REST API running on ${port}`);
});