const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error");
const dotenv = require("dotenv");
dotenv.config();


// Función para generar un nuevo token de acceso
/* function generateAccessToken(user) {
  return jwt.sign(user, process.env.JWT, { expiresIn: '1h' }); // Ajusta el tiempo de expiración según tus necesidades
} */

exports.verifyToken = (req, res, next) => {
  const secret = process.env.JWT;

  let token = req.headers["authorization"];
  console.log("El token", token)

  if (!token || !token.startsWith("Bearer ")) {
    return res.status(403).send({ message: "No token provided!" });
  }

  token = token.slice(7, token.length); // Eliminar el prefijo "Bearer " del token

  jwt.verify(token, secret, (err, decoded) => {
    if (err) {
      return res.status(401).send({ message: "Unauthorized!" });
    }
    req.userId = decoded.id;
    next();
  });
}; 

exports.verifyUser = (req, res, next) => {
  console.log("req.params:", req.params);

  const userIdFromParams = req.params.id;

  exports.verifyToken(req, res, () => {
    console.log("Verifying user with ID:", userIdFromParams);

    if (req.userId === userIdFromParams) { // Corregido para comparar con req.userId
      next();
    } else {
      return next(createError(403, "You are not authorized."));
    }
  });
};


exports.verifyUserEmail = async (req, res, next) => {
  const { email } = req.body;

  try {
    // Buscar un usuario con el mismo correo electrónico en la base de datos
    const existingUser = await User.findOne({ email });

    if (existingUser && existingUser.id !== req.params.id) {
      return next(createError(400, "Email already exists in the database."));
    }

    next(); // Continuar con el siguiente middleware si el correo electrónico no está duplicado
  } catch (error) {
    // Manejar el error
    return next(createError(500, "Internal server error."));
  }
};




















