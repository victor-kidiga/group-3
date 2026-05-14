import { useEffect, useState } from "react";
import { getCars } from "../services/api";

function useFetchCars() {
  const [cars, setCars] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCars() {
      const data = await getCars();
      setCars(data);
      setLoading(false);
    }
    fetchCars();
  }, []);

  return { cars, setCars, loading };
}

export default useFetchCars;
