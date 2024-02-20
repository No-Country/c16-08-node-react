const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");
const jwt = require("jsonwebtoken");

// Importar rutas
const authRoute = require("./routes/auth/auth");
const usersRoute = require("./routes/users/users");

const app = express();
dotenv.config(); // Cargar variables de entorno desde .env

// Función para conectar a MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(process.env.MONGODB_URI);
    console.log("Connected to MongoDB");
  } catch (error) {
    console.error("Error connecting to MongoDB:", error);
    throw error;
  }
};

// Manejar desconexión de MongoDB al detener o reiniciar el servidor
mongoose.connection.on("disconnected", () => {
  console.log("Disconnected from MongoDB");
});

process.on("SIGINT", async () => {
  try {
    await mongoose.connection.close();
    console.log("Disconnected from MongoDB");
    process.exit(0);
  } catch (error) {
    console.error("Error disconnecting from MongoDB", error);
    process.exit(1);
  }
});

const secret = process.env.JWT;

app.post("/token", (req, res) => {
  // Obtener usuario de la base de datos o de alguna fuente confiable
  const { USER_ID, USER_EMAIL } = process.env;

  const token = jwt.sign(
    {
      id: USER_ID,
      email: USER_EMAIL,
      exp: Date.now() + 60 * 60 * 1000, // Expira en 1 hora
    },
    secret
  );

  res.send({ token });
});


// Ruta para renovar tokens
/* app.post('/token', (req, res) => {
  const refreshToken = req.body.token;
  if (refreshToken == null) return res.sendStatus(401);
  if (!refreshToken.includes(refreshToken)) return res.sendStatus(403);
  jwt.verify(refreshToken, process.env.JWT, (err, user) => {
    if (err) return res.sendStatus(403);
    const accessToken = generateAccessToken({ name: user.name });
    res.json({ accessToken: accessToken });
  });
});
 */
// Middleware
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
};

app.use(cors(corsOptions)); // Configurar CORS
app.use(cookieParser()); // Analizar cookies
app.use(express.json()); // Analizar solicitudes JSON

// Rutas
app.use("/api/auth", authRoute);
app.use("/api/users", usersRoute);

//Ruta de prueba para verificar el estado del servidor remoto
app.get("/health", (req, res) => {
  res.status(200).json({ message: "OK" });
});

// Middleware para manejar errores
app.use((err, req, res, next) => {
  const errorStatus = err.status || 500;
  const errorMessage = err.message || "Something went wrong!";
  return res.status(errorStatus).json({
    success: false,
    status: errorStatus,
    message: errorMessage,
    stack: err.stack,
  });
});

const port = process.env.PORT || 5000;

// Iniciar servidor y conectar a MongoDB
app.listen(port, () => {
  connectToMongoDB();
  console.log(`Server running on port ${port}`);
});
