import React, { useState } from "react";
import "./Form.css";
import { useParams } from "react-router-dom";

function FormCategory({ categories, setCategories }) {
  const { shopId } = useParams();

  const [name, setName] = useState("");
  const [logo_url, setLogoURL] = useState("");

  const handleInputNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleInputLogoChange = (e) => {
    e.preventDefault();
    setLogoURL(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && name.length > 0 && logo_url && logo_url.length > 0) {
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
            body: JSON.stringify({ name, logo_url }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          console.log("data cat", data.category);
          alert("Category added successfully!");
          setName("");
          setLogoURL("");
          setCategories([...categories, data.category]);
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
      <form onSubmit={handleSubmit}>
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
            value={logo_url}
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
