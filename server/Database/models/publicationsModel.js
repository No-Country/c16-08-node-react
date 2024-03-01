import mongoose from "mongoose";

const formModel = mongoose.model("Form", {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    image: {
      type: [String],
      validate: {
        validator: function (value) {
          const acceptedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
          return value.every(url => acceptedFormats.some(format => url.includes(format)));
        },
        message: "Debe ingresar una URL de imagen válida (formato jpg, jpeg o png)",
      },
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    province: {
      type: String,
      required: true,
    },
    city: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
      validate: {
        validator: function (value) {
          return /^[0-9()+\- ]*[0-9][0-9()+\- ]*$/.test(value);
        },
        message: "Solo se permiten números o los símbolos: (),+,-",
      },
    },
    fee: {
      type: String,
      enum: ["Costo fijo", "Tarifa por hora", "A consultar"],
      default: "A consultar",
    },
    duration: {
      type: String,
      enum: ["30 días", "Indeterminado"],
      default: "30 días",
    },
  });
  
  export default formModel;