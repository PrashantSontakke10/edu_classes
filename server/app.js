import express from "express";
import dotenv from "dotenv";
import cors from "cors"
import mongoose from "mongoose";
import authRoute from "./src/routes/authRoute.js";
dotenv.config({path:"./.env"});

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST','PUT', 'OPTIONS','DELETE'],
    allowedHeaders: ['Content-Type','Authorization']
}));

app.use("/api/auth",authRoute);

mongoose.connect(process.env.DB_URL)
.then(()=> app.listen(PORT,()=>console.log(`Server running successfully to port ${PORT}`)))
.catch((err)=>console.log(err));

mongoose.connection.on("error", (err) => {
    console.error("MongoDB Connection Error:", err);
});