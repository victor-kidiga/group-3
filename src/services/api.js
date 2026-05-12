// src/services/api.js

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001"
});

// GET all cars
export const getCars = () => API.get("/cars");

// GET single car
export const getCar = (id) => API.get(`/cars/${id}`);

// ADD car
export const addCar = (carData) => API.post("/cars", carData);

// UPDATE car
export const updateCar = (id, carData) =>
  API.put(`/cars/${id}`, carData);

// DELETE car
export const deleteCar = (id) =>
  API.delete(`/cars/${id}`);