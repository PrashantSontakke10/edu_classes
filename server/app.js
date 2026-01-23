import express from "express";
import connectDB from "./src/database/database.js";
import dotenv from "dotenv";
dotenv.config();

const app = express();
const port = process.env.PORT || 3000;



connectDB().then(async () => {
  console.log("Connected Database Successfully")
  app.listen(port, () => {
    console.log(`Database Connected to port ${port}`);
  })
}).catch(() => {
  console.error("Error in connection with database");
});