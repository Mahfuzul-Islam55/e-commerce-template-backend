import "reflect-metadata";
import express, { Application, Request, Response } from "express";
import cors from "cors";
import helmet from "helmet";
import dotenv from "dotenv";
import "./config/data-source";

dotenv.config();

const app: Application = express();

app.use(cors());
app.use(helmet());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Hello Task");
});

const PORT = Number(process.env.PORT) || 5000;

app.listen(PORT, () => {
  console.log("Server is running on port", PORT);
});

export default app;
