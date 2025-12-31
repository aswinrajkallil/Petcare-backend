import React from 'react';
import './Admin.css';
import { useState } from 'react';
import api from '../api';


function RegisterDoctor() {
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [qualification, setqualification] = useState("");
  const [Phone, setphone] = useState("");
  const [experience, setexperience] = useState("");
  const [license, setlicense] = useState("");
  const [clinicName, setclinicname] = useState("");
  const [clinicAddress, setclinicAddress] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  const [image, setimage] = useState(null);
  console.log(image);


  const Registeruser = async (e) => {
    try {
      e.preventDefault()
      // const body={name,email,qualification,Phone,experience,license,clinicName,clinicAddress,password,image}
      const formdata = new FormData()
      formdata.append("name", name);
      formdata.append("email", email);
      formdata.append("qualification", qualification);
      formdata.append("Phone", Phone);
      formdata.append("experience", experience);
      formdata.append("license", license);
      formdata.append("clinicName", clinicName);
      formdata.append("clinicAddress", clinicAddress);
      formdata.append("password", password);
      formdata.append("image", image);


      // console.log(body);

      const res = await api.post("/register/doctor", formdata,
        {
          headers: { "Content-Type": "multipart/form-data" }
        }
      )
      console.log(res)
    } catch (e) {
      console.log(e);
    }

  }
  return (
    <div className="register-doctor-container">
      <form className="register-doctor-form" onSubmit={Registeruser}>
        <h1 className='shopheader'>Register Doctor</h1>

        <div className="form-group">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" onChange={(e) => setName(e.target.value)} placeholder="Enter doctor's name" />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input type="email" id="email" onChange={(e) => setemail(e.target.value)} placeholder="Enter email address" />
        </div>

        <div className="form-group">
          <label htmlFor="phone">Phone</label>
          <input type="tel" id="phone" onChange={(e) => setphone(e.target.value)} placeholder="Enter phone number" />
        </div>

        <div className="form-group">
          <label htmlFor="qualification">Qualification</label>
          <input type="text" id="qualification" onChange={(e) => setqualification(e.target.value)} placeholder="e.g. MBBS, MD" />
        </div>

        <div className="form-group">
          <label htmlFor="experience">Experience (Years)</label>
          <input type="number" id="experience" onChange={(e) => setexperience(e.target.value)} placeholder="Years of experience" />
        </div>

        <div className="form-group">
          <label htmlFor="license">License Number</label>
          <input type="text" id="license" onChange={(e) => setlicense(e.target.value)} placeholder="Medical license number" />
        </div>

        <div className="form-group">
          <label htmlFor="clinicName">Clinic Name</label>
          <input type="text" id="clinicName" onChange={(e) => setclinicname(e.target.value)} placeholder="Clinic name" />
        </div>

        <div className="form-group">
          <label htmlFor="clinicAddress">Clinic Address</label>
          <textarea id="clinicAddress" onChange={(e) => setclinicAddress(e.target.value)} placeholder="Full clinic address" rows="3" />
        </div>

        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input type="password" id="password" onChange={(e) => setpassword(e.target.value)} placeholder="Create password" />
        </div>

        <div className="form-group">
          <label htmlFor="confirmPassword">Confirm Password</label>
          <input type="password" id="confirmPassword" onChange={(e) => setcpassword(e.target.value)} placeholder="Confirm password" />
        </div>

        <div className="form-group">
          <label htmlFor='image'>Profile Image</label>
          <input type="file" id="image" accept="image/*" onChange={(e) => setimage(e.target.files[0])} />
        </div>

        <button type="submit" className="ShopRegister" style={{ marginTop: '20px' }}>Register Doctor</button>
      </form>
    </div>
  );
}

export default RegisterDoctor;
