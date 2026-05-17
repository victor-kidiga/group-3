const CarCard = ({ car, onDelete, onEdit, onBuy, isAdmin }) => {
  const modelYear = car.modelYear || car.year;

  return (
    <div className="car-card">
      <img src={car.image} alt={car.name} className="car-image" />

      <div className="car-card-content">
        <h2>{car.name}</h2>
        <div className="car-details">
          {modelYear && <span>{modelYear}</span>}
          {car.transmission && <span>{car.transmission}</span>}
          {car.fuelType && <span>{car.fuelType}</span>}
        </div>
        <p>Price: KSh {Number(car.price).toLocaleString()}</p>

        <div className="card-footer">
          <button type="button" className="buy-button" onClick={onBuy}>
            Buy
          </button>

          {isAdmin && (
            <div className="car-actions">
              <button type="button" onClick={onEdit}>
                Edit
              </button>
              <button type="button" className="danger-button" onClick={onDelete}>
                Remove
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default CarCard;

