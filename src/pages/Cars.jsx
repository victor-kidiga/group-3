import { useEffect, useMemo, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import SearchBar from "../components/SearchBar";
import { deleteCar, getCars } from "../services/api";

function Cars({ isAdmin }) {
  const [cars, setCars] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [fuelFilter, setFuelFilter] = useState("all");
  const navigate = useNavigate();

  useEffect(() => {
    async function loadCars() {
      try {
        const carsData = await getCars();
        setCars(carsData);
      } catch (error) {
        console.error("Error fetching cars:", error);
      }
    }

    loadCars();
  }, []);

  const filteredCars = useMemo(() => {
    const lowerSearchTerm = searchTerm.toLowerCase();

    return cars.filter((car) => {
      const matchesSearch = [
        car.name,
        car.description,
        car.modelYear,
        car.fuelType,
        car.transmission,
      ]
        .join(" ")
        .toLowerCase()
        .includes(lowerSearchTerm);

      const matchesFuel = fuelFilter === "all" || car.fuelType === fuelFilter;

      return matchesSearch && matchesFuel;
    });
  }, [cars, fuelFilter, searchTerm]);

  async function handleDelete(id) {
    if (!isAdmin) return;

    try {
      await deleteCar(id);
      setCars((currentCars) => currentCars.filter((car) => car.id !== id));
    } catch (error) {
      console.error("Error deleting car:", error);
    }
  }

  return (
    <section className="inventory-page">
      <div className="page-title-row">
        <div>
          <p className="eyebrow">Cars</p>
          <h1>Product inventory</h1>
          <p>Search, inspect, add, edit, and remove persisted product records.</p>
        </div>

        <Link to="/add-car" className="primary-action">
          Add New Car
        </Link>
      </div>

      <section className="panel">
        <div className="inventory-toolbar">
          <SearchBar onSearch={setSearchTerm} />
          <select
            value={fuelFilter}
            onChange={(event) => setFuelFilter(event.target.value)}
            aria-label="Filter by fuel type"
          >
            <option value="all">All fuel types</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </div>

        <div className="table-wrap">
          <table className="product-table">
            <thead>
              <tr>
                <th>Image</th>
                <th>Name</th>
                <th>Model</th>
                <th>Price</th>
                <th>Fuel</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {filteredCars.map((car) => (
                <tr key={car.id}>
                  <td data-label="Image">
                    <img src={car.image} alt={car.name} className="table-image" />
                  </td>
                  <td data-label="Name">
                    <strong>{car.name}</strong>
                    <span>{car.transmission}</span>
                  </td>
                  <td data-label="Model">{car.modelYear || car.year}</td>
                  <td data-label="Price">KSh {Number(car.price).toLocaleString()}</td>
                  <td data-label="Fuel">{car.fuelType}</td>
                  <td data-label="Status">
                    <span className="status-pill">Active</span>
                  </td>
                  <td data-label="Actions">
                    <div className="row-actions">
                      <button type="button" onClick={() => navigate(`/cars/${car.id}`)}>
                        View
                      </button>
                      {isAdmin && (
                        <>
                          <button type="button" onClick={() => navigate(`/edit-car/${car.id}`)}>
                            Edit
                          </button>
                          <button
                            type="button"
                            className="danger-action"
                            onClick={() => handleDelete(car.id)}
                          >
                            Delete
                          </button>
                        </>
                      )}
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCars.length === 0 && (
          <div className="empty-state">
            <h2>No cars found</h2>
            <p>Try a different search term or fuel filter.</p>
          </div>
        )}
      </section>
    </section>
  );
}


export default Cars;
