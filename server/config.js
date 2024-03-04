import secretKey from "./helpers/generateSecretKey.js"
import dotenv from "dotenv";
dotenv.config();

export const JWT_SECRET_KEY =  secretKey
