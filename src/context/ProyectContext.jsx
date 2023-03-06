import { createContext, useEffect, useState } from "react";

export const ProyectContext = createContext();

export const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  const getData = async () => {
    try {
      const response = await fetch("../../public/fotos.json");
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
    <ProyectContext.Provider value={{ data, setData }}>
      {children}
    </ProyectContext.Provider>
  );
};
