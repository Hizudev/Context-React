import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import ResponsiveAppBar from "./components/Navbar";
import { useContext, useEffect } from "react";
import {ProyectContext} from "./context/ProyectContext"

const App = () => {
  const { setData } = useContext(ProyectContext);
  const getData = async () => {
    try {
      const response = await fetch('../public/fotos.json');
      const apiData = await response.json();
      setData(apiData.photos);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <>
      <ResponsiveAppBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/favorites" element={<Favorites />} />
      </Routes>
    </>
  );
};

export default App;
