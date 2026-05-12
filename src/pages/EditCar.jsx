import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CarForm from "../components/CarForm";
import { getCar, updateCar } from "../services/api";

function EditCar() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    brand: "",
    price: "",
    year: "",
    image: "",
    description: "",
  });

  useEffect(() => {
    async function loadCar() {
      const car = await getCar(id);
      setFormData(car);
    }

    loadCar();
  }, [id]);

  async function handleSubmit(event) {
    event.preventDefault();

    await updateCar(id, {
      ...formData,
      price: Number(formData.price),
      year: Number(formData.year),
    });

    navigate("/cars");
  }

  return (
    <div className="page-container">
      <h1>Edit Car</h1>
      <CarForm
        formData={formData}
        setFormData={setFormData}
        handleSubmit={handleSubmit}
        buttonText="Update Car"
      />
    </div>
  );
}

export default EditCar;