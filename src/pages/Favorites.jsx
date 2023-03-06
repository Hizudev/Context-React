import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import { ProyectContext } from "../context/ProyectContext";
import ImgVisor from "../components/ImgVisor";

export default function Favorites() {
  const { data } = useContext(ProyectContext);
  const galeryArray = data.filter((item) => item.liked);
  return (
    <Box
      sx={{
        height: { xs: "95.9vh", sm: "95vh" },
        backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);",
      }}
    >
      {galeryArray.length === 0 ? (
        <Typography
          variant="h1"
          align="center"
          pt={2}
          sx={{ color: "white", textShadow: "2px 2px 2px black" }}
        >
          Empty
        </Typography>
      ) : (
        <Grid container spacing={2} px={5} py={2}>
          {galeryArray.map((item) => (
            <Grid className="boxHover" key={item.id} item>
              <ImgVisor
                src={`${item.src.tiny}`}
                original={`${item.src.medium}`}
              />
            </Grid>
          ))}
        </Grid>
      )}
    </Box>
  );
}
