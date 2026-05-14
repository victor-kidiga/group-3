import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import FeaturedCar from "../components/FeaturedCar";
import { getCars } from "../services/api";

function Home() {
  const [featuredCars, setFeaturedCars] = useState([]);

  useEffect(() => {
    async function loadFeaturedCars() {
      try {
        const cars = await getCars();
        setFeaturedCars(cars.slice(0, 3));
      } catch (error) {
        console.error("Error loading featured cars:", error);
      }
    }

    loadFeaturedCars();
  }, []);

  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-badge">Premium Car Marketplace</p>

          <h1>
            Curated performance cars for people who love the drive.
          </h1>

          <p className="hero-text">
            Buy, sell, and manage luxury cars in one modern e-commerce platform.
          </p>

          <div className="hero-buttons">
            <Link to="/cars" className="btn primary-btn">
              Explore Cars
            </Link>

            <Link to="/admin" className="btn secondary-btn">
              List a Car
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1549399542-7e3f8b79c341?w=900"
            alt="Toyota Corolla"
          />
        </div>
      </section>

      <section className="stats-section">
        <div>
          <h3>120+</h3>
          <p>Cars Available</p>
        </div>

        <div>
          <h3>50+</h3>
          <p>Trusted Dealers</p>
        </div>

        <div>
          <h3>24/7</h3>
          <p>Customer Support</p>
        </div>
      </section>

      <section className="featured-section">
        <div className="section-heading">
          <p>Top Picks</p>
          <h2>Featured Cars</h2>
        </div>

        <div className="featured-grid">
          {featuredCars.map((car) => (
            <FeaturedCar key={car.id} car={car} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
