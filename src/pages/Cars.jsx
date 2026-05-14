import { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';
import CarCard from '../components/CarCard';
import SearchBar from '../components/SearchBar';
import { getCars, deleteCar } from '../services/api';

const Cars = ({ isAdmin }) => {
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
    const name = (car.name || '').toLowerCase();
    const description = (car.description || '').toLowerCase();
    const modelYear = String(car.modelYear || '').toLowerCase();
    const fuelType = (car.fuelType || '').toLowerCase();
    const transmission = (car.transmission || '').toLowerCase();
    const lowerSearchTerm = searchTerm.toLowerCase();
    return (
      name.includes(lowerSearchTerm) ||
      description.includes(lowerSearchTerm) ||
      modelYear.includes(lowerSearchTerm) ||
      fuelType.includes(lowerSearchTerm) ||
      transmission.includes(lowerSearchTerm)
    );  
  });


  const navigate = useNavigate();

  const handleDelete = async (id) => {
    if (!isAdmin) return;

    try {
      await deleteCar(id);
      setCars((currentCars) => currentCars.filter(car => car.id !== id));
    } catch (error) {
      console.error('Error deleting car:', error);
    }
  };

  const handleEdit = (id) => {
    if (!isAdmin) return;

    navigate(`/edit-car/${id}`);
  };

  const handleBuy = (id) => {
    navigate(`/cars/${id}`);
  };
   

  return (
    <main className="page-container inventory-page">
      <header className="page-header">
        <p>Inventory</p>
        <h1>Available Cars</h1>
      </header>
      <SearchBar onSearch={handleSearch} />
      <div className="car-list">
        {filteredCars.map(car => (
          <CarCard
           key={car.id}
            car={car} 
            onDelete={() => handleDelete(car.id)}
            onEdit={() => handleEdit(car.id)}
            onBuy={() => handleBuy(car.id)}
            isAdmin={isAdmin}
          />
  
        ))}
      </div>
    </main>
  
 );};

export default Cars;
