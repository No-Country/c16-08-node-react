import { Paper, Stack, Rating, Box, Typography, Avatar } from "@mui/material";
import LocationIcon from "../../assets/location-outline.svg";

const User = (props) => {
  return (
    <Paper
      sx={{
        display: "flex",
        alignItems: "center",
        width: "100%",
        borderRadius: 3,
        mt: 2,
        flexDirection: { xs: "column", md: "row" },
        zIndex: -1,
        m: { xs: 5 },
      }}
    >
      <Avatar
        src={props.userImg}
        alt={props.name}
        sx={{
          width: 70,
          height: 70,
          ml: { md: 4 },
          textAlign: { xs: "center", md: "left" },
        }}
      />
      <Box sx={{ flex: 2, ml: { xs: 0, md: 3 } }}>
        <Typography
          variant="subtitle1"
          fontWeight="bold"
          sx={{ fontSize: "0.8rem", textAlign: { xs: "center", md: "left" } }}
        >
          {props.name} - {props.occupation}
        </Typography>
        <Stack spacing={1}>
          <Rating name="half-rating" value={props.value} precision={0.5} />
        </Stack>
        <Typography
          variant="subtitle1"
          sx={{ fontSize: "0.8rem", textAlign: { xs: "center", md: "left" } }}
        >
          {props.qtyComments} comentarios
        </Typography>
      </Box>

      <Box
        style={{
          marginLeft: { xs: 0, md: 100 },
          flex: 10,
          margin: 20,
          fontSize: "0.8rem",
          textAlign: { xs: "center", md: "right" },
        }}
      >
        <img
          src={LocationIcon}
          style={{
            display: "inline-block",
            width: "15px",
            marginRight: "4px",
            paddingBottom: "4px",
          }}
        />
        <Typography
          variant="body1"
          sx={{ display: "inline-block", fontSize: "0.8rem" }}
        >
          {props.location}
        </Typography>
        <p style={{ marginTop: "15px" }}>{props.description}</p>
        <Typography
          variant="body1"
          sx={{
            textDecoration: "underline",
            fontSize: "0.8rem",
            textAlign: "right",
          }}
        >
          Ver anuncio completo
        </Typography>
      </Box>
    </Paper>
  );
};

export default User;
