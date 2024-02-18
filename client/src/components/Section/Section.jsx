import Button from "../Button/Button";
import classes from "./Section.module.css";

export default function Section() {
  return (
    <section>
      <div className={classes.quiero_trabajar}>
        <img
          src="https://res.cloudinary.com/dpxrcotbh/image/upload/v1708126539/vr6t4g5qomxqd3qxalq2.jpg"
          alt="abc"
        />
        <div style={{ flex: 1 }}>
          <h1>¡Quiero trabajar!</h1>
          <ul>
            <li>There goes the last great American dynasty</li>
            <li>Who knows if she never showed up, what could've been</li>
            <li>There goes the most shameless woman this town has ever seen</li>
            <li>She had a marvelous time ruinin' everything</li>
          </ul>
          <Button>Ofrecerme</Button>
        </div>
      </div>
      <div className={classes.quiero_trabajar}>
        <div style={{ flex: 1 }}>
          <h1>¡Necesito un servicio!</h1>
          <ul>
            <li>There goes the last great American dynasty</li>
            <li>Who knows if she never showed up, what could've been</li>
            <li>There goes the most shameless woman this town has ever seen</li>
            <li>She had a marvelous time ruinin' everything</li>
          </ul>
          <Button>Buscar</Button>
        </div>
        <img
          className={classes.img}
          src="https://res.cloudinary.com/dpxrcotbh/image/upload/v1708126539/vr6t4g5qomxqd3qxalq2.jpg"
          alt="abc"
        />
      </div>
    </section>
  );
}
