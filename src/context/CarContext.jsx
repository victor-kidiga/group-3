import { createContext, useContext, useEffect, useState } from "react";
import { getCars } from "../services/api";

const CarContext = createContext();

export function CarProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCars() {
    try {
      setLoading(true);
      const data = await getCars();
      setCars(data);
      setLoading(false);
    } catch (err) {
      setError("Failed to load cars");
      setLoading(false);
    }
  }

  useEffect(() => {
    fetchCars();
  }, []);

  return (
    <CarContext.Provider value={{ cars, setCars, loading, error, fetchCars }}>
      {children}
    </CarContext.Provider>
  );
}

export function useCarContext() {
  return useContext(CarContext);
}

export default CarContext;
