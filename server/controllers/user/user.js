const User = require("../../models/userModel");
const bcrypt = require("bcryptjs");

//Actualiza los datos de un usuario en la DB.
exports.updateUser = async (req, res, next) => {
  try {
    // Genera el hash del nuevo password
    if (req.body.password) {
      const hashedPassword = await bcrypt.hash(req.body.password, 10); // 10 es el número de rondas de encriptación
      req.body.password = hashedPassword;
    }

    // Actualiza los datos del usuario en la DB
    const updatedUser = await User.findByIdAndUpdate(
      req.params.id,
      { $set: req.body },
      { new: true }
    );

    res.status(200).json(updatedUser);
  } catch (err) {
    next(err);
  }
};

//Elimina a un usuario de la base de datos
exports.deleteUser = async (req, res, next) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.status(200).json("User has been deleted.");
  } catch (err) {
    next(err);
  }
};

// Obtener información de un usuario específico por su ID
exports.getUser = async (req, res, next) => {
  try {
    const user = await User.findById(req.params.id);
    if (!user) {
      return res.status(404).json({ message: "User not found." });
    }

    // Devolver solo la información necesaria, como el nombre de usuario
    res.json({ name: user.email });
  } catch (err) {
    next(err);
  }
};
