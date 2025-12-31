import React from 'react'
import Table from 'react-bootstrap/Table';
import { Link } from 'react-router-dom';
function CustomerSupport() {
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
      <div className='custom-table-container'>
       <h1>View complaint</h1>
       <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>NO</th>
          <th>customer name</th>
          <th>Product Name</th>
          <th>Complaint</th>
          <th>email</th>
          <th>Phone number</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          
        </tr>
     
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default CustomerSupport
