import express  from "express";
import cors from "cors";
import morgan from "morgan";
import cookieParser from "cookie-parser";

import userRoute from "./routes/userRoute.js"

const app = express();


app.use(
  cors({
    credentials: true,
    origin: process.env.FRONTEND_URL,
  })
);
app.use(express.json());
app.use(morgan("dev"));
app.use(cookieParser());

app.use("/api/users", userRoute);

app.get("/", (request, response) => {
  response.send("Bienvenido...");
});

export default app