// Cars.jsx 
//This will be the main component responsible for fetching and displaying the list of cars.it will also manage the state related to the car data and any search filters.
import React, { useState, useEffect } from 'react';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    // Fetch car data from the API
    //In a real application, you would replace the URL with your actual API endpoint. The fetched data is then stored in the state using setCars.
     //replace 'https://api.example.com/cars' with the actual API endpoint you are using to fetch the car data. The fetched data is expected to be an array of car objects, which will be stored in the state variable 'cars' using the setCars function. If there is an error during the fetch operation, it will be caught and logged to the console.
    
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

