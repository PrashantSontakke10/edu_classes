import express from "express";
import cors from "cors";
import testRoutes from "./routes/test.routes.js";

const app = express();

app.use(cors({
  origin: process.env.CORS_ORIGIN,
  credentials: true,
}));

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API Running");
});


app.use("/api/test", testRoutes);

export default app;
