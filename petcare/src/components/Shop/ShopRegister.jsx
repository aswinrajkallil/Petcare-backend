import React, { useState } from 'react'
import "./shop.css"
import "../login.css"
import api from '../api';

function ShopRegister() {
  const[name,setName]=useState("");
  const[email,setemail]=useState("");
  const[ownerName,setownerName]=useState("");
  const[Phone,setPhone]=useState("");
  const[location,setlocation]=useState("");
  const[password,setpassword]=useState("");
  const[cpassword,setcpassword]=useState("");
  // console.log(name,email,ownerName,Phone,location,password,cpassword)
  const Registeruser=async(e)=>{
    try{
      e.preventDefault()
    const body={name,ownerName,email,Phone,location,password}
    console.log(body);
    
    const res=await api.post("/register/shop",body)
    console.log(res)
  }catch(e){
    console.log(e);
  }
    
  }
  return (
    <div>
     <form className='d-flex flex-column justify-content-center align-items-center shopheader ' onSubmit={Registeruser}>
           
       <div >
             <h3 style={{textAlign:"center"}}>SHOP REGISTER</h3>
           </div>
        <table className='fontsize '>
            
            <tr>
                <th><label >Shop Name</label></th>
                <td><input type='text' onChange={(e)=>setName(e.target.value)}></input></td>
            </tr>
            <tr>
                <td><label>Owner Name</label></td>
                <td><input type='text' onChange={(e)=>setownerName(e.target.value)}></input></td>
            </tr>
            <tr>
                <td><label>Email</label></td>
                <td><input type='email' onChange={(e)=>setemail(e.target.value)}></input></td>
            </tr>
                        <tr>
                <td><label>Phone</label></td>
                <td><input type='tel'onChange={(e)=>setPhone(e.target.value)}></input></td>
            </tr>
            <tr>
                <td><label>Location</label></td>
                <td><input type='textarea'onChange={(e)=>setlocation(e.target.value)}></input></td>
            </tr>
            <tr>
                <td><label>Password</label></td>
                <td><input type='password'onChange={(e)=>setpassword(e.target.value)}></input></td>
            </tr>
             <tr>
                <td><label>Confirm Password</label></td>
                <td><input type='password'onChange={(e)=>setcpassword(e.target.value)}></input></td>
            </tr>
         <tr>
            <td>
            <button className='ShopRegister'>Register</button>
            </td>
        </tr>
     
        </table>
        
      </form>
    </div>
  )
}

export default ShopRegister
