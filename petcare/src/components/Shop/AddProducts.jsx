import React, { useState } from "react";
import "./shop.css";
import api from "../api";

function AddProducts() {
  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: "",
    qty: "",
    unit: "",
  });

  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
const shopLId=localStorage.getItem("userLoginId")

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const validate = () => {
    let err = {};

    // Required
    Object.keys(form).forEach((key) => {
      if (!form[key].trim()) err[key] = "This field is required";
    });

    if (!image) err.image = "Product image required";

    // Price validation
    if (form.price && form.price <= 0)
      err.price = "Price must be greater than 0";

    // Quantity validation
    if (form.qty && form.qty <= 0)
      err.qty = "Quantity must be greater than 0";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const handleSubmit =async (e) => {
    e.preventDefault();
    setSubmitted(true);
    if (!validate()) return;
    try{
       const formdata = new FormData();
      Object.keys(form).forEach(key => {
        if (key !== "cpassword") {
          formdata.append(key, form[key]);
        }
      });
      formdata.append("image", image);

     const res = await api.post(`/shop/addproduct/${shopLId}`, formdata, {
        headers: { "Content-Type": "multipart/form-data" }
      });
      console.log(res);
      
// setForm(initialFormState);
setImage(null);
// alert(data.response.message || "Registration Successful")
// navigate('/viewdoctor')

    }
    catch(e){
console.log(e);

    }


    alert("Product Added Successfully");
  };

  const hasError = (field) => submitted && errors[field];

  return (
    <div className="addproduct-container">
      <form className="addproduct" onSubmit={handleSubmit}>
        <h1 className="producth1">ADD PRODUCT</h1>

        {/* Product Name */}
        {hasError("name") && <span className="error">{errors.name}</span>}
        <input
          name="name"
          placeholder="Product name"
          onChange={handleChange}
          className={hasError("name") ? "input-error" : ""}
        />

        {/* Description */}
        {hasError("desc") && <span className="error">{errors.desc}</span>}
        <textarea
          name="desc"
          placeholder="Description"
          className={`desc-box ${hasError("desc") ? "input-error" : ""}`}
          onChange={handleChange}
        />

        {/* Price */}
        {hasError("price") && <span className="error">{errors.price}</span>}
        <div className="price-row">
          <input
            type="number"
            name="price"
            placeholder="Price"
            onChange={handleChange}
            className={`price-input ${hasError("price") ? "input-error" : ""}`}
          />
          <select className="currency-select">
            <option>INR ₹</option>
            <option>USD $</option>
            <option>EUR €</option>
            <option>JPY ¥</option>
          </select>
        </div>

        {/* Quantity */}
        {hasError("qty") && <span className="error">{errors.qty}</span>}
        <div className="quantity-box">
          <input
            type="number"
            name="qty"
            placeholder="Quantity"
            onChange={handleChange}
            className={`qty-input ${hasError("qty") ? "input-error" : ""}`}
          />

          <select
            name="unit"
            onChange={handleChange}
            className={`qty-unit ${hasError("unit") ? "input-error" : ""}`}
          >
            <option value="">Unit</option>
            <option value="kg">kg</option>
            <option value="g">g</option>
            <option value="pcs">pcs</option>
            <option value="box">box</option>
          </select>
        </div>

        {/* Image */}
        {hasError("image") && <span className="error">{errors.image}</span>}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className={hasError("image") ? "input-error" : ""}
        />

        {image && (
          <img
            src={URL.createObjectURL(image)}
            className="image-preview"
            alt="preview"
          />
        )}

        <button type="submit">ADD</button>
      </form>
    </div>
  );
}

export default AddProducts;
