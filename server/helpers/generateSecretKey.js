import crypto from "crypto"

// Generar una clave secreta aleatoria de 64 bytes (512 bits)
const generateSecretKey = () => {
  return crypto.randomBytes(64).toString('hex');
};

const secretKey = generateSecretKey();


export default secretKey