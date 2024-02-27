import styles from './ProfileForm.module.css'
import {useState} from 'react'

const  ProfileForm = () =>{

   const defaultURL = 'https://res.cloudinary.com/empleosagil/image/upload/v1709034105/amh4wzjngr8i0llu1iyv.webp' 

    // manejo de imagen

    const [selectedImage, setSelectedImage] = useState(null);
    const userImageToShow = selectedImage || defaultURL;

  return (

    <div>
        <h4>Mi perfil</h4>
        <form>
            <div>
            {/* nombre */}
            <div>
                <label htmlFor="name">Nombre</label>
                <input type="text" id='name' name='name' />
            </div>

            {/* apellido */}
            <div>
                <label htmlFor="lastname">Apellido</label>
                <input type="text" id='lastname' name='lastname'/>
            </div>

            <div>
                <label htmlFor="age">Edad</label>
                <input type="date" id='age' name='age' />
            </div>


            {/* ¿Dónde vives? */}
            <div>
                <label htmlFor="address">¿Dónde vives?</label>
                <input type="text" id='province' name='province' placeholder='Ingrega tu provincia'/>
                <div>
                <label htmlFor=""></label>
                <input type="text" id='city' name='city' placeholder='Ingresa tu localidad'/>
            </div>

            {/* descripción */}
            <label htmlFor="personal-description">Escribe una breve descripción sobre tí</label>
            <textarea name="personal-description" id="personal-description" cols="50" rows="8"></textarea>
            </div>
            <button type="submit">Guardar cambios</button>
            </div>
            <img src="" alt="" />
        </form>
    </div>
  )
}

export default ProfileForm