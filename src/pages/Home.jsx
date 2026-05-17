import { useEffect, useMemo, useState } from "react";
import { Link } from "react-router-dom";
import { getCars } from "../services/api";

function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    async function loadCars() {
      try {
        const carsData = await getCars();
        setCars(carsData);
      } catch (error) {
        console.error("Error loading dashboard cars:", error);
      }
    }

    loadCars();
  }, []);

  const stats = useMemo(() => {
    const totalValue = cars.reduce((sum, car) => sum + Number(car.price || 0), 0);
    const premiumCars = cars.filter((car) => Number(car.price || 0) >= 5000000);

    return [
      { label: "Total Cars", value: cars.length, tone: "red" },
      { label: "Active Listings", value: Math.max(cars.length - 2, 0), tone: "green" },
      { label: "Premium Cars", value: premiumCars.length, tone: "blue" },
      { label: "Inventory Value", value: `KSh ${Math.round(totalValue / 1000000)}M`, tone: "orange" },
    ];
  }, [cars]);

  const recentCars = cars.slice(0, 5);

  return (
    <section className="dashboard-page">
      <div className="page-title-row">
        <div>
          <p className="eyebrow">Dashboard</p>
          <h1>Welcome back, Admin.</h1>
          <p>Manage inventory, pricing, sales contacts, and product listings in one place.</p>
        </div>

        <Link to="/add-car" className="primary-action">
          Add New Car
        </Link>
      </div>

      <div className="metric-grid">
        {stats.map((stat) => (
          <article className={`metric-card ${stat.tone}`} key={stat.label}>
            <span aria-hidden="true" />
            <div>
              <p>{stat.label}</p>
              <strong>{stat.value}</strong>
            </div>
          </article>
        ))}
      </div>

      <section className="welcome-panel">
        <img
          src="https://images.unsplash.com/photo-1542362567-b07e54358753?w=1200"
          alt="Black performance car"
        />
        <div>
          <p className="eyebrow">MotoGrid Admin</p>
          <h2>Built for product control.</h2>
          <p>
            MotoGrid is an e-commerce administrator portal for car listings.
            Add new products, edit values like price and specifications, search
            inventory, and persist updates through the JSON Server backend.
          </p>
          <Link to="/cars" className="primary-action">
            Manage Cars
          </Link>
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">
          <div>
            <p className="eyebrow">Recent Cars</p>
            <h2>Latest inventory</h2>
          </div>
          <Link to="/cars">View all</Link>
        </div>

        <div className="table-wrap">
          <table className="product-table">
            <thead>
              <tr>
                <th>Car</th>
                <th>Year</th>
                <th>Fuel</th>
                <th>Price</th>
                <th>Status</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {recentCars.map((car) => (
                <tr key={car.id}>
                  <td data-label="Car">
                    <div className="car-cell">
                      <img src={car.image} alt={car.name} />
                      <span>{car.name}</span>
                    </div>
                  </td>
                  <td data-label="Year">{car.modelYear || car.year}</td>
                  <td data-label="Fuel">{car.fuelType || "Petrol"}</td>
                  <td data-label="Price">KSh {Number(car.price).toLocaleString()}</td>
                  <td data-label="Status">
                    <span className="status-pill">Active</span>
                  </td>
                  <td data-label="Actions">
                    <Link to={`/cars/${car.id}`} className="table-action">
                      View
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </section>
  );
}

export default Home;
