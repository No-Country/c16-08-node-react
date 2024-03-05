import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

function ButtonTheme({ url, children }) {
  const navigation = useNavigate();
  const handleNavigation = () => {
    navigation(`${url}`);
  };
  return (
    <Button
      size="large"
      color="success"
      variant="contained"
      onClick={handleNavigation}
      sx={{
        textTransform: "capitalize",
        bgcolor: "#2c6e49",
        borderRadius: 2,
        fontSize: 18,

        "&:hover": {
          backgroundColor: "#3d865c",
        },
      }}
    >
      {children}
    </Button>
  );
}
export default ButtonTheme;
