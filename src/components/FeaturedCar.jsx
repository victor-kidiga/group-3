import { Link } from "react-router-dom";

function FeaturedCar({ car }) {
  return (
    <div className="featured-card">
      <img src={car.image} alt={car.name} />

      <div className="featured-card-content">
        <h3>{car.name}</h3>
        <p>{car.description}</p>
        <h4>Ksh {Number(car.price).toLocaleString()}</h4>
        <Link to={`/cars/${car.id}`} className="featured-link">
          View Details
        </Link>
      </div>
    </div>
  );
}

export default FeaturedCar;
