import express from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import "./src/config/data-source.js";

dotenv.config();
const app = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (res) => {
  res.send("Hello Task");
});

const PORT = process.env.PORT;

app.listen(PORT, () => {
  console.log("Server is running", PORT);
});

export default app;
