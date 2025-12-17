import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";

dotenv.config();
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (res) => {
  res.send("Hello Task");
});

app.listen(5000, () => {
  console.log("Server is running");
});

export default app;
