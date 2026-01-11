// import React, { useState } from "react";
// import "./shop.css";
// import api from "../api";
// import { useParams } from "react-router-dom";
// import { useEffect } from "react";

// function EditProducts() {
//   const [form, setForm] = useState({
//     name: "",
//     desc: "",
//     price: "",
//     qty: "",
//     unit: "",
//   });
// const { id } = useParams();

//   const [image, setImage] = useState(null);
//   const [errors, setErrors] = useState({});
//   const [submitted, setSubmitted] = useState(false);
// const shopLId=localStorage.getItem("userLoginId")
// const getDetails=async(req,res)=>{
//     try{
//     const res=await api.get(`/shop/editpdetails/${id}`)
//     console.log(res)
//     }
//     catch(e){
//         console.log(e);
        
//     }
// }

// useEffect(()=>{getDetails()},[])


//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   const validate = () => {
//     let err = {};

//     // Required
//     Object.keys(form).forEach((key) => {
//       if (!form[key].trim()) err[key] = "This field is required";
//     });

//     if (!image) err.image = "Product image required";

//     // Price validation
//     if (form.price && form.price <= 0)
//       err.price = "Price must be greater than 0";

//     // Quantity validation
//     if (form.qty && form.qty <= 0)
//       err.qty = "Quantity must be greater than 0";

//     setErrors(err);
//     return Object.keys(err).length === 0;
//   };

//   const handleSubmit =async (e) => {
//     e.preventDefault();
//     setSubmitted(true);
//     if (!validate()) return;
//     try{
//        const formdata = new FormData();
//       Object.keys(form).forEach(key => {
//         if (key !== "cpassword") {
//           formdata.append(key, form[key]);
//         }
//       });
//       formdata.append("image", image);

//      const res = await api.post(`/shop/addproduct/${shopLId}`, formdata, {
//         headers: { "Content-Type": "multipart/form-data" }
//       });
//       console.log(res);
      
// // setForm(initialFormState);
// setImage(null);
// // alert(data.response.message || "Registration Successful")
// // navigate('/viewdoctor')

//     }
//     catch(e){
// console.log(e);

//     }


//     alert("Product Editted Successfully");
//   };

//   const hasError = (field) => submitted && errors[field];

//   return (
//     <div className="addproduct-container">
//       <form className="addproduct" onSubmit={handleSubmit}>
//         <h1 className="producth1">Edit Product</h1>

//         {/* Product Name */}
//         {hasError("name") && <span className="error">{errors.name}</span>}
//         <input
//           name="name"
//           placeholder="Product name"
//           onChange={handleChange}
//           className={hasError("name") ? "input-error" : ""}
//         />

//         {/* Description */}
//         {hasError("desc") && <span className="error">{errors.desc}</span>}
//         <textarea
//           name="desc"
//           placeholder="Description"
//           className={`desc-box ${hasError("desc") ? "input-error" : ""}`}
//           onChange={handleChange}
//         />

//         {/* Price */}
//         {hasError("price") && <span className="error">{errors.price}</span>}
//         <div className="price-row">
//           <input
//             type="number"
//             name="price"
//             placeholder="Price"
//             onChange={handleChange}
//             className={`price-input ${hasError("price") ? "input-error" : ""}`}
//           />
//           <select className="currency-select">
//             <option>INR ₹</option>
//             <option>USD $</option>
//             <option>EUR €</option>
//             <option>JPY ¥</option>
//           </select>
//         </div>

//         {/* Quantity */}
//         {hasError("qty") && <span className="error">{errors.qty}</span>}
//         <div className="quantity-box">
//           <input
//             type="number"
//             name="qty"
//             placeholder="Quantity"
//             onChange={handleChange}
//             className={`qty-input ${hasError("qty") ? "input-error" : ""}`}
//           />

//           <select
//             name="unit"
//             onChange={handleChange}
//             className={`qty-unit ${hasError("unit") ? "input-error" : ""}`}
//           >
//             <option value="">Unit</option>
//             <option value="kg">kg</option>
//             <option value="g">g</option>
//             <option value="pcs">pcs</option>
//             <option value="box">box</option>
//           </select>
//         </div>

