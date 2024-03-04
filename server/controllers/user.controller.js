import User from "../Database/models/userModel.js";
import bcryptjs from "bcryptjs";
import sendEmail from "../helpers/mailer.js";
import { createAccessToken } from "../helpers/accessToken.js";
import jwt from "jsonwebtoken";
import { JWT_SECRET_KEY } from "../config.js";

export const register = async (request, response) => {
  try {
    const { username, email, password } = request.body;

    //check if user already exists
    const user = await User.findOne({ email });

    if (user) {
      return response.status(400).json({
        message: ["El correo electrónico ya está en uso"],
      });
    }

    // hash password
    const salt = await bcryptjs.genSalt(10);
    const hashedPassword = await bcryptjs.hash(password, salt);

    // Create new user
    const newUSer = new User({
      username,
      email,
      password: hashedPassword,
    });

    const savedUser = await newUSer.save();
    // send verification email

    // await sendEmail({ email, emailType: "VERIFY", userId: savedUser._id });

    return response.status(201).json({
      message: "Usuario creado correctamente",
      success: true,
      savedUser,
    });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};

export const login = async (request, response) => {
  try {
    const { email, password } = request.body;

    const user = await User.findOne({ email });

    // Verifico si el usuario existe

    if (!user) {
      return response.status(400).json({ message: "El usuario no existe" });
    }

    const validatePassword = await bcryptjs.compare(password, user.password);

    // Verifico que la contraseña se igual

    if (!validatePassword) {
      return response.status(400).json({ message: "Contraseña invalida" });
    }

    // Creo un Token de datos

    const tokenData = {
      id: user._id,
      username: user.username,
    };

    // Creo un Token

    const token = await createAccessToken(tokenData);

    // Establezco la cookie en la respuesta

    response.cookie("token", token, {
      httpOnly: true,
      secure: true,
    });

    // Envío la respuesta al cliente

    return response.json({
      message: "Inicio de sesión correcto",
      success: true,
    });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
export const logout = async (request, response) => {
  try {
    response.cookie("token", "", { httpOnly: true, expires: new Date(0) });

    return response.sendStatus(200);
  } catch (error) {
    return response.status(500).json({ error: error.message });
  }
};
export const verifyEmail = async (request, response) => {
  try {
    const { token, email } = request.body;

    // Si existe el { email } en el body entonces envio un correo para cambio de contraseña
    if (email) {
      const verifyEmailUser = await User.findOne({ email });

      if (!verifyEmailUser) {
        return response.status(400).json({ message: "El correo no existe" });
      }

      const userId = verifyEmailUser._id;
      await sendEmail({ email, emailType: "RESET", userId });
      return response.json({ message: "Correo enviado", success: true });
    }

    const user = await User.findOne({
      verifyToken: token,
      verifyTokenExpiry: { $gt: Date.now() },
    });

    // Si existe { user }, Verifico al usuario

    if (user) {
      if (!user) {
        return response.status(400).json({ message: "Token invalido" });
      }

      user.isVerfied = true;
      user.verifyToken = undefined;
      user.verifyTokenExpiry = undefined;
      await user.save();

      return response.json({
        message: "Correo electrónico verificado",
        success: true,
        type: "EMAILVERIFY",
      });
    }

    //
    const userForgotPasswordToken = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!userForgotPasswordToken) {
      return response.status(400).json({ error: "Token invalido" });
    }

    return response.json({
      message: "Correo electrónico verificado",
      success: true,
      type: "FORGOTPASSWORD",
    });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
export const forgotPassword = async (request, response) => {
  try {
    const { token, password } = request.body;
    const user = await User.findOne({
      forgotPasswordToken: token,
      forgotPasswordTokenExpiry: { $gt: Date.now() },
    });

    if (!user) {
      return response.status(400).json({ error: "Token invalido" });
    }
    user.password = password;
    user.forgotPasswordToken = undefined;
    user.forgotPasswordTokenExpiry = undefined;
    await user.save();

    return response.json({ message: "Cambio de contraseña", success: true });
  } catch (error) {
    return response.status(500).json({ message: error.message });
  }
};
export const verifyToken = async (resquest, response) => {
  const { token } = resquest.cookies;
  console.log(token);
  if (!token) return response.send(false);

  jwt.verify(token, JWT_SECRET_KEY, async (error, user) => {
    if (error) return response.sendStatus(401);

    const userFound = await User.findById(user.id);

    if (!userFound) return response.sendStatus(401);

    return response.json({
      id: userFound._id,
      username: userFound.username,
      email: userFound.email,
    });
  });
};
