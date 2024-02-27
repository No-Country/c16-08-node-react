import { Box, Typography } from "@mui/material";

const Question = (props) => {
  return (
    <Box sx={{ m:'30px' }}>
      <Typography variant="h6" sx={{ fontWeight: "bold", fontSize: 15 }}>
        {props.question}
      </Typography>
      <Typography variant="body1" gutterBottom sx={{mt:1}}>
        {props.answer}
      </Typography>
    </Box>
  );
};

export default Question;
