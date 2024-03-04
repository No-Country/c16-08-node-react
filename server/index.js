import app from "./app.js";
import { connectDB } from "./Database/dbConfig.js";
import dotenv from "dotenv";
import { PORT } from "./config.js";
dotenv.config();

async function main() {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Servidor funcionando en el puerto: ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
