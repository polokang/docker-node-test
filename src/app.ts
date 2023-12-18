import express from "express";
import cors from "cors";
import userRouter from "./routes/users";

const app = express();
const port = process.env.PORT || 8081;

app.use(cors());
app.use(express.json());
app.use("/api", userRouter);
app.get("/get", (req, res) => res.send(`Get REST API  on ${port}.`));

app.listen(port, () => {
  console.log(`My REST API running on ${port}`);
});
