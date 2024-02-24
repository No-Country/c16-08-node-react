import app from "./app.js";
import { PORT } from "./config.js";
import { connectDB } from "./Database/dbConfig.js";
import dotenv from "dotenv";
dotenv.config();

async function main() {
  try {
    connectDB();
    app.listen(PORT, () => {
      console.log(`Server running on port: ${PORT}...`);
    });
  } catch (error) {
    console.error(error);
  }
}

main();
