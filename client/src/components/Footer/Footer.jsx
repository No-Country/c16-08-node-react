import { Link } from "react-router-dom";
import styles from "./footer.module.css";

const Footer = () => {
  const URL =
    "https://res.cloudinary.com/kimeipetshop/image/upload/v1708293666/hjk01mbfaemtfy1uprqn.png";
  return (
    <footer className= {styles.footerContainer}>

      <div className={styles.infoContainer}>
        <img src={URL} alt="logo-footer" className={styles.imgFooter} />
        <ul className={styles.listFooter}>
          <li>
            <i className="bi bi-envelope-at"></i> empleosagil@contacto.com
          </li>
          <li className={styles.socialFooter}>
            Nuestras redes:
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" target="_blank" rel="noopener noreferrer">
              <i className="bi bi-linkedin"></i>
            </a>
          </li>
        </ul>
      </div>
      
      <div className={styles.extraContainer}>
        <ul>

        <li>
       <Link to="/acerca">
       ¿Quiénes somos?
       </Link>
</li>
<li>
   <Link to="/Faq">
    Preguntas frecuentes
  </Link>
</li>

        </ul>
      </div>
    </footer>
  );
};

export default Footer;
