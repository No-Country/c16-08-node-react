import { Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const ButtonMyServices = ({children, url}) => {
  const navigation = useNavigate();
  const handleNavigation = () => {
    navigation(`${url}`);
  };
  return (
    <Button onClick={handleNavigation}
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
      {children}
    </Button>
  );
};

export default ButtonMyServices;
