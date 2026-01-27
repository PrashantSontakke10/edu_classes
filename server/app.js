import dotenv from "dotenv";
dotenv.config({path:"./.env"});

import express from "express";
import cors from "cors"
import mongoose from "mongoose";
import cookieParser from "cookie-parser";

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cookieParser());
app.use(cors({
    origin: '*',
    credentials: true,
    methods: ['GET', 'POST','PUT', 'OPTIONS','DELETE'],
    allowedHeaders: ['Content-Type','Authorization']
}));

import userRoutes from "./src/routes/userRoute.js";
import authRoute from "./src/routes/authRoute.js";

app.use("/api/auth",authRoute);
app.use("/api/user", userRoutes);

mongoose.connect(process.env.DB_URL)
.then(()=> app.listen(PORT,()=>console.log(`Server running successfully to port ${PORT}`)))
.catch((err)=>console.log(err));

mongoose.connection.on("error", (err) => {
    console.error("MongoDB Connection Error:", err);
});