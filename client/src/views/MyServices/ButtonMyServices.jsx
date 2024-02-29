import { Button } from "@mui/material";

const ButtonMyServices = (props) => {
  return (
    <Button onClick={props.onClick}
      sx={{
        p: "10px 15px",
        background: "#f9f8f6",
        borderRadius: "10px",
        m: '10px',
        color: "#2c6e49",
        border: "1px solid #2c6e49",
        textTransform: "none",
        "&:hover": {
          background: "#dcdcdc",
        },
      }}
    >
      {props.children}
    </Button>
  );
};

export default ButtonMyServices;
