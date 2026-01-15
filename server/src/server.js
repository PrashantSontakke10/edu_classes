import dotenv from "dotenv";
// go ONE level up from src to server



import path from "path";
import { fileURLToPath } from "url";
import connectDb from "./config/db.js";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

import app from "./app.js";
dotenv.config({ path: path.join(__dirname, "../.env") });
console.log("ENV MONGO:", process.env.MONGODB_URI);

const PORT = process.env.PORT || 5000;

connectDb().then(
     async () => {
        app.listen(PORT, () => {
          console.log(`Server is running on port ${PORT}`);
        });
     }
  ).catch((error) => {
    console.error("Failed to connect to the database:", error);
    process.exit(1);
  });

