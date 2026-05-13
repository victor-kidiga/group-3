// src/services/api.js

import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:3001",
});

// GET all cars
export const getCars = async() => {
  const response = await API.get("/cars");
  return response.data;
};

// GET single car
export const getCar = async(id) => {
  const response = await API.get(`/cars/${id}`);
  return response.data;
};

// ADD car
export const addCar = async(carData) => {
  const response = await API.post("/cars", carData);
  return response.data;
};

// UPDATE car
export const updateCar = async(id, carData) => {
  const response = await API.put(`/cars/${id}`, carData);
  return response.data;
};

// DELETE car
export const deleteCar = async(id) => {
  const response = await API.delete(`/cars/${id}`);
  return response.data;
};

// GET app settings
export const getSettings = async() => {
  const response = await API.get("/settings");
  return response.data;
};

// UPDATE app settings
export const updateSettings = async(settingsData) => {
  const response = await API.patch("/settings", settingsData);
  return response.data;
};
