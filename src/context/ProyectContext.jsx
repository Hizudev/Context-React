import { createContext, useState } from "react";

export const ProyectContext = createContext();

export const Provider = ({ children }) => {
  const [data, setData] = useState([]);

  return (
    <ProyectContext.Provider value={{ data, setData }}>
      {children}
    </ProyectContext.Provider>
  );
};
