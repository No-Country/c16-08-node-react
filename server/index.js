import app from "./app.js";
import { connectDB } from "./Database/dbConfig.js";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    connectDB();
    app.listen(process.env.PORT, () => {
      console.log(`Servidor funcionando en el puerto: ${process.env.PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
