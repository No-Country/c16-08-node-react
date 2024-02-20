import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseGoogleConfig = {
  apiKey: process.env.REACT_APP_GOOGLE_CLIENT_API_KEY,
  authDomain: process.env.REACT_APP_GOOGLE_CLIENT_AUTH_DOMAIN,
  projectId: process.env.REACT_APP_GOOGLE_CLIENT_PROJECT_ID,
  storageBucket: process.env.REACT_APP_GOOGLE_CLIENT_STORAGE_BUCKET,
  messagingSenderId: process.env.REACT_APP_GOOGLE_CLIENT_MESSAGING_SENDER_ID,
  appId: process.env.REACT_APP_GOOGLE_CLIENT_APP_ID,
};

// Inicializa Firebase
const app = initializeApp(firebaseGoogleConfig);
console.log(app);

// Configura el proveedor de autenticación de Google
const provider = new GoogleAuthProvider();

export { app, provider };
