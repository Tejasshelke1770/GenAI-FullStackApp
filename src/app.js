import express from "express";
import cors from "cors";
const app = express();
import authRouter from "./routes/auth.routes.js";
import cookieParser from "cookie-parser";

app.use(express.json());
app.use(cors());
app.use(cookieParser());

app.use("/api/auth", authRouter);

export default app;
