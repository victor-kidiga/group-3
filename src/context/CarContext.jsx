import { createContext, useContext, useEffect, useState } from "react";
import { getCars } from "../services/api";

const CarContext = createContext();

export function CarProvider({ children }) {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  async function fetchCars() {
    try {
      const data = await getCars();
      setCars(data);
      setLoading(false);
    } catch {
      setError("Failed to load cars");
      setLoading(false);
    }
  }

  function addCar(newCar) {
    setCars([...cars, newCar]);
  }

  function deleteCar(id) {
    setCars(cars.filter(car => car.id !== id));
  }

  function updateCar(updatedCar) {
    setCars(cars.map(car =>
      car.id === updatedCar.id ? updatedCar : car
    ));
  }

  useEffect(() => {
    async function loadInitialCars() {
      try {
        const data = await getCars();
        setCars(data);
        setLoading(false);
      } catch {
        setError("Failed to load cars");
        setLoading(false);
      }
    }

    loadInitialCars();
  }, []);

  return (
    <CarContext.Provider value={{ cars, setCars, loading, error, fetchCars, addCar, deleteCar, updateCar }}>
      {children}
    </CarContext.Provider>
  );
}

// eslint-disable-next-line react-refresh/only-export-components
export function useCarContext() {
  return useContext(CarContext);
}

export default CarContext;
