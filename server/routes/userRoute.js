import { Router } from "express";
import {
  register,
  login,
  logout,
  verifyEmail,
  forgotPassword,
} from "../controllers/user.controller.js";
import { validateSchema } from "../middlewares/validator.middleware.js";
import { loginSchema, registerSchema } from "../schemas/user.js";

const router = Router();

router.post("/register", validateSchema(registerSchema), register);
router.post("/login", validateSchema(loginSchema), login);
router.post("/verify-email", verifyEmail);
router.post("/logout", logout);
router.patch("/forgotPassword", forgotPassword);

export default router;
