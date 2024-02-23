import { useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./Form.module.css";

const Form = () => {
  // eslint-disable-next-line no-unused-vars
  const [selectedImages, setSelectedImages] = useState([]);

  const onDrop = (acceptedFiles) => {
    setSelectedImages(acceptedFiles);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className={`${styles.mainContainer} container py-4`}>
      <h2 className={styles.formTitle}>Completa el siguiente formulario</h2>
      <form>
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Coloca un título a tu anuncio
          </label>
          <input
            type="text"
            name="title"
            className="form-control shadow-sm "
            placeholder="Ejemplos: 'Manicurista a domicilio', 'Electricista', 'Busco paseador de perros'"
          />
        </div>

        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Describe tu anuncio de forma detallada *
          </label>
          <textarea
            name="description"
            className="form-control shadow-sm "
            cols="50"
            rows="5"
          ></textarea>
        </div>

        <div className={styles.dropzoneStyle} {...getRootProps()}>
          <input {...getInputProps()} />
          {isDragActive ? (
            <p>Suelta los archivos aquí...</p>
          ) : (
            <p>
              Arrastra y suelta tus archivos aquí, o haz clic para seleccionar
              archivos
            </p>
          )}
        </div>

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Seleccione una categoría que mas se asemeje a su anuncio*
          </label>
          <select className="form-control shadow-sm  " >
            <option value="value1">Seleccionar </option>
            <option value="value1">Estética</option>
            <option value="value2">Profesionales</option>
            <option value="value3">Seguridad</option>
            <option value="value4">Mascotas</option>
            <option value="value5">Carpintería y oficios</option>
            <option value="value6">Eventos</option>
            <option value="value7">Otro</option>
          </select>
        </div> 



        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            País*
          </label>
          <input
            type="text"
            name="country"
            className="form-control shadow-sm "/>
        </div>

        <div className="mb-3">
          <label htmlFor="province" className="form-label">
            Provincia*
          </label>
          <input
            type="text"
            name="province"
            className="form-control shadow-sm "
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">
            Celular/teléfono*
          </label>
          <input type="text" name="phone" className="form-control shadow-sm" />
          <p className={styles.warning}>
            *Recuerda que se hará público tu número en la web si lo publicas
          </p>
        </div>

        <div className="row mb-3">
          <div className="col-md-6">
            <div>
              <h5>Tarifa:</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fee"
                  id="fee1"
                />
                <label
                  className={`form-check-label ${styles.boldLabel}`}
                  htmlFor="fee1"
                >
                  Costo fijo
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fee"
                  id="fee2"
                />
                <label
                  className={`form-check-label ${styles.boldLabel}`}
                  htmlFor="fee2"
                >
                  Tarifa por hora
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fee"
                  id="fee3"
                />
                <label
                  className={`form-check-label ${styles.boldLabel}`}
                  htmlFor="fee3"
                >
                  A consultar
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div>
              <h5>Duración de la publicación:</h5>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="duration"
                  id="duration1"
                />
                <label
                  className={`form-check-label ${styles.boldLabel}`}
                  htmlFor="duration1"
                >
                  30 días
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="duration"
                  id="duration2"
                />
                <label
                  className={`form-check-label ${styles.boldLabel}`}
                  htmlFor="duration2"
                >
                  Indeterminado
                </label>
              </div>
            </div>
          </div>
        </div>

        <div className={styles.btnContainer}>
          <button type="submit" className={styles.submitBtn}>
            Publicar
          </button>
          <button type="reset" className={styles.clearBtn}>
            Limpiar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Form;
