import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCar, getSettings } from "../services/api";

function CarDetails() {
  const { id } = useParams();
  const [car, setCar] = useState(null);
  const [error, setError] = useState("");
  const [showContact, setShowContact] = useState(false);
  const [settings, setSettings] = useState({
    salesPhone: "+254700000000",
    salesEmail: "sales@motogrid.com",
  });

  useEffect(() => {
    async function loadCar() {
      try {
        const carData = await getCar(id);
        const settingsData = await getSettings();
        setCar(carData);
        setSettings((currentSettings) => ({
          ...currentSettings,
          ...settingsData,
        }));
      } catch (fetchError) {
        console.error("Error fetching car:", fetchError);
        setError("Car details could not be loaded.");
      }
    }

    loadCar();
  }, [id]);

  if (error) {
    return (
      <div className="car-details-page">
        <h1>{error}</h1>
        <Link to="/cars" className="back-link">
          Back to cars
        </Link>
      </div>
    );
  }

  if (!car) {
    return (
      <div className="car-details-page">
        <h1>Loading car details...</h1>
      </div>
    );
  }

  const phoneForLink = settings.salesPhone.replace(/\D/g, "");

  return (
    <div className="car-details-page">
      <Link to="/cars" className="back-link">
        Back to cars
      </Link>

      <section className="car-detail-layout">
        <img src={car.image} alt={car.name} className="car-detail-image" />

        <div className="car-detail-content">
          <p className="car-detail-label">Selected car</p>
          <h1>{car.name}</h1>
          <p className="car-detail-description">{car.description}</p>

          <div className="car-detail-price">
            KSh {Number(car.price).toLocaleString()}
          </div>

          <div className="car-spec-grid">
            <div>
              <span>Model Year</span>
              <strong>{car.modelYear}</strong>
            </div>
            <div>
              <span>Fuel Type</span>
              <strong>{car.fuelType}</strong>
            </div>
            <div>
              <span>Transmission</span>
              <strong>{car.transmission}</strong>
            </div>
            <div>
              <span>Fuel Consumption</span>
              <strong>{car.fuelConsumption}</strong>
            </div>
          </div>

          <div className="buy-panel">
            <h2>Ready to buy?</h2>
            <p>
              Contact the sales team to confirm availability, arrange viewing,
              and start the purchase process for this car.
            </p>
            <button
              type="button"
              className="buy-action"
              onClick={() => setShowContact(true)}
            >
              Contact Sales
            </button>

            {showContact && (
              <div className="contact-box">
                <p>Sales phone: {settings.salesPhone}</p>
                <a href={`tel:${settings.salesPhone}`}>Call now</a>
                <a
                  href={`https://wa.me/${phoneForLink}?text=Hello,%20I%20am%20interested%20in%20the%20${encodeURIComponent(car.name)}`}
                  target="_blank"
                  rel="noreferrer"
                >
                  WhatsApp sales
                </a>
                <a
                  href={`mailto:${settings.salesEmail}?subject=Buying%20${encodeURIComponent(car.name)}`}
                >
                  Email sales
                </a>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CarDetails;
