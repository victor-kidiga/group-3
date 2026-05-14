import { useEffect, useState } from "react";
import { getCars } from "../services/api";

function useFetchCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCars() {
      try {
        const data = await getCars();
        setCars(data);
        setLoading(false);
      } catch (err) {
        setError("Failed to fetch cars");
        setLoading(false);
      }
    }
    fetchCars();
  }, []);

  return { cars, setCars, loading, error };
}

export default useFetchCars;
