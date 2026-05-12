// src/components/CarForm.jsx

import React, { useState, useEffect } from "react";

const CarForm = ({ onSubmit, initialData = {} }) => {
  const [car, setCar] = useState({
    name: "",
    brand: "",
    price: "",
    year: "",
    image: ""
  });

  useEffect(() => {
    if (initialData) {
      setCar(initialData);
    }
  }, [initialData]);

  const handleChange = (e) => {
    setCar({
      ...car,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(car);
  };

  return (
    <form onSubmit={handleSubmit} className="car-form">
      <input
        type="text"
        name="name"
        placeholder="Car Name"
        value={car.name}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="brand"
        placeholder="Brand"
        value={car.brand}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={car.price}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="year"
        placeholder="Year"
        value={car.year}
        onChange={handleChange}
        required
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={car.image}
        onChange={handleChange}
        required
      />

      <button type="submit">
        Save Car
      </button>
    </form>
  );
};

export default CarForm;