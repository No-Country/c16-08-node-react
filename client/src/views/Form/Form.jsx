import { useState } from "react";
import { useDropzone } from "react-dropzone";
import styles from "./Form.module.css";
import {useForm} from 'react-hook-form'

const Form = () => {
  // logica para el arrastrar y soltar de imagenes
  // eslint-disable-next-line no-unused-vars
  const [selectedImages, setSelectedImages] = useState([]);


  
    const onDrop = (acceptedFiles) => {   
      if (selectedImages.length === 0) {
        setSelectedImages(acceptedFiles);
      } else {
        // Si ya hay imágenes seleccionadas, añade las nuevas imágenes a las existentes
        setSelectedImages(prevState => [...prevState, ...acceptedFiles]);
      }
    };
  
    
  


  const [titleLength, setTitleLength] = useState(0);
  const [descriptionLength, setDescriptionLength] = useState(0);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    onDrop,
  });
  
//  lógica react-hook-form
// eslint-disable-next-line no-unused-vars
const  {register,handleSubmit,  getValues , formState:{errors}} = useForm()
console.log(errors)

const descriptionMaxLength = 300;
const titleMaxLength = 50;

const handleTitleChange = (event) => {
  const titleValue = event.target.value;
  setTitleLength(titleValue.length);
};

