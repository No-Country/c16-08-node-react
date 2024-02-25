import { JWT_SECRET_KEY } from "../config.js";
import jwt from "jsonwebtoken";
import { promisify } from "util";

const signAsync = promisify(jwt.sign);

export async function createAccessToken(payload) {
  try {
    const token = await signAsync(payload, JWT_SECRET_KEY, { expiresIn: "1d" });
    return token;
  } catch (error) {
    throw new Error(error);
  }
}
