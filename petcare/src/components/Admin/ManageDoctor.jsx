import React from 'react'
import Table from 'react-bootstrap/Table';
import './Admin.css'
import { Link } from 'react-router-dom';
function ManageDoctor() {
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
          </tr>
          <tr>
          <td>1</td>
          <td>Dr. John</td>
          <td>john@example.com</td>
          <td>9876543210</td>
          <td>BVSc</td>
          <td>5</td>
          <td>VET12345</td>
          <td>Pet Care Clinic</td>
          <td>Kozhikode</td>
        </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
    </div>
    </div>
  )
}

export default ManageDoctor
