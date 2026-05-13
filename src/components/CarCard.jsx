
import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <h2>{car.name}</h2>
      <p>{car.description}</p>
      <p>{car.brand}</p>
      <p>Price: ${car.price}</p>
    </div>
  );
};

export default CarCard;