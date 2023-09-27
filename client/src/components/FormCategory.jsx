import React, { useState } from "react";
import "./Form.css";

function FormCategory({ categories, setCategories, shopId }) {
  shopId = Number(shopId);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");

  const handleInputNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleInputLogoChange = (e) => {
    e.preventDefault();
    setImg(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && name.length > 0 && img && img.length > 0) {
      try {
        const response = await fetch(
          `https://full-stack-challenge-klt3.onrender.com/store/${Number(
            shopId
          )}/category`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, img }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          alert("Category added successfully!");
          setName("");
          setImg("");
          console.log(data);
          setCategories([...categories, data.store]);
        } else {
          console.error("Failed to create a Category.");
          alert("Failed to create a Category!");
        }
      } catch (error) {
        console.error("An error occurred while sending the request: ", error);
      }
    }
  };
  return (
    <div className="form">
      <h1>Add a New Category</h1>
      <form>
        <div className="form-group">
          <label htmlFor="name">Name*:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={name}
            onChange={handleInputNameChange}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="logo_url">Logo URL*:</label>
          <input
            type="url"
            id="logo_url"
            name="logo_url"
            value={img}
            onChange={handleInputLogoChange}
            required
          />
        </div>
        <button type="submit" className="submit" onClick={handleSubmit}>
          Submit
        </button>
      </form>
    </div>
  );
}

export default FormCategory;
