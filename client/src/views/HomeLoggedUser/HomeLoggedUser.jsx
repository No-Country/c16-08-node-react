import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Footer, Navbar } from "../../components";
import UsersList from "./UsersList";

import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  backgroundColor: "#F9F8F6",
});

// eslint-disable-next-line react/prop-types
const CustomOutlinedButton = ({ children }) => (
  <Button
    variant="outlined"
    sx={{
      color: "white",
      borderColor: "white",
      fontSize: "0.9rem",
      textTransform: "none",
      borderRadius: 2,
      minWidth: { xs: 120, md: "unset" },
      minHeight: { xs: 63, md: "unset" },

      "&:hover": {
        backgroundColor: "#3a8050",
        color: "#F9F8F6",
        borderColor: "#F9F8F6",
      },
    }}
  >
    {children}
  </Button>
);

const HomeLoggedUser = () => {
  return (
    <ThemeProvider theme={theme}>
      <Navbar />
      <Box sx={{ m: { xs:0, md:5} }}>
        <Container>
          <Typography
            variant="h1"
            sx={{ pt: 4, fontSize: "30px", fontWeight: "bold" }}
          >
            {/* aca va a el nombre de usuario, debe ser dinamico */}
            ¡Hola, Daniela! 
          </Typography>
          <Typography variant="h3" sx={{ fontSize: "20px", mt: 2 }}>
            ¿Por donde quieres empezar?
          </Typography>

          <Box sx={{ flexGrow: 1, m: 3 }}>
            <Grid container spacing={3} justifyContent="center">
              <Grid item xs={12} md={6}>
                <Paper elevation={4} sx={{ p: 3, backgroundColor: "#2C6E49" }}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs={7} sx={{ flexGrow: 5 }}>
                      <Typography
                        variant="h4"
                        sx={{ color: "white", fontSize: "1rem", mr: 1 }}
                      >
                        ¿Tienes una propuesta laboral para publicar?
                      </Typography>
                    </Grid>
                    <Grid item xs={5} sx={{ textAlign: "right", flexGrow: 1 }}>
                      <CustomOutlinedButton>
                        Publica tu anuncio
                      </CustomOutlinedButton>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
              <Grid item xs={12} md={6}>
                <Paper elevation={4} sx={{ p: 3, backgroundColor: "#2C6E49" }}>
                  <Grid
                    container
                    alignItems="center"
                    justifyContent="space-between"
                  >
                    <Grid item xs={7} sx={{ flexGrow: 5 }}>
                      <Typography
                        variant="h4"
                        sx={{ color: "white", fontSize: "1rem" }}
                      >
                        ¿Estás buscando trabajo temporal?
                      </Typography>
                    </Grid>
                    <Grid item xs={5} sx={{ textAlign: "right", flexGrow: 1 }}>
                      <CustomOutlinedButton>
                        Explora los anuncios
                      </CustomOutlinedButton>
                    </Grid>
                  </Grid>
                </Paper>
              </Grid>
            </Grid>
          </Box>
          <Typography variant="h3" sx={{ mt: 2, fontSize: "18px" }}>
            ¿Necesitas contratar un servicio?
          </Typography>
          <Typography variant="h4" sx={{ mt: 2, fontSize: "13px" }}>
            Anuncios destacados cerca de{" "}
            <Typography
              component="span"
              fontWeight="bold"
              display="inline"
              sx={{ fontSize: "12px" }}
            >
              Ciudad Autónoma de Buenos Aires.
            </Typography>
          </Typography>

          <UsersList />
        </Container>
      </Box>
      <Footer />
    </ThemeProvider>
  );
};

export default HomeLoggedUser;
