import { Link } from "react-router-dom";
import FeaturedCar from "../components/FeaturedCar";

function Home() {
  return (
    <main className="home-page">
      <section className="hero-section">
        <div className="hero-content">
          <p className="hero-badge">Premium Car Marketplace</p>

          <h1>
            Find Your Dream Car With <span>MotoGrid</span>
          </h1>

          <p className="hero-text">
            Buy, sell, and manage luxury cars in one modern e-commerce platform.
          </p>

          <div className="hero-buttons">
            <Link to="/cars" className="btn primary-btn">
              Explore Cars
            </Link>

            <Link to="/add-car" className="btn secondary-btn">
              Add New Car
            </Link>
          </div>
        </div>

        <div className="hero-image">
          <img
            src="https://images.unsplash.com/photo-1492144534655-ae79c964c9d7?w=900"
            alt="Luxury sports car"
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
          <FeaturedCar
            image="https://images.unsplash.com/photo-1552519507-da3b142c6e3d?w=900"
            name="Chevrolet Camaro"
            price="Ksh 8,500,000"
            description="Sporty, powerful, and perfect for speed lovers."
          />

          <FeaturedCar
            image="https://images.unsplash.com/photo-1503376780353-7e6692767b70?w=900"
            name="Porsche 911"
            price="Ksh 18,000,000"
            description="A premium sports car with timeless performance."
          />

          <FeaturedCar
            image="https://images.unsplash.com/photo-1542362567-b07e54358753?w=900"
            name="Mercedes AMG"
            price="Ksh 12,500,000"
            description="Luxury, comfort, and power in one machine."
          />
        </div>
      </section>
    </main>
  );
}

export default Home;