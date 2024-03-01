import styles from "./ProfileForm.module.css";
import { useState } from "react";
import { TrashSimple, UploadSimple } from "@phosphor-icons/react/dist/ssr";
import { useForm } from "react-hook-form";

const ProfileForm = () => {
  const defaultURL =
    "https://res.cloudinary.com/empleosagil/image/upload/v1709046657/xhi8e68makl42jdbqlb2.png";

  // Manejo de imagen
  const [selectedImage, setSelectedImage] = useState(null);

  const userImageToShow = selectedImage || defaultURL;

  const handleImageChange = (event) => {
    try {
      if (event.target.files.length) {
        const file = event.target.files[0];
        const reader = new FileReader();

        reader.onload = (event) => {
          setSelectedImage(event.target.result);
        };
        reader.readAsDataURL(file);
      }
    } catch (error) {
      console.error("Error al procesar la imagen:", error);
    }
  };

  const handleRemoveImage = () => {
    setSelectedImage(defaultURL);
  };

  // validaciones:

  // eslint-disable-next-line no-unused-vars
  const {
    register,
    handleSubmit,
    // eslint-disable-next-line no-unused-vars
    getValues,
    formState: { errors },
  } = useForm();

  const [descriptionLength, setDescriptionLength] = useState(0);

  const descriptionMaxLength = 300;

  const handleDescriptionChange = (event) => {
    const descriptionValue = event.target.value;
    setDescriptionLength(descriptionValue.length);
  };

  return (
    <>
      <div className={`container ${styles.container}`}>
        <div className={`row justify-content-center ${styles.formWrapper}`}>
          <div className="col-md-6">
            <h4 className={styles.profileTitle}>Mi perfil</h4>
            <form
              className={styles.formContainer}
              onSubmit={handleSubmit((data) => {
                console.log("datos enviados al back", data);
                // armar el obj que se va a enviar al back
              })}
            >
              {/* Nombre */}
              <div className="mb-3">
                <label htmlFor="name">Nombre</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  className="form-control"
                  {...register("name", {
                    required: "Debe ingresar un nombre",
                    pattern: {
                      value: /^[a-zA-ZáéíóúÁÉÍÓÚ\s]+$/,
                      message: "Solo se permiten letras, tildes y/o espacios",
                    },
                  })}
                />
                {errors.name && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.name.message}
                  </p>
                )}
              </div>
              {/* fin nombre */}
              {/* 
              Apellido */}
              <div className="mb-3">
                <label htmlFor="lastname">Apellido</label>
                <input
                  type="text"
                  id="lastname"
                  name="lastname"
                  className="form-control"
                  {...register("lastname", {
                    required: "Debe ingresar un apellido",
                    pattern: {
                      value: /^[a-zA-ZÁÉÍÓÚáéíóúÜü\s']+$/u,
                      message:
                        "Solo se permiten letras, tildes, apóstrofes y/o espacios",
                    },
                  })}
                />
                {errors.lastname && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.lastname.message}
                  </p>
                )}
              </div>
              {/* Fin apellido */}
              {/* email */}
              <div className="mb-3">
                <label htmlFor="lastname">E-mail</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-control"
                  {...register("email", {
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@(?:hotmail|gmail|yahoo)\.(?:com|com\.mx|es|net)$/,
                      message: "Debe ingresar un e-mail válido",
                    },
                  })}
                />
                {errors.email && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.email.message}
                  </p>
                )}
              </div>
              {/* fin email */}

              {/* Dirección */}
              <div className="mb-3">
                <p className="mb-3">¿Dónde vives?</p>
                <div className="row">
                  <div className="col">
                    <label htmlFor="province"></label>
                    <input
                      type="text"
                      id="province"
                      name="province"
                      placeholder="Ingresa tu provincia"
                      className="form-control"
                      {...register("province", {
                        required: "Debe ingresar una provincia",
                        pattern: {
                          value: /^[a-zA-Z\s]+$/,
                          message: "Solo se permiten letras y/o espacios",
                        },
                      })}
                    />
                    {errors.province && (
                      <p style={{ color: "red", fontSize: "13px" }}>
                        {errors.province.message}
                      </p>
                    )}
                  </div>
                  {/* 
                  ciudad */}
                  <div className="col">
                    <label htmlFor="city"></label>
                    <input
                      type="text"
                      id="city"
                      name="city"
                      placeholder="Ingresa tu localidad"
                      className="form-control"
                      {...register("city", {
                        required: "Debe ingresar una localidad",
                        pattern: {
                          value: /^[a-zA-Z\s]+$/,
                          message: "Solo se permiten letras y/o espacios",
                        },
                      })}
                    />
                    {errors.city && (
                      <p style={{ color: "red", fontSize: "13px" }}>
                        {errors.city.message}
                      </p>
                    )}
                  </div>
                </div>
              </div>
              {/* Fin dirección */}

              {/* Edad */}
              <div className="mb-3">
                <label htmlFor="age">Edad</label>
                <input
                  type="date"
                  id="age"
                  name="age"
                  className="form-control"
                  {...register("age", {
                    required: {
                      value: true,
                      message: "Debe ingresar su fecha de nacimiento",
                    },
                    validate: (value) => {
                      const birthday = new Date(value);
                      const currentYear = new Date();
                      const age =
                        currentYear.getFullYear() - birthday.getFullYear();

                      if (age >= 18) {
                        return true;
                      } else {
                        return "Debes tener 18 años o más";
                      }
                    },
                  })}
                />
                {errors.age && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.age.message}
                  </p>
                )}
              </div>
              {/* Fin edad */}

              {/* Descripción */}
              <div className="mb-3">
                <label htmlFor="personalDescription">
                  Escribe una breve descripción sobre ti
                </label>
                <textarea
                  name="personalDescription"
                  id="personalDescription"
                  cols="50"
                  rows="5"
                  className="form-control"
                  {...register("personalDescription", {
                    minLength: {
                      value: 20,
                      message: "Debe ingresar un mínimo de 20 caracteres",
                    },
                    maxLength: {
                      value: 300,
                      message: "Debe ingresar un máximo de 300 caracteres",
                    },
                  })}
                  onChange={handleDescriptionChange}
                ></textarea>
                <p style={{ fontSize: "13px" }}>
                  {descriptionLength}/{descriptionMaxLength}
                </p>
                {errors.personalDescription && (
                  <p style={{ color: "red", fontSize: "13px" }}>
                    {errors.personalDescription.message}
                  </p>
                )}
              </div>
              {/* Fin descripción */}

              {/* Botón */}
              <button type="submit" className={` ${styles.subBtn} float-end`}>
                Guardar cambios
              </button>
            </form>
          </div>
          {/* Fin del formulario */}

          {/* Imagen */}
          <div className="col-md-6 align-self-center">
            <div className={`mb-3 text-center ${styles.imageContainer}`}>
              <figure>
                <img
                  name="img"
                  src={userImageToShow}
                  alt="Imagen de perfil"
                  width={180}
                  height={180}
                  className={`${styles.profileImage} img-fluid rounded-circle `}
                  style={{ cursor: "pointer" }}
                />
              </figure>
              <div className={styles.uploadBtn}>
                <UploadSimple
                  size={20}
                  className={styles.uploadImageIcon}
                  weight="fill"
                />
                <label className={styles.labelFile} htmlFor="uploadImage">
                  Selecciona una imágen
                </label>
                <input
                  className={styles.inputFile}
                  type="file"
                  accept="image/*"
                  id="uploadImage"
                  onChange={handleImageChange}
                />
              </div>
              <p>Tamaño recomendado: 120 px x 120 px. Peso máximo: 100 KB</p>
              <button
                type="button"
                className={styles.removeImageBtn}
                onClick={handleRemoveImage}
              >
                Eliminar Imagen
                <TrashSimple
                  size={20}
                  className={styles.removeImageIcon}
                  weight="fill"
                />
              </button>
            </div>
          </div>
          {/* Fin de la imagen */}
        </div>
      </div>
    </>
  );
};

export default ProfileForm;
