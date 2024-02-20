import { signInWithPopup, GoogleAuthProvider, getAuth } from "firebase/auth";

import { app } from "./firebaseGoogleConfig.js";

export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  return new Promise((resolve, reject) => {
    signInWithPopup(auth, provider)
      .then((result) => {
        const user = result.user;
        console.log("Usuario de Google:", user);
        // Puedes acceder a la información del usuario aquí, por ejemplo:
        console.log("Nombre de usuario:", user.displayName);
        console.log("Correo electrónico:", user.email);
        console.log("Foto de perfil:", user.photoURL);
        resolve(user); // Resolvemos la promesa para indicar que el inicio de sesión ha sido exitoso
      })
      .catch((error) => {
        console.error("Error de inicio de sesión con Google:", error);
        reject(error); // Rechazamos la promesa en caso de error
      });
  });
};
