import { Grid } from "@mui/material";
import FotoPlomero from "../../assets/plomero.png";
import FotoNinera from "../../assets/ninera.png";
import FotoElect from "../../assets/electricista.png";
import User from "./User";

const Users = [
  {
    userImg: FotoPlomero,
    name: "Mauro",
    occupation: "Plomero",
    location: "Belgrano - Palermo - Villa Crespo",
    description:
      "Aquí una descripción de los servicios de la persona que ofrece su servicio como plomero a domicilio. Tiene que tener sus horarios de trabajo y métodos de pago que acepta...",
    qtyComments: "51",
    value:'4'
  },
  {
    userImg: FotoNinera,
    name: "Lucia",
    occupation: "Niñera",
    location: "Retiro - Recoleta - Palermo",
    description:
      "Aquí una descripción de los servicios de la persona que ofrece su servicio como plomero a domicilio. Tiene que tener sus horarios de trabajo y métodos de pago que acepta...",
    qtyComments: "5",
    value:'4.5'
  },
  {
    userImg: FotoElect,
    name: "Carlos",
    occupation: "Electricista",
    location: "Colegiales",
    description:
      "Aquí una descripción de los servicios de la persona que ofrece su servicio como plomero a domicilio. Tiene que tener sus horarios de trabajo y métodos de pago que acepta...",
    qtyComments: "17",
    value:'5'
  },
];

const SampleUsers = () => {
  return (
    <Grid container spacing={1} sx={{ mt: 2 }}>
      {Users.map((user, index) => (
        <User
          key={index}
          userImg={user.userImg}
          name={user.name}
          occupation={user.occupation}
          qtyComments={user.qtyComments}
          location={user.location}
          description={user.description}
          value={user.value}
        />
      ))}
    </Grid>
  );
};

export default SampleUsers;
