import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CarForm from "../components/CarForm";
import { addCar } from "../services/api";

function AddCar() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    year: "",
    image: "",
    description: "",
  });

  async function handleSubmit(event) {
    event.preventDefault();

    await addCar({
      ...formData,
      price: Number(formData.price),
      year: Number(formData.year),
    });

    navigate("/cars");
  }

  return (
    <div className="page-container">
      <h1>Add New Car</h1>
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