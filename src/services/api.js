import axios from "axios";
import seedData from "../../db.json";

const API_BASE_URL =
  import.meta.env.VITE_API_URL || (import.meta.env.DEV ? "http://localhost:3001" : "");
const STORAGE_KEY = "motogrid-cars";
const seedCars = seedData.cars || [];

const API = axios.create({
  baseURL: API_BASE_URL,
});

function readLocalCars() {
  if (typeof window === "undefined") return [...seedCars];

  const storedCars = window.localStorage.getItem(STORAGE_KEY);

  if (!storedCars) {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedCars));
    return [...seedCars];
  }

  try {
    const parsedCars = JSON.parse(storedCars);
    return Array.isArray(parsedCars) ? parsedCars : [...seedCars];
  } catch {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(seedCars));
    return [...seedCars];
  }
}

function writeLocalCars(cars) {
  if (typeof window !== "undefined") {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(cars));
  }

  return cars;
}

function getNextId(cars) {
  const largestNumericId = cars.reduce((largestId, car) => {
    const numericId = Number(car.id);
    return Number.isFinite(numericId) ? Math.max(largestId, numericId) : largestId;
  }, 0);

  return String(largestNumericId + 1);
}

async function requestOrLocal(request, localFallback) {
  if (!API_BASE_URL) return localFallback();

  try {
    const response = await request();
    return response.data;
  } catch (error) {
    console.warn("API request failed. Falling back to browser storage.", error);
    return localFallback();
  }
}

export const getCars = async () => {
  return requestOrLocal(() => API.get("/cars"), () => readLocalCars());
};

export const getCar = async (id) => {
  return requestOrLocal(
    () => API.get(`/cars/${id}`),
    () => {
      const car = readLocalCars().find((currentCar) => String(currentCar.id) === String(id));

      if (!car) {
        throw new Error(`Car with id ${id} was not found.`);
      }

      return car;
    }
  );
};

export const addCar = async (carData) => {
  return requestOrLocal(
    () => API.post("/cars", carData),
    () => {
      const cars = readLocalCars();
      const newCar = { ...carData, id: carData.id || getNextId(cars) };
      writeLocalCars([...cars, newCar]);
      return newCar;
    }
  );
};

export const updateCar = async (id, carData) => {
  return requestOrLocal(
    () => API.put(`/cars/${id}`, carData),
    () => {
      const cars = readLocalCars();
      const updatedCar = { ...carData, id };
      writeLocalCars(
        cars.map((currentCar) =>
          String(currentCar.id) === String(id) ? updatedCar : currentCar
        )
      );
      return updatedCar;
    }
  );
};

export const deleteCar = async (id) => {
  return requestOrLocal(
    () => API.delete(`/cars/${id}`),
    () => {
      const cars = readLocalCars();
      writeLocalCars(cars.filter((currentCar) => String(currentCar.id) !== String(id)));
      return {};
    }
  );
};
