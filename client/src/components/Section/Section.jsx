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
            <h2>¡Quiero trabajar!</h2>
            <ul>
              <li>There goes the last great American dynasty</li>
              <li>Who knows if she never showed up, what could have been</li>
              <li>
                There goes the most shameless woman this town has ever seen
              </li>
              <li>She had a marvelous time ruining everything</li>
            </ul>
            <Button>Ofrecerme</Button>
          </div>
        </div>
      </div>
      {/* card 3 */}
      <div className={classes.quiero_trabajar}>
        <div style={{ flex: 1 }}>
          <div className={classes.content}>
            <h2>¡Necesito un servicio!</h2>
            <ul>
              <li>There goes the last great American dynasty</li>
              <li>Who knows if she never showed up, what could have been</li>
              <li>
                There goes the most shameless woman this town has ever seen
              </li>
              <li>She had a marvelous time ruining everything</li>
            </ul>
            <Button>Buscar</Button>
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
