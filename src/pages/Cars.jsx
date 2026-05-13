
import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    
    
    fetch('https://api.example.com/cars')
      .then(response => response.json())
      .then(data => setCars(data))
      .catch(error => console.error('Error fetching cars:', error));
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCars = cars.filter(car =>
    car.make.toLowerCase().includes(searchTerm.toLowerCase()) ||
    car.model.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div> 
      <h1>Available Cars</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="car-list">
        {filteredCars.map(car => (
          <CarCard key={car.id} car={car} />
        ))}
      </div>
    </div>
  );
};

export default Cars;

