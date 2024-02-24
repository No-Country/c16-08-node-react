import { Router } from "express";
import {
   register,
} from "../controllers/user.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/user.js";

const router = Router();

 router.post("/register", validateSchema(registerSchema), register);
// router.post("/login", validateSchema(loginSchema), login);
// router.get("/verify", verifyToken);
// router.post("/logout", verifyToken, logout);

export default router;