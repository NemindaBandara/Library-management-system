import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";
import "./db.js";
import { AdminRouter } from "./routes/auth.js";

const app = express();
app.use(express.json);
app.use(cors());
app.use(cookieParser());
dotenv.config();
app.use("/auth", AdminRouter);

app.listen(process.env.PORT, () => {
  console.log("Server is Running");
});
