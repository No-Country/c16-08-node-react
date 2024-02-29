import { Avatar, Grid, Rating, Typography, Box } from "@mui/material";
import editPencilImg from "../../assets/editpencil.png";
import LocationIcon from "../../assets/location-outline.svg";
import Button from "./ButtonMyServices";

const JobPosting = (props) => {
  return (
    <Box
      sx={{
        width: "75%",
        borderRadius: "10px",
        p: "10px",
        m: "auto",
        textAlign: "center",
        background:
          props.status === "closed"
            ? "#ced4b7"
            : props.status === "open"
            ? "#2c6e49"
            : "",
        marginBottom: "30px",
        display:
          (props.status === "closed" && props.isOpen === "true") ||
          (props.status === "open" && props.isOpen === "false")
            ? "none"
            : "block",
      }}
    >
      <Grid
        container
        spacing={2}
        sx={{
          maxWidth: "95%",
          m: "auto",
          mt: 2,
          background: "white",
          color: "black",
          borderRadius: 3,
          p: 1,
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        <Grid item xs={12} md={3} sx={{ textAlign: "center", p: 2 }}>
          <Avatar
            alt={props.name}
            src={props.img}
            sx={{
              width: "100%",
              height: "auto",
              maxWidth: 100,
              maxHeight: 100,
              margin: "0 auto",
            }}
          />
          <Typography variant="h6">{props.name}</Typography>
          <Rating name="half-rating" value={props.value} precision={0.5} />
        </Grid>
        <Grid item xs={12} md={9} sx={{ textAlign: "left", p: 2 }}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
              flexWrap: "wrap",
            }}
          >
            <Typography
              variant="h5"
              sx={{
                fontSize: "1rem",
                fontWeight: "bold",
                display: "inline-block",
                width: { md: "50%" },
                mb: 1,
              }}
            >
              {props.title}
            </Typography>
            <Typography variant="subtitle1" sx={{ display: "inline-block" }}>
              <img
                src={LocationIcon}
                style={{
                  display: "inline-block",
                  width: "15px",
                  marginRight: "4px",
                  paddingBottom: "4px",
                }}
              />
              {props.location}
            </Typography>
            <Typography variant="subtitle1" sx={{ display: "inline-block" }}>
              <img
                src={editPencilImg}
                style={{
                  display: "inline-block",
                  width: "15px",
                  marginRight: "4px",
                  paddingBottom: "4px",
                }}
              />
            </Typography>
          </Box>
          <Typography variant="subtitle1">$ {props.price}</Typography>
          <Typography variant="body1" sx={{ mt: { xs: 1 } }}>
            {props.description}
          </Typography>
        </Grid>
      </Grid>
      <Box
        sx={{
          display: "flex",
          justifyContent: "flex-end",
          pr: { xs: 0, md: "20px" },
        }}
      >
        <Button>Reactivar publicación</Button>
        <Button>Eliminar</Button>
      </Box>
    </Box>
  );
};

export default JobPosting;
