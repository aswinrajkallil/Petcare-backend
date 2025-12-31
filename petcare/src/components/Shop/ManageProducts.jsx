import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function ManageProducts() {
  return (
    <div> 
      <h1>Manage Products</h1>
      <div className='custom-table-container'>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>NO</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td><Button variant="primary">EDIT</Button><Button variant="danger" className="ms-2">DELETE</Button></td>
        </tr>
     
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default ManageProducts
