import { ThemeProvider } from "@mui/material";
import { Box, createTheme, Typography, Avatar } from "@mui/material";
import Question from "./Question";

const theme = createTheme({
  typography: {
    fontFamily: ["Montserrat", "sans-serif"].join(","),
  },
  palette: {
    background: {
      default: "#F9F8F6",
    },
  },
});

const Faq = () => {
  const QuestionsInfo = [
    {
      question:
        "¿Cómo puedo publicar un anuncio de trabajo temporal o servicio en EmpleoÁgil?",
      answer:
        "Para publicar un anuncio, primero debes registrarte en nuestra plataforma de forma gratuita. Una vez registrado, podrás acceder a tu perfil y encontrar la opción para crear un nuevo anuncio. Luego, simplemente completa la información requerida sobre el trabajo o servicio que deseas ofrecer y publícalo.",
    },
    {
      question: "¿Puedo buscar trabajo temporal sin registrarme en EmpleoÁgil?",
      answer:
        "Como visitante, puedes explorar las ofertas de trabajo y servicios publicadas en nuestra plataforma. Sin embargo, para acceder a funcionalidades adicionales, como la capacidad de postular a trabajos o publicar anuncios, es necesario registrarse como usuario.",
    },
    {
      question:
        "¿Cómo funciona el sistema de calificaciones y comentarios en EmpleoÁgil?",
      answer:
        "Cada persona usuaria de EmpleoÁgil tiene la capacidad de dejar una calificación y comentario sobre su experiencia trabajando con otro usuario. Estas calificaciones y comentarios son visibles en los perfiles de los usuarios y sirven como referencia para futuros empleadores o clientes.",
    },
    {
      question:
        "¿Cómo se coordina el pago por los trabajos o servicios ofrecidos en EmpleoÁgil?",
      answer:
        "En la etapa inicial de nuestra plataforma, el pago por los trabajos o servicios se coordina directamente entre el empleador y el trabajador o entre el cliente y el proveedor del servicio. No tenemos integrado un sistema de pago en la plataforma en este momento, pero esperamos añadir esta funcionalidad en el futuro para mayor comodidad y seguridad.",
    },
  ];

  return (
    <ThemeProvider theme={theme}>
        <Box sx={{ backgroundColor: "#E2E1D2", width: "100%", py: 2, mt: 3 }}>
        <Typography
          variant="h2"
          fontSize={{ xs: "1.5rem", md: "2rem" }}
          sx={{ ml: 5, fontWeight: "bold" }}
        >
          Preguntas Frecuentes:
        </Typography>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          alignItems: "center",
          m: 4,
        }}
      >
        <Avatar
          alt="Preguntas Frecuentes"
          src="https://res.cloudinary.com/empleosagil/image/upload/v1708910531/wqyhihpebmefwh922uy8.webp"
          variant="rounded"
          sx={{
            width: { xs: "80%", sm: "60%", md: "40%" },
            height: "auto",
            p: 3,
            mt: 3,
            zIndex: -1,
            maxWidth: "380px",
          }}
        />
        <Box sx={{ width: "100%", mt: 3, px: 2 }}>
          {QuestionsInfo.map((question) => (
            <Question
              key={question.question}
              question={question.question}
              answer={question.answer}
            />
          ))}
        </Box>
      </Box>
    </ThemeProvider>
  );
};

export default Faq;
