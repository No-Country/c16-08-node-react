const User = require("../models/userModel");
const jwt = require("jsonwebtoken");
const { createError } = require("../utils/error");

exports.verifyToken = (req, res, next) => {
  const token = req.cookies.access_token;
  console.log("Token:", token); // Verificar si el token está presente en la cookie

  if (!token) {
    return next(createError(401, "You are not authenticated."));
  }
  jwt.verify(token, process.env.JWT, (err, user) => {
    if (err) return next(createError(403, "Token is not valid."));
    console.log("Error verifying token:", err); // Verificar el error de la verificación del token

    console.log("User:", user); // Verificar los datos del usuario asignados a req.user

    req.user = user;
    next();
  });
};

exports.verifyUser = (req, res, next) => {
  console.log("req.params:", req.params); // Verifica si req.params está definido y qué contiene

  const userIdFromParams = req.params.id; // Obtener el ID del usuario de req.params

  exports.verifyToken(req, res, () => {
    console.log("Verifying user with ID:", userIdFromParams);

    console.log("req.user.id:", req.user.id);

    if (req.user && req.user.id === userIdFromParams) {
      next();
    } else {
      return next(createError(403, "You are not authorized."));
    }
  });
};
