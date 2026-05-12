function FeaturedCar({ image, name, price, description }) {
  return (
    <div className="featured-card">
      <img src={image} alt={name} />

      <div className="featured-card-content">
        <h3>{name}</h3>
        <p>{description}</p>
        <h4>{price}</h4>
      </div>
    </div>
  );
}

export default FeaturedCar;