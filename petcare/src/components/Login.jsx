import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import PetsIcon from '@mui/icons-material/Pets';
import './login.css'
import api from './api';

function Login() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate()

  const handleSubmit = async (e) => {
    try {
      e.preventDefault()
      const body = { username, password }

      const res = await api.post("/login", body)
      console.log(res)
      if (res.data.role === "admin") {
        localStorage.setItem("userLoginId", res.data.loginId)
        navigate("/admin-dashboard")
      }
      else if (res.data.role === "shop" && res.data.verfied === true) {
        localStorage.setItem("userLoginId", res.data.loginId)
        navigate("/shophome")
      }
      else if(res.data.role ==="doctor" && res.data.verfied === true){
        localStorage.setItem("doctorloginid",res.data.loginId)
        navigate("/DoctorHome")
      }
    }
    catch (e) {
      console.log(e);

    }
  }
  return (
    <div className='LoginBody'>
      <div className='LoginContainer'>
        <div className='LoginHeader' style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '10px', marginBottom: '20px' }}>
          <PetsIcon style={{ color: 'rgb(254, 121, 32)', fontSize: 40 }} />
          <h1 className='LoginTitle' style={{ margin: 0, color: 'rgb(254, 121, 32)', fontSize: '2rem' }}>PetCare Login</h1>
        </div>
        <form className='LoginForm' onSubmit={handleSubmit}>
          <h2 className='LoginSubtitle'>Welcome Back</h2>
          <label className='labellogin' >Username</label>
          <input type='text' placeholder='enter your email' className='LoginInput' onChange={(e) => setUsername(e.target.value)} /><br />
          <label className='labellogin'>Password</label>
          <input type='password' className='LoginInput' placeholder='enter your password' onChange={(e) => setPassword(e.target.value)} /><br />
          <div className='button1'>
            <button className='LoginButton'>Login</button>
          </div>
          <p className='registerpara'>Don't have a account? <Link to={'/shopregister'} className='Register-Button'>Register here</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default Login
