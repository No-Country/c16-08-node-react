const dotenv = require("dotenv");
const express = require("express");
const mongoose = require("mongoose");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const path = require("path");

// Importar rutas
//const usersRoute = require("./routes/users");

const app = express();
dotenv.config(); // Cargar variables de entorno desde .env

// Función para conectar a MongoDB
const connectToMongoDB = async () => {
  try {
    await mongoose.connect(
      process.env.MONGODB_URI
    );
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

// Middleware
const corsOptions = {
  origin: "http://localhost:3000",
  methods: "GET,POST,PUT,DELETE",
};

app.use(cors(corsOptions)); // Configurar CORS
app.use(cookieParser()); // Analizar cookies
app.use(express.json()); // Analizar solicitudes JSON


// Rutas
//app.use("/api", usersRoute);

//Ruta de prueba para verificar el estado del servidor
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
