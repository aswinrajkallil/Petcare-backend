import React, { useState } from 'react'
import "./shop.css"
import api from '../api';

import PetsIcon from '@mui/icons-material/Pets';

function ShopRegister() {
  // ... state declarations ...
  const [name, setName] = useState("");
  const [email, setemail] = useState("");
  const [ownerName, setownerName] = useState("");
  const [Phone, setPhone] = useState("");
  const [location, setlocation] = useState("");
  const [password, setpassword] = useState("");
  const [cpassword, setcpassword] = useState("");
  // console.log(name,email,ownerName,Phone,location,password,cpassword)
  const Registeruser = async (e) => {
    try {
      e.preventDefault()
      const body = { name, ownerName, email, Phone, location, password }
      console.log(body);

      const res = await api.post("/register/shop", body)
      console.log(res)
    } catch (e) {
      console.log(e);
    }

  }
  return (
    <div className="shopform">
      <form className='form-card' onSubmit={Registeruser}>

        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          <PetsIcon style={{ color: 'rgb(254, 121, 32)', fontSize: 32 }} />
          <h3 style={{ textAlign: "center", margin: 0, color: 'rgb(254, 121, 32)' }}>SHOP REGISTER</h3>
        </div>
        <div className="form-group">
          <label>Shop Name</label>
          <input type='text' onChange={(e) => setName(e.target.value)} placeholder="Enter shop name" />
        </div>

        <div className="form-group">
          <label>Owner Name</label>
          <input type='text' onChange={(e) => setownerName(e.target.value)} placeholder="Enter owner name" />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type='email' onChange={(e) => setemail(e.target.value)} placeholder="Enter email address" />
        </div>

        <div className="form-group">
          <label>Phone</label>
          <input type='tel' onChange={(e) => setPhone(e.target.value)} placeholder="Enter phone number" />
        </div>

        <div className="form-group">
          <label>Location</label>
          <textarea onChange={(e) => setlocation(e.target.value)} placeholder="Enter shop location" rows="3"></textarea>
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type='password' onChange={(e) => setpassword(e.target.value)} placeholder="Create password" />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type='password' onChange={(e) => setcpassword(e.target.value)} placeholder="Confirm password" />
        </div>

        <button className='ShopRegister' style={{ marginTop: '20px' }}>Register</button>

      </form>
    </div>
  )
}

export default ShopRegister
