import React from 'react'
import { Link } from 'react-router-dom'
// import bgImage from '../assets/pet.jpg';

import './login.css'
function Login() {
  return (
    <div className='LoginBody'>
      <form className='LoginForm'>

      <h1 className='Login'>Login</h1>
        <label className='labellogin' >Username</label>
        <input type='text' placeholder='enter your email' className='LoginInput' /><br/>
        <label  className='labellogin'>Password</label>
        <input type='password' className='LoginInput'  placeholder='enter your password'/><br/>
        <div className='button1'>
        <button className='LoginButton'>Login</button>
        </div>
        <p className='registerpara'>Don't have a account? <Link to={'/shopregister'} className='Register-Button'>Register here</Link> </p>
      </form>
    </div>
  )
}

export default Login
