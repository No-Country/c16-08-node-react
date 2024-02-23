import Button from "../Button/Button";
import classes from "./section.module.css";

export default function Section() {
  return (
    <section>
      {/* card 1 */}
      <div className={classes.quiero_trabajar}>
        <div style={{ flex: 1 }}>
          <div className={classes.content}>
            <h2>¿Tienes una oferta laboral?</h2>
            <ul>
              <li>
                <span className={classes.orangeText}>EmpleosÁgil</span> te
                ofrece la
              </li>
              <li>oportunidad de publicar tu</li>
              <li>anuncio de trabajo temporal</li>
              <li>de forma simple y gratuita</li>
            </ul>

            <Button>Empieza ahora</Button>
          </div>
        </div>
        <img
          className={classes.heroImg}
          src="https://res.cloudinary.com/dpxrcotbh/image/upload/v1708126539/vr6t4g5qomxqd3qxalq2.jpg"
          alt="abc"
        />
      </div>
      {/* card 2 */}
      <div className={classes.quiero_trabajar}>
        <img
          className={classes.heroImg}
          src="https://res.cloudinary.com/kimeipetshop/image/upload/v1708290265/yucfznewslxs5asskavx.jpg"
          alt="abc"
        />
        <div style={{ flex: 1 }}>
          <div className={classes.content}>
            <h2>¿Estás buscando un trabajo extra?</h2>
            <ul>
              <li>Regístrate en <span className={classes.orangeText}>EmpleosÁgil</span></li>
              <li>totalmente gratis y busca el trabajo </li>
              <li>
                que se adapte a tus horarios
              </li>
             
            </ul>
            <Button>Explora</Button>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className={classes.quiero_trabajar}>
        <div style={{ flex: 1 }}>
          <div className={classes.content}>
            <h2>¿Tienes servicios para ofrecer?</h2>
            <ul>
              <li>Conecta con potenciales clientes</li>
              <li>publicando tu anuncio en cuestión</li>
              <li>
                de minutos
              </li>
             
            </ul>
            <Button>Publica un anuncio</Button>
          </div>
        </div>
        <img
          className={classes.img}
          src="https://res.cloudinary.com/dpxrcotbh/image/upload/v1708126534/rcykstnhq7axqlwqwn0e.jpg"
          alt="abc"
        />
      </div>
    </section>
  );
}
