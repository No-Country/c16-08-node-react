import { Box, ThemeProvider, Typography, createTheme } from "@mui/material";
import { Footer, Navbar } from "../../components";
import JobPostings from "./JobPostings";
import Button from "./ButtonMyServices";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
});

const MyServices = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <section>
        <Typography
          sx={{
            m: "50px 0 20px 0",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          ¿Quieres ofrecer un servicio o publicar un trabajo?
        </Typography>
        <Box
          sx={{
            borderRadius: "10px",
            width: "75%",
            p: "30px",
            m: "auto",
            textAlign: "center",
            background: "#2c6e49",
            color: "#f9f8f6",
            mb: "20px",
          }}
        >
          <p>
            Puedes crear un formulario con toda la información necesaria para
            que la comunidad se pueda contactar con vos.
          </p>
          <p>
            Podes publicar un servicio que realices, comentar tu experiencia y
            añadir fotos de tus trabajos. También podrás ofrecer un trabajo
            temporal (mozo, limpieza, etc).
          </p>
          <Button>Crea un anuncio</Button>
        </Box>
      </section>
      <section>
        <Typography
          sx={{
            m: "50px 0 20px 0",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Mis publicaciones abiertas
        </Typography>
        <JobPostings isOpen="true" />
      </section>
      <section>
        <Typography
          sx={{
            m: "50px 0 20px 0",
            textAlign: "center",
            fontWeight: "bold",
            fontSize: "1rem",
          }}
        >
          Mis publicaciones cerradas/pausadas
        </Typography>
        <JobPostings isOpen="false" />
      </section>
      <Footer />
    </ThemeProvider>
  );
};

export default MyServices;
