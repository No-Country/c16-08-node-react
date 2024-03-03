import secretKey from "./helpers/generateSecretKey.js"

// export const PORT = process.env.PORT || 4000;
export const FRONTEND_URL = process.env.FRONTEND_URL || "http://localhost:5173";
export const JWT_SECRET_KEY =  secretKey