//         {/* Image */}
//         {hasError("image") && <span className="error">{errors.image}</span>}
//         <input
//           type="file"
//           accept="image/*"
//           onChange={(e) => setImage(e.target.files[0])}
//           className={hasError("image") ? "input-error" : ""}
//         />

//         {image && (
//           <img
//             src={URL.createObjectURL(image)}
//             className="image-preview"
//             alt="preview"
//           />
//         )}

//         <button type="submit">ADD</button>
//       </form>
//     </div>
//   );
// }

// export default EditProducts;


import React, { useEffect, useState } from "react";
import "./shop.css";
import api from "../api";
import { useParams, useNavigate } from "react-router-dom";

function EditProducts() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    desc: "",
    price: "",
    qty: "",
    unit: "",
  });

  const [image, setImage] = useState(null);
  const [oldImage, setOldImage] = useState("");
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  // 🔹 Fetch product details
  const getDetails = async () => {
    try {
      const res = await api.get(`/shop/editpdetails/${id}`);
      const p = res.data.pdetails;

      setForm({
        name: p.productname || "",
        desc: p.description || "",
        price: p.price || "",
        qty: p.quantity || "",
        unit: p.unit || "",
      });

      setOldImage(p.image || "");
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getDetails();
  }, [id]);

  // 🔹 Handle input change
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔹 Validation
  const validate = () => {
    let err = {};

    Object.keys(form).forEach((key) => {
      if (!form[key]) err[key] = "This field is required";
    });

    if (!oldImage && !image) err.image = "Product image required";

    if (form.price <= 0) err.price = "Price must be greater than 0";
    if (form.qty <= 0) err.qty = "Quantity must be greater than 0";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  // 🔹 Update product (PUT)
  const handleSubmit = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validate()) return;

    try {
      const formData = new FormData();

      formData.append("productname", form.name);
      formData.append("description", form.desc);
      formData.append("price", form.price);
      formData.append("quantity", form.qty);
      formData.append("unit", form.unit);

      // send new image only if changed
      if (image) {
        formData.append("image", image);
      }

     const res= await api.put(`/shop/updateproduct/${id}`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      console.log(res)
      alert("Product Updated Successfully");
      navigate("/manageproducts");

    } catch (e) {
      console.log(e);
    }
  };

  const hasError = (field) => submitted && errors[field];

  return (
    <div className="addproduct-container">
      <form className="addproduct" onSubmit={handleSubmit}>
        <h1 className="producth1">Edit Product</h1>

        {/* Product Name */}
        {hasError("name") && <span className="error">{errors.name}</span>}
        <input
          name="name"
          placeholder="Product name"
          value={form.name}
          onChange={handleChange}
          className={hasError("name") ? "input-error" : ""}
        />

        {/* Description */}
        {hasError("desc") && <span className="error">{errors.desc}</span>}
        <textarea
          name="desc"
          placeholder="Description"
          value={form.desc}
          onChange={handleChange}
          className={`desc-box ${hasError("desc") ? "input-error" : ""}`}
        />

        {/* Price */}
        {hasError("price") && <span className="error">{errors.price}</span>}
        <div className="price-row">
          <input
            type="number"
            name="price"
            placeholder="Price"
            value={form.price}
            onChange={handleChange}
            className={`price-input ${hasError("price") ? "input-error" : ""}`}
          />
          <select className="currency-select">
            <option>INR ₹</option>
            <option>USD $</option>
            <option>EUR €</option>
          </select>
        </div>

        {/* Quantity */}
        {hasError("qty") && <span className="error">{errors.qty}</span>}
        <div className="quantity-box">
          <input
            type="number"
            name="qty"
            placeholder="Quantity"
            value={form.qty}
            onChange={handleChange}
            className={`qty-input ${hasError("qty") ? "input-error" : ""}`}
          />

          <select
            name="unit"
            value={form.unit}
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

        {/* Old Image */}
        {oldImage && !image && (
          <img
            src={`http://localhost:8000/${oldImage}`}
            className="image-preview"
            alt="old"
          />
        )}

        {/* New Image Preview */}
        {image && (
          <img
            src={URL.createObjectURL(image)}
            className="image-preview"
            alt="preview"
          />
        )}

        <button type="submit">UPDATE</button>
      </form>
    </div>
  );
}

export default EditProducts;
