
import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';
import {getCars,deleteCar} from '../services/carService';

const Cars = () => {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');

  useEffect(() => {
    async function loadCars() {
      try {
        const carsData = await getCars();
        setCars(carsData);
      } catch (error) {
        console.error('Error fetching cars:', error);
      }
    }

    loadCars();
  }, []);

  const handleSearch = (term) => {
    setSearchTerm(term);
  };

  const filteredCars = cars.filter(car => {
    const brand = (car.brand || '').toLowerCase();
    const model = (car.model || '').toLowerCase();
    const lowerSearchTerm = searchTerm.toLowerCase();
    return brand.includes(lowerSearchTerm) || model.includes(lowerSearchTerm);  
  });


  const navigate = useNavigate();

  const handleDelete = async (id) => {
    try {
      await deleteCar(id);
      setCars(cars.filter(car => car.id !== id));
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const handleEdit = (id) => {
    navigate(`/edit-car/${id}`);
  };
   

  return (
    <div> 
      <h1>Available Cars</h1>
      <SearchBar onSearch={handleSearch} />
      <div className="car-list">
        {filteredCars.map(car => (
          <CarCard
           key={car.id}
            car={car} 
            onDelete={() => handleDelete(car.id)}
            onEdit={() => handleEdit(car.id)}
          />
  
        ))}
      </div>
    </div>
  
 );};

export default Cars;

