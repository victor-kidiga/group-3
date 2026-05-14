import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarForm from "../components/CarForm";
import { addCar } from "../services/api";

function AddCar() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    price: "",
    modelYear: "",
    fuelType: "",
    transmission: "",
    fuelConsumption: "",
    image: "",
    description: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    await addCar({
      ...formData,
      price: Number(formData.price),
      modelYear: Number(formData.modelYear),
    });

    navigate("/cars");
  }

  return (
    <div className="page-container">
      <header className="page-header">
        <p>Admin</p>
        <h1>Add New Car</h1>
      </header>
      <CarForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        buttonText="Add Car"
      />
    </div>
  );
}

export default AddCar;
