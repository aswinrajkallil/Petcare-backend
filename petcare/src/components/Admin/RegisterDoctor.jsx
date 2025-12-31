import React from 'react';
import './Admin.css';
import { useState } from 'react';
import api from '../api';


function RegisterDoctor() {
  const[name,setName]=useState("");
  const[email,setemail]=useState("");
  const[qualification,setqualification]=useState("");
  const[Phone,setphone]=useState("");
  const[experience,setexperience]=useState("");
  const[license,setlicense]=useState("");
  const[clinicName,setclinicname]=useState("");
  const[clinicAddress,setclinicAddress]=useState("");
  const[password,setpassword]=useState("");
  const[cpassword,setcpassword]=useState("");
  const[image,setimage]=useState(null);
  console.log(image);
  

  const Registeruser=async(e)=>{
    try{
      e.preventDefault()
    // const body={name,email,qualification,Phone,experience,license,clinicName,clinicAddress,password,image}
    const formdata=new FormData()
    formdata.append("name",name);
    formdata.append("email",email);
    formdata.append("qualification",qualification);
    formdata.append("Phone",Phone);
    formdata.append("experience",experience);
    formdata.append("license",license);
    formdata.append("clinicName",clinicName);
    formdata.append("clinicAddress",clinicAddress);
    formdata.append("password",password);
    formdata.append("image",image);


    // console.log(body);
    
    const res=await api.post("/register/doctor",formdata,
      {
        headers:{"Content-Type":"multipart/form-data"}
      }
    )
    console.log(res)
  }catch(e){
    console.log(e);
  }
    
  }
  return (
    <div className="register-doctor-container">
      
      <form className="register-doctor-form" onSubmit={Registeruser}>
        <h1 className='text-dark'>Register <div className='docorr'>Doctor</div></h1>
        <table>
          <tbody>

            <tr>
              <td><label htmlFor="name">Name</label></td>
              <td><input type="text" id="name"onChange={(e)=>setName(e.target.value)} /></td>
            </tr>

            <tr>
              <td><label htmlFor="email">Email</label></td>
              <td><input type="email" id="email"onChange={(e)=>setemail(e.target.value)} /></td>
            </tr>

            <tr>
              <td><label htmlFor="phone">Phone</label></td>
              <td><input type="tel" id="phone"onChange={(e)=>setphone(e.target.value)} /></td>
            </tr>

            <tr>
              <td><label htmlFor="qualification">Qualification</label></td>
              <td><input type="text" id="qualification"onChange={(e)=>setqualification(e.target.value)} /></td>
            </tr>

            <tr>
              <td><label htmlFor="experience">Experience (Years)</label></td>
              <td><input type="number" id="experience"onChange={(e)=>setexperience(e.target.value)} /></td>
            </tr>

            <tr>
              <td><label htmlFor="license">License Number</label></td>
              <td><input type="text" id="license"onChange={(e)=>setlicense(e.target.value)} /></td>
            </tr>

            <tr>
              <td><label htmlFor="clinicName">Clinic Name</label></td>
              <td><input type="text" id="clinicName" onChange={(e)=>setclinicname(e.target.value)}/></td>
            </tr>

            <tr>
              <td><label htmlFor="clinicAddress">Clinic Address</label></td>
              <td><textarea id="clinicAddress" onChange={(e)=>setclinicAddress(e.target.value)}/></td>
            </tr>

            <tr>
              <td><label htmlFor="password">Password</label></td>
              <td><input type="password" id="password"onChange={(e)=>setpassword(e.target.value)} /></td>
            </tr>

            <tr>
              <td><label htmlFor="confirmPassword">Confirm Password</label></td>
              <td><input type="password" id="confirmPassword" onChange={(e)=>setcpassword(e.target.value)}/></td>
            </tr>
            <tr>
              <td><label htmlFor='image'>Image</label></td>
                <td><input type="file" id="image" accept="image/*" onChange={(e)=>setimage(e.target.files[0])}/></td>
            </tr>
            <tr>
              <td colSpan="2">
                <button type="submit">Register</button>
              </td>
            </tr>
          </tbody>
        </table>
      </form>
    </div>
  );
}

export default RegisterDoctor;
