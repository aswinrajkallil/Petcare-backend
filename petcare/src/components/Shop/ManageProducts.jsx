import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';


function ManageProducts() {
  return (
    <div> 
            <aside className="sidebar">
        <h2 className="logo">My Shop</h2>
        <ul className="menu">
        
          <Link to={'/addproducts'}><li>Add Product</li></Link>
          <Link to ={'/manageproducts'}><li>Manage Products</li></Link>
          <Link to ={'/trackorder'}><li>Track Orders</li></Link>
          <Link to ={'/customersupport'}><li>Customer Support</li></Link> 
          <Link to ={'/'}><li>Log Out</li></Link>   

        </ul>
      </aside>
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
