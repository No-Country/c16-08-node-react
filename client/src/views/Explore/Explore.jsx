import { Searchbar} from "../../components";
import style from './Explore.module.css'

const Explore = () => {

  // URLs de las imágenes de las categorías
  const categories = [
    { imageURL: 'https://res.cloudinary.com/empleosagil/image/upload/v1708899984/guzvcqhendtyvmbc962l.jpg', name: 'Estética' },
    { imageURL: 'https://res.cloudinary.com/empleosagil/image/upload/v1708726193/mc59dj4bultlyhqkpips.jpg', name: 'Arte y diseño' },
    { imageURL: 'https://res.cloudinary.com/empleosagil/image/upload/v1708726367/s9d2qmn9q3qnknbpzin1.jpg', name: 'Profesionales' },
    { imageURL: 'https://res.cloudinary.com/empleosagil/image/upload/v1708899433/knsyahatloag2gxwad0b.jpg', name: 'Seguridad' },
    { imageURL: 'https://res.cloudinary.com/empleosagil/image/upload/v1708726194/k0ufqunwpqn8lvpsnduh.jpg', name: 'Mascotas' },
    { imageURL: 'https://res.cloudinary.com/empleosagil/image/upload/v1708726196/z4ikm5jho0iupfmohi1s.jpg', name: 'Carpintería y oficios' },
    { imageURL: 'https://res.cloudinary.com/empleosagil/image/upload/v1708899682/p7g3k6hmrfmvxph0wy3c.jpg', name: 'Construcción' },
    { imageURL: 'https://res.cloudinary.com/empleosagil/image/upload/v1708900657/l9msx9b6zoyit0peawmi.jpg', name: 'Eventos' }
  ];

  return (
  <>
  
    <div className={style.titleContainer} >
    <h3 className={style.exploreTitle}>Explora todas las ofertas laborales y servicios disponibles cerca de tu zona</h3>
    </div>

    <div className="container">
   
  
   
    <Searchbar />
    <p className={style.categorySubtitle}> Categorías de servicios</p>
    <div className="row">
      {categories.map((category, index) => (
        <div key={index} className="col-md-3 mb-3">
          <div className={style.categoryContainer}>
            <img src={category.imageURL} alt={`Category ${index + 1}`} className="img-fluid rounded" />
            <div className={style.categoryOverlay}>
              <span className={style.categoryName}>{category.name}</span>
            </div>
          </div>
        </div>
      ))}
    </div>
  </div>
  </>
  );
};

export default Explore;

