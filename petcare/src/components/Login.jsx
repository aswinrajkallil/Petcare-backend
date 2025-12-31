import React from 'react'
import { Link, useNavigate } from 'react-router-dom'
// import bgImage from '../assets/pet.jpg';

import './login.css'
import { useState } from 'react'
import api from './api';
function Login() {
  const[username,setUsername]=useState("");
   const[password,setPassword]=useState("");

   const navigate=useNavigate()

   const handleSubmit=async(e)=>{
    try{
    e.preventDefault()
    const body={username,password}

    const res=await api.post("/login",body)
    console.log(res)
    if(res.data.role === "admin"){
      localStorage.setItem("userLoginId",res.data.loginId)
      navigate("/viewuser")
    }
    else if(res.data.role==="shop" && res.data.verfied ===true){
    localStorage.setItem("userLoginId",res.data.loginId)  
    navigate("/shophome")
    }
    }
    catch(e){
      console.log(e);

    }
   }
  return (
    <div className='LoginBody'>
      <form className='LoginForm' onSubmit={handleSubmit}>

      <h1 className='Login'>Login</h1>
        <label className='labellogin' >Username</label>
        <input type='text' placeholder='enter your email' className='LoginInput' onChange={(e)=>setUsername(e.target.value)} /><br/>
        <label  className='labellogin'>Password</label>
        <input type='password' className='LoginInput'  placeholder='enter your password'onChange={(e)=>setPassword(e.target.value)}/><br/>
        <div className='button1'>
        <button className='LoginButton'>Login</button>
        </div>
        <p className='registerpara'>Don't have a account? <Link to={'/shopregister'} className='Register-Button'>Register here</Link> </p>
      </form>
    </div>
  )
}

export default Login
