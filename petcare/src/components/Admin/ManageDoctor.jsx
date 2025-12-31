import React from 'react'
import Table from 'react-bootstrap/Table';
import './Admin.css'
import { Link } from 'react-router-dom';
import { useState } from 'react';
import api from '../api';
import { useEffect } from 'react';
function ManageDoctor() {
  const[doctor,setDoctor]=useState([]);
  const fetchDoctor=async(req,res)=>{
    try{
      const res=await api.get("/admin/viewalldoctors")
      // console.log(res)
      setDoctor(res.data.doctor)
    }
    catch(e){
      console.log(e);
    }
  }
   useEffect(()=>{fetchDoctor()},[])
    // console.log(doctor);

    const handleDelete = async(id)=>{
      // console.log(id);
      try{
        const  response = await api.delete(`/admin/delete/doctor/${id}`)
        console.log(response);
        alert(response.data.message ||"Delete successfully")
        fetchDoctor()
        
      }
      catch(e){
          console.error(error);
          alert("Delete failed");
      }
      
    }


  return (
    <div>
      <h1>Doctor<span className='second'> Info</span></h1>
      <div className='lftDoctor'>
        <Link to={'/registerdoctor'}><button>Register</button></Link>
      </div>
      <div className='custom-table-container'>
        <Table striped bordered hover>
        <thead>  
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Qualification</th>
            <th>Experience</th>
            <th>License No</th>
            <th>Clinic Name</th>
            <th>Clinic Address</th>
            <th>Image</th>
            <th>Action</th>
          </tr>

          {doctor.map((d,i)=>
          <tr key={d._id}>
          <td>{i+1}</td>
          <td>{d.name}</td>
          <td>{d.email}</td>
          <td>{d.phone}</td>
          <td>{d.qualification}</td>
          <td>{d.experience}</td>
          <td>{d.licenseno}</td>
          <td>{d.clinicname}</td>
          <td>{d.clinicaddress}</td>
<td>
  <img
  src={`http://localhost:8000/${d.image.replace(/\\/g, "/")}`}
  alt="doctor"
  style={{width:"50px"}}
/>
</td>
          <td><button className="btn btn-danger btn-sm ms-2" onClick={()=>handleDelete(d._id)}>Delete</button></td>
          
          
        </tr>
        )}
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </div>
    </div>
  )
}

export default ManageDoctor
