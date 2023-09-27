import React, { useState } from "react";
import "./Form.css";
function Form() {
  const [formData, setFormData] = useState({
    name: "",
    logo_url: "",
  });

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Form Data:", formData);
    setFormData({
      name: "",
      logo_url: "",
    });
  };

  return (
    <div className="form">
      <h1>Add a New Store</h1>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="name">Name*:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="logo_url">Logo URL*:</label>
          <input
            type="url"
            id="logo_url"
            name="logo_url"
            value={formData.logo_url}
            onChange={handleInputChange}
            required
          />
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
    </div>
  );
}

export default Form;
