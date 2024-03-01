import { z } from "zod";

export const formSchema = z.object({
  title: z.string()
    .min(5, "Debe tener al menos 5 caracteres")
    .max(50, "No puede exceder los 50 caracteres")
    .required("Debe ingresar un título"),
  description: z.string()
    .min(5, "Debe tener al menos 5 caracteres")
    .max(300, "No puede exceder los 300 caracteres")
    .required("Debe ingresar una descripción"),
  image: z.array(z.string().url().refine((url) => {
    const acceptedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
    return acceptedFormats.some(format => url.includes(format));
  }, {
    message: "Debe ingresar una URL de imagen válida (formato jpg, jpeg o png)"
  })).min(1, "Debe subir al menos una imagen").max(5, "No puede subir más de 5 imágenes"),
  category: z.string().min(1, "Debe seleccionar una categoría").required("Debe seleccionar una categoría"),
  province: z.string().min(1, "Debe ingresar una provincia").required("Debe ingresar una provincia"),
  city: z.string().min(1, "Debe ingresar una ciudad").required("Debe ingresar una ciudad"),
  phone: z.string()
    .min(8, "El número de teléfono debe tener al menos 8 caracteres")
    .regex(/^[0-9()+\- ]*[0-9][0-9()+\- ]*$/, "Solo se permiten números o los símbolos: (),+,-"),
  fee: z.enum(["Costo fijo", "Tarifa por hora", "A consultar"]).default("A consultar"),
  duration: z.enum(["30 días", "Indeterminado"]).default("30 días"),
});
