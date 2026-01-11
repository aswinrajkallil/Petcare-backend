import React, { useState } from 'react';
import '../Admin.css';
import api from '../api';
import {useNavigate} from 'react-router-dom'
function RegisterDoctor() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    qualification: "",
    phone: "",
    experience: "",
    license: "",
    clinicName: "",
    clinicAddress: "",
    password: "",
    cpassword: "",
  });

  const initialFormState = {
  name: "",
  email: "",
  qualification: "",
  phone: "",
  experience: "",
  license: "",
  clinicName: "",
  clinicAddress: "",
  password: "",
  cpassword: "",
};

  const [image, setImage] = useState(null);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const navigate=useNavigate()
  const validate = () => {
    let err = {};

    // Required checks
    Object.keys(form).forEach((key) => {
      if (!form[key].trim()) {
        err[key] = "This field is required";
      }
    });

    if (!image) err.image = "This field is required";

    // Format checks (only if value exists)
    if (form.name && !/^[A-Za-z\s]+$/.test(form.name))
      err.name = "Only alphabets allowed";

    if (form.email && !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))
      err.email = "Invalid email format";

    if (form.phone && !/^[0-9]{10}$/.test(form.phone))
      err.phone = "Phone must be 10 digits";

    if (form.experience && form.experience <= 0)
      err.experience = "Must be greater than 0";

    if (form.password &&
      !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d).{8,}$/.test(form.password))
      err.password = "Min 8 chars, upper, lower & number";

    if (form.cpassword && form.password !== form.cpassword)
      err.cpassword = "Passwords do not match";

    setErrors(err);
    return Object.keys(err).length === 0;
  };

  const Registeruser = async (e) => {
    e.preventDefault();
    setSubmitted(true);

    if (!validate()) return;

    try {
      const formdata = new FormData();
      Object.keys(form).forEach(key => {
        if (key !== "cpassword") {
          formdata.append(key, form[key]);
        }
      });
      formdata.append("image", image);

     const res = await api.post(`/register/doctor/`, formdata, {
        headers: { "Content-Type": "multipart/form-data" }
      });
setForm(initialFormState);
setImage(null);
alert(data.response.message || "Registration Successful")
navigate('/viewdoctor')

    } catch (error) {
      console.log(error);
      alert(error.response.data.message || "registration failed")
    }
  };

  const hasError = (field) => submitted && errors[field];

  return (
    <div className="register-doctor-container">
      <form className="register-doctor-form" onSubmit={Registeruser}>
        <h1 className="shopheader">Register Doctor</h1>

        {/* Name */}
        {hasError("name") && <span className="error">{errors.name}</span>}
        <input
          name="name"
          placeholder="Doctor Name"
          onChange={handleChange}
          className={hasError("name") ? "input-error" : ""}
        />

        {/* Email */}
        {hasError("email") && <span className="error">{errors.email}</span>}
        <input
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className={hasError("email") ? "input-error" : ""}
        />

        {/* Phone */}
        {hasError("phone") && <span className="error">{errors.phone}</span>}
        <input
          name="phone"
          placeholder="Phone"
          onChange={handleChange}
          className={hasError("phone") ? "input-error" : ""}
        />

        {/* Qualification */}
        {hasError("qualification") && <span className="error">{errors.qualification}</span>}
        <input
          name="qualification"
          placeholder="Qualification"
          onChange={handleChange}
          className={hasError("qualification") ? "input-error" : ""}
        />

        {/* Experience */}
        {hasError("experience") && <span className="error">{errors.experience}</span>}
        <input
          type="number"
          name="experience"
          placeholder="Experience"
          onChange={handleChange}
          className={hasError("experience") ? "input-error" : ""}
        />

        {/* License */}
        {hasError("license") && <span className="error">{errors.license}</span>}
        <input
          name="license"
          placeholder="License Number"
          onChange={handleChange}
          className={hasError("license") ? "input-error" : ""}
        />

        {/* Clinic Name */}
        {hasError("clinicName") && <span className="error">{errors.clinicName}</span>}
        <input
          name="clinicName"
          placeholder="Clinic Name"
          onChange={handleChange}
          className={hasError("clinicName") ? "input-error" : ""}
        />

        {/* Clinic Address */}
        {hasError("clinicAddress") && <span className="error">{errors.clinicAddress}</span>}
        <textarea
          name="clinicAddress"
          placeholder="Clinic Address"
          rows="3"
          onChange={handleChange}
          className={hasError("clinicAddress") ? "input-error" : ""}
        />

        {/* Password */}
        {hasError("password") && <span className="error">{errors.password}</span>}
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={handleChange}
          className={hasError("password") ? "input-error" : ""}
        />

        {/* Confirm Password */}
        {hasError("cpassword") && <span className="error">{errors.cpassword}</span>}
        <input
          type="password"
          name="cpassword"
          placeholder="Confirm Password"
          onChange={handleChange}
          className={hasError("cpassword") ? "input-error" : ""}
        />

        {/* Image */}
        {hasError("image") && <span className="error">{errors.image}</span>}
        <input
          type="file"
          accept="image/*"
          onChange={(e) => setImage(e.target.files[0])}
          className={hasError("image") ? "input-error" : ""}
        />

        <button type="submit" className="ShopRegister">
          Register Doctor
        </button>
      </form>
    </div>
  );
}

export default RegisterDoctor;
