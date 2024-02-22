import { initializeApp } from "firebase/app";
import { GoogleAuthProvider } from "firebase/auth";

const firebaseGoogleConfig = {
  apiKey: import.meta.env.VITE_APP_GOOGLE_CLIENT_API_KEY,
  authDomain: import.meta.env.VITE_APP_GOOGLE_CLIENT_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_APP_GOOGLE_CLIENT_PROJECT_ID,
  storageBucket: import.meta.env.VITE_APP_GOOGLE_CLIENT_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_APP_GOOGLE_CLIENT_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_GOOGLE_CLIENT_APP_ID,
};

// Inicializa Firebase
const app = initializeApp(firebaseGoogleConfig);
console.log(app);

// Configura el proveedor de autenticación de Google
const provider = new GoogleAuthProvider();

export { app, provider };
