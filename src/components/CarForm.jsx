const CarForm = ({
  formData,
  setFormData,
  handleSubmit,
  buttonText
}) => {

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <form onSubmit={handleSubmit} className="car-form">

      <input
        type="text"
        name="name"
        placeholder="Car Name"
        value={formData.name}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="price"
        placeholder="Price"
        value={formData.price}
        onChange={handleChange}
        required
      />

      <input
        type="number"
        name="modelYear"
        placeholder="Model Year"
        value={formData.modelYear || ""}
        onChange={handleChange}
        required
      />

      <select
        name="fuelType"
        value={formData.fuelType || ""}
        onChange={handleChange}
        required
      >
        <option value="">Select Fuel Type</option>
        <option value="Petrol">Petrol</option>
        <option value="Diesel">Diesel</option>
        <option value="Electric">Electric</option>
        <option value="Hybrid">Hybrid</option>
      </select>

      <select
        name="transmission"
        value={formData.transmission || ""}
        onChange={handleChange}
        required
      >
        <option value="">Select Transmission</option>
        <option value="Manual">Manual</option>
        <option value="Automatic">Automatic</option>
      </select>

      <input
        type="text"
        name="fuelConsumption"
        placeholder="Fuel Consumption"
        value={formData.fuelConsumption || ""}
        onChange={handleChange}
      />

      <input
        type="text"
        name="image"
        placeholder="Image URL"
        value={formData.image}
        onChange={handleChange}
        required
      />

      <textarea
        name="description"
        placeholder="Description"
        value={formData.description}
        onChange={handleChange}
      />

      <button type="submit">
        {buttonText}
      </button>

    </form>
  );
};

export default CarForm;
