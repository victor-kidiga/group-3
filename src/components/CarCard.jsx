const CarCard = ({ car, onDelete, onEdit }) => {
  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />

      <div className="car-card-content">
        <h2>{car.name}</h2>
        <p>{car.description || `${car.brand} - ${car.year}`}</p>
        <p>{car.brand}</p>
        <p>Price: ${Number(car.price).toLocaleString()}</p>

        <div className="car-actions">
          <button type="button" onClick={onEdit}>
            Edit
          </button>
          <button type="button" className="danger-button" onClick={onDelete}>
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default CarCard;
