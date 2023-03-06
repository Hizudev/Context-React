import { Box, Grid, Typography } from "@mui/material";
import { useContext } from "react";
import FavoriteIcon from "@mui/icons-material/Favorite";
import { ProyectContext } from "../context/ProyectContext";
import ImgVisor from "../components/ImgVisor";

export default function Home() {
  const { data, setData } = useContext(ProyectContext);

  const handleClick = (id) => {
    const i = data.findIndex((item) => item.id === id);
    if (data[i].liked) {
      data[i].liked = false;
    } else data[i].liked = true;
    setData([...data]);
  };

  return (
    <Box
      sx={{
        height: { lg: "135vh" },
        backgroundImage: "linear-gradient(120deg, #a1c4fd 0%, #c2e9fb 100%);",
      }}
    >
      <Typography
        variant="h3"
        align="center"
        sx={{ color: "white", textShadow: "2px 2px 2px black" }}
      >
        Toca la imagen para ampliarla ~ Toca el corazón para guardar en favoritos
      </Typography>
      <Grid container spacing={2} px={5} py={2}>
        {data.map((item) => (
          <Grid
            className="boxHover"
            key={item.id}
            item
            sx={{ position: "relative" }}
          >
            <FavoriteIcon
              onClick={() => {
                handleClick(item.id);
              }}
              fontSize="large"
              sx={{
                color: `${item.liked ? "red" : "white"}`,
                position: "absolute",
                right: "0",
                margin: "0.5rem",
              }}
            />
            <Typography
              variant="p"
              m={1}
              sx={{
                position: "absolute",
                color: "white",
                bottom: "0",
                textShadow: "2px 1px 1px black",
              }}
            >
              {item.alt}
            </Typography>
            <ImgVisor
              src={`${item.src.tiny}`}
              original={`${item.src.medium}`}
            />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}
