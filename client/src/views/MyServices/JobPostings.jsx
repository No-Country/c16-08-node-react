import JobPosting from "./JobPosting";
import mujerImg from "../../assets/ninera.png";
import hombreImg from "../../assets/plomero.png";
import { Box } from "@mui/material";

const DUMMY_POSTINGS = [
  {
    name: "Daniela",
    title: "Busco paseador de perros",
    description:
      "Busco una persona responsable que pueda pasear a mi perro los días lunes y viernes. Es un perro grande que no puede pasear con otros animales porque tiene problemas para sociabilizar.",
    value: "4",
    location: "Belgrano",
    price: 2000,
    img: mujerImg,
    status: "closed",
  },
  {
    name: "Manuel",
    title: "Busco plomero",
    description: "Busco plomero para reparación de cano con pérdidas.",
    value: "4.5",
    location: "Caballito",
    price: 2000,
    img: hombreImg,
    status: "open",
  },
];

const JobPostings = (props) => {
  return (
    <Box>
      {DUMMY_POSTINGS.length > 0 ? (
        DUMMY_POSTINGS.map((posting, index) => (
          <JobPosting
            key={index}
            name={posting.name}
            title={posting.title}
            description={posting.description}
            value={posting.value}
            location={posting.location}
            price={posting.price}
            img={posting.img}
            status={posting.status}
            isOpen={props.isOpen}
          />
        ))
      ) : (
        <Box
          sx={{
            borderRadius: "10px",
            width: "75%",
            p: "30px;",
            m: "auto",
            textAlign: "center",
            background: props.isOpen === "true" ? "#2c6e49" : "#E2E1D2",
            color: props.isOpen === "true" ? "#f9f8f6" : "12130F",
            mb: "20px",
          }}
        >
          No tienes publicaciones.
        </Box>
      )}
    </Box>
  );
};

export default JobPostings;
