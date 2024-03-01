export const profileSchema = z.object({
    name: z.string()
    .min(1)
    .regex(/^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/, {
      message: "El nombre solo puede contener letras, espacios y tildes",
      required_error: "El nombre es requerido",
    }),

    lastname:z.string()
    .min(1)
    .regex(/^[a-zA-ZÁÉÍÓÚáéíóúÜü\s']+$/u, {
      message: "Solo se permiten letras, tildes, apóstrofes y/o espacios",
      required_error: "El apellido es requerido",
    }),
    email:z.string()
    .regex(/^[a-zA-Z0-9._%+-]+@(?:hotmail|gmail|yahoo)\.(?:com|com\.mx|es|net)$/,{
     message: "Debe ingresar un e-mail válido",
    }),
    age: z.number().min(18, "Debes tener 18 años o más"),
    province: z.string()
    .regex(/^[a-zA-Z\s]+$/,{
        message: 'Solo se permiten letras y/o espacios',
        required_error: "La provincia es requerida",
    }),
   city: z.string()
    .regex(/^[a-zA-Z\s]+$/,{
        message: 'Solo se permiten letras y/o espacios',
        required_error: "La localidad es requerida",
    }),
    personalDescription: z.string()
    .min(20,{
        message:'Debe ingresar un mínimo de 20 caracteres'
    })
    .max(300,{
        message: 'Debe ingresar un máximo de 300 caracteres'
    }),
    img: z.string()
    .regex(/^(https?|ftp):\/\/[^\s/$.?#].[^\s]*\.(jpg|jpeg|png|gif|bmp|svg|webp)$/,{
     message:'Debe ingresar una URL válida'
    })
});
