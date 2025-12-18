import "reflect-metadata";
import { DataSource } from "typeorm";
import dotenv from "dotenv";
import { Product } from "../entities/product.entity";

dotenv.config();

export const AppDataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT) || 5432,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  synchronize: true, //only for development purposes
  entities: [Product],
  logging: false,
});

AppDataSource.initialize()
  .then(() => {
    console.log("Database is connected");
  })
  .catch((error) => {
    console.log("TypeORM error:", error);
  });
