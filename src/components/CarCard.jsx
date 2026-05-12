//this component will display the details of a single car.it is designed to be reusable, allowing you to display multiple cars by passing different props to it. The component will receive a car object as a prop and render its details such as make, model, year, and price.
import React from 'react';

const CarCard = ({ car }) => {
  return (
    <div className="car-card">
      <h2>{car.make} {car.model}</h2>
      <p>Year: {car.year}</p>
      <p>Price: ${car.price}</p>
    </div>
  );
};

export default CarCard;