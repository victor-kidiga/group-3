import { createContext, useContext, useEffect, useState } from "react";
import { getCars } from "../services/api";

const CarContext = createContext();

export function CarProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  async function fetchCars() {
    setLoading(true);
    const data = await getCars();
    setCars(data);
    setLoading(false);
  }

  useEffect(() => {
    fetchCars();
  }, []);
// added comment
  return (
    <CarContext.Provider value={{ cars, setCars, loading, fetchCars }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCarContext() {
  return useContext(CarContext);
}