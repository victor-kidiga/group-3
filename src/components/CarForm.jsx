function CarForm({ formData, setFormData, handleSubmit, buttonText }) {
  function handleChange(event) {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  }

  return (
    <form onSubmit={handleSubmit} className="car-form">
      <div className="form-section-title">
        <h2>Car Information</h2>
        <p>Fill in the product details that customers and administrators will use.</p>
      </div>

      <div className="form-grid">
        <label>
          Car Name
          <input
            type="text"
            name="name"
            placeholder="Enter car name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Price
          <input
            type="number"
            name="price"
            placeholder="Enter price"
            value={formData.price}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Model Year
          <input
            type="number"
            name="modelYear"
            placeholder="Select year"
            value={formData.modelYear || ""}
            onChange={handleChange}
            required
          />
        </label>

        <label>
          Fuel Type
          <select
            name="fuelType"
            value={formData.fuelType || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select fuel type</option>
            <option value="Petrol">Petrol</option>
            <option value="Diesel">Diesel</option>
            <option value="Electric">Electric</option>
            <option value="Hybrid">Hybrid</option>
          </select>
        </label>

        <label>
          Transmission
          <select
            name="transmission"
            value={formData.transmission || ""}
            onChange={handleChange}
            required
          >
            <option value="">Select transmission</option>
            <option value="Manual">Manual</option>
            <option value="Automatic">Automatic</option>
          </select>
        </label>

        <label>
          Fuel Consumption
          <input
            type="text"
            name="fuelConsumption"
            placeholder="Example: 14 km/l"
            value={formData.fuelConsumption || ""}
            onChange={handleChange}
          />
        </label>
      </div>

      <label className="full-field">
        Image URL
        <input
          type="text"
          name="image"
          placeholder="Paste product image URL"
          value={formData.image}
          onChange={handleChange}
          required
        />
      </label>

      <label className="upload-card">
        <span>Images</span>
        <strong>Paste a hosted image URL above</strong>
        <small>The live preview and product cards use this image.</small>
      </label>

      <label className="full-field">
        Description
        <textarea
          name="description"
          placeholder="Describe the product"
          value={formData.description}
          onChange={handleChange}
        />
      </label>

      <div className="form-actions">
        <button type="submit">{buttonText}</button>
      </div>
    </form>
  );
}

export default CarForm;