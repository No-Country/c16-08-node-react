// regex para validar que sea una url.

export const URL_CHECKED = /[(http(s)?):\/\/(www\.)?a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/

// regex para validar que sea una url de imagen.

export const URLIMG_CHECKED = /^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png)$/;
 
// regex para validar que sea una contraseña segura.


// debe cumplir con al menos 1 mayuscula, un numero, un caracter especial, no admite espacios. y tiene que tener un min de 8 y un maximo de 15
export const PASSWORD_CHECKED = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])[A-Za-z\d$@$!%*?&]{8,15}$/

// regex para validar correos bajo los estanderes de hotmail. gmail, y yahoo.

export const EMAIL_CHECKED = /^[a-zA-Z0-9._%+-]+@(?:hotmail|gmail|yahoo)\.(?:com|com\.mx|es|net)$/

//valida que contenga solo números o los simbolos (), + o -
export const PHONE_CHECKED = /^[0-9()+\- ]*[0-9][0-9()+\- ]*$/




//valida que solo contenga letras y espacios
export const STRING_CHECKED = /^[a-zA-Z\s]+$/