const handleDescriptionChange = (event) => {
  const descriptionValue = event.target.value;
  setDescriptionLength(descriptionValue.length);
};



  return (
    <div className={`${styles.mainContainer} container py-4`}>
      <h2 className={styles.formTitle}>Completa el siguiente formulario</h2>

      <form onSubmit={handleSubmit(data => {
    console.log('datos enviados al back', data);

})}>
 
{/* titulo */}
        <div className="mb-3">
          <label htmlFor="title" className="form-label">
            Coloca un título a tu anuncio*
          </label>
          <input
            type="text"
            name="title"
            className="form-control shadow-sm "
            placeholder="Ejemplos: 'Manicurista a domicilio', 'Electricista', 'Busco paseador de perros'"
            maxLength={titleMaxLength}
          
            {...register('title',{
              required:{
                value:true,
                message: 'Debe ingresar un título'
              },
              minLength: {
                value:5,
                message:'Debe ingresar más de 5 caracteres'
              },
              maxLength: {
                value:50,
                message: 'Debe ingresar un máximo de 50 caracteres'
              },

            })}
            onChange={handleTitleChange} 
          />
          <p style={{ fontSize: "13px" }}>
            {titleLength}/{titleMaxLength}
          </p>
          {errors.title && <p style={{ color: 'red', fontSize: '13px'}}>{errors.title.message}</p>}
          
        </div>
        
   
{/* descipcion */}
        <div className="mb-3">
          <label htmlFor="description" className="form-label">
            Describe tu anuncio de forma detallada *
          </label>
          <textarea
            name="description"
            className="form-control shadow-sm"
            cols="50"
            rows="8"
            maxLength={descriptionMaxLength}
            {...register("description", { 
              required:{
                value:true,
                message: 'Debe ingresar una descripción'
              },

              minLength: {
                value:5,
                message:'Debe ingresar más de 5 caracteres'
              },
              maxLength: {
                value:300,
                message: 'Debe ingresar un máximo de 300 caracteres'
              },})}
            onChange={handleDescriptionChange} 
          ></textarea>
         <p style={{ fontSize: "13px" }}>
            {descriptionLength}/{descriptionMaxLength}
          </p>
          {errors.description && (
            <p style={{ color: "red", fontSize: "13px" }}>
              {errors.description.message}
            </p>
          )}
        </div>

{/* imagenes */}
<div className={styles.dropzoneStyle} {...getRootProps()}>
  <label htmlFor="image" className="form-label">
    Aquí puedes añadir fotos de tus trabajos, flyer, certificaciones, etc
  </label>
  <input 
    {...getInputProps()} 
    {...register('image', {
      validate: {
        acceptedFormats: files => {
          const acceptedFormats = ['image/jpeg', 'image/png', 'image/jpg'];
          for (let i = 0; i < files.length; i++) {
            if (!acceptedFormats.includes(files[i].type)) {
              console.log('se ejecuta')
              return 'Formato de imagen no válido';
            }
          }
          
          return true;
        }
      }

   })}

  />
   {errors.image && <p style={{ color: 'red', fontSize: '13px' }}>{errors.image.message}</p>}
  {isDragActive ? (
    <p>Suelta los archivos aquí...</p>
  ) : (
    <p style={{ fontSize: '13px' }}>
      Arrastra y suelta tus fotos aquí, o haz clic para seleccionar tus fotos. Formatos permitidos: jpg/jpeg/png 
    </p>
  )}
 
  {selectedImages.length > 0 && (
    <div>           
      <p style={{ fontSize: '13px' }}>{selectedImages.length} imágen/es subidas:</p>
      <ul>
        {selectedImages.map((file, index) => (
         <li style={{ fontSize: '13px' }} key={index}>{file.name}</li>
        ))}
      </ul>
    </div>
  )}
</div>

        {/* categoria */}

        <div className="mb-3">
          <label htmlFor="category" className="form-label">
            Seleccione una categoría que más se asemeje a su anuncio*
          </label>
          <select className="form-control shadow-sm  " name="category" id="category"
          {...register('category',{
              required:true
            })} >
            <option >Seleccionar </option>
            <option value="Estética">Estética</option>
            <option value="Profesionales">Profesionales</option>
            <option value="Seguridad">Seguridad</option>
            <option value="Mascotas">Mascotas</option>
            <option value="Carpintería y oficios">Carpintería y oficios</option>
            <option value="Eventos">Eventos</option>
            <option value="Otro">Otro</option>
          </select>
          {errors.category && <p style={{ color: 'red', fontSize: '13px'}}>Debe seleccionar una categoría</p>}
        </div> 

{/* provincia */}
        <div className="mb-3">
          <label htmlFor="province" className="form-label">
            Provincia*
          </label>
          <input
            type="text"
            name="province"
            className="form-control shadow-sm "
            {...register('province',{
              required:{
                value:true,
                message: 'Debe ingresar un valor para provincia'
              },
              pattern: {
                value:/^[a-zA-Z\s]+$/ ,
                message: 'Solo se permiten letras y/o espacios'
              }
            })}
          />
           {errors.province && <p style={{ color: 'red', fontSize: '13px'}}>{errors.province.message}</p>}
        </div>

{/* ciudad */}
        <div className="mb-3">
          <label htmlFor="country" className="form-label">
            Ciudad*
          </label>
          <input
            type="text"
            name="city"
            className="form-control shadow-sm "
            {...register('city',{
              required:{
                value:true,
                message: 'Debe ingresar un valor para ciudad'
              },
            pattern: {
              value: /^[a-zA-Z\s]+$/,
              message: 'Solo se permiten letras y/o espacios'
            }
            })}
            />
           {errors.city && <p style={{ color: 'red', fontSize: '13px'}}>{errors.city.message}</p>}  
        </div>

{/* telefono */}
        <div className="mb-3">
  <label htmlFor="phone" className="form-label">
    Celular/teléfono
  </label>
  <input 
    type="text" 
    name="phone" 
    className="form-control shadow-sm"
    {...register('phone', {
      pattern: {
        value: /^[0-9()+\- ]*[0-9][0-9()+\- ]*$/,
        message: 'Solo se permiten números o estos símbolos: (),+,-'
      },
      minLength: {
        value: 8,
        message: 'El número de teléfono debe tener al menos 8 caracteres'
      }
    })}
  />
  {errors.phone && <p style={{ color: 'red', fontSize: '13px' }}>{errors.phone.message}</p>} 
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
                  id="feeFixed"
                  value='Costo fijo'
                  {...register('fee')}
                />
                <label
                  className={`form-check-label ${styles.boldLabel}`}
                  htmlFor="feeFixed"
                >
                  Costo fijo
                </label>

              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fee"
                  id="feeHour"
                  value='Tarifa por hora'
                  {...register('fee')}
                />
                <label
                  className={`form-check-label ${styles.boldLabel}`}
                  htmlFor="feeHour"
                >
                  Tarifa por hora
                </label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="fee"
                  id="feeToConsult"
                  value="A consultar"
                  defaultChecked
                  {...register('fee')}
                />
                <label
                  className={`form-check-label ${styles.boldLabel}`}
                  htmlFor="feeToConsult"
                >
                  A consultar
                </label>
              </div>
            </div>
          </div>

          <div className="col-md-6">
            <div>
              <h5>Duración de la publicación:</h5>
              <p className={styles.warning}>
            *Si no selecciona una duración, el anuncio se desactivará en 30 días
          </p>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="duration"
                  id="duration30"
                  value="30 días"
                  defaultChecked
                  {...register('duration')}
                />
                <label
                  className={`form-check-label ${styles.boldLabel}`}
                  htmlFor="duration30"
                >
                  30 días
                </label>
              </div>
              
            

              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="duration"
                  id="durationIndeterminate"
                  value='indeterminado'
                  {...register('duration')}
                />
                <label
                  className={`form-check-label ${styles.boldLabel}`}
                  htmlFor="durationIndeterminate"
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
         
        </div>
      </form>
    </div>
  );
};

export default Form;
