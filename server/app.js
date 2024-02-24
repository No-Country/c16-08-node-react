import express from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";
import { FRONTEND_URL } from "./config.js";
import userRoute from "./routes/userRoute.js"

const app = express();

app.use(
  cors({
    credentials: true,
    origin: FRONTEND_URL,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/users", userRoute);

app.get("/", (req, res) => {
  res.send("Welcome to our API...");
});

export default app