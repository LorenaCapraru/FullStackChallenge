import React, { useState } from "react";
import "./Form.css";

function FormItem({ items, setItems, shopId, categoryId }) {
  shopId = Number(shopId);
  const [name, setName] = useState("");
  const [img, setImg] = useState("");
  const [price, setPrice] = useState(null);

  const handleInputNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };

  const handleInputLogoChange = (e) => {
    e.preventDefault();
    setImg(e.target.value);
  };

  const handleInputPriceChange = (e) => {
    e.preventDefault();
    setPrice(e.target.value);
  };
  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && name.length > 0 && img && img.length > 0) {
      try {
        const response = await fetch(
          `https://full-stack-challenge-klt3.onrender.com/store/${Number(
            shopId
          )}/${Number(categoryId)}`,
          {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({ name, img, price }),
          }
        );

        if (response.ok) {
          const data = await response.json();
          alert("Items added successfully!");
          setName("");
          setImg("");
          console.log(data);
          setItems([...items, data.store]);
        } else {
          console.error("Failed to create a Item.");
          alert("Failed to create a Item!");
        }
      } catch (error) {
        console.error("An error occurred while sending the request: ", error);
      }
    }
  };
  return (
    <div className="form">
      <h1>Add a New Item</h1>
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
        <div className="form-group">
          <label htmlFor="number">Price*:</label>
          <input
            type="text"
            id="number"
            name="number"
            value={price}
            onChange={handleInputPriceChange}
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

export default FormItem;
