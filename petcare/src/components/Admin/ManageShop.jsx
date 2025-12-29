import React from 'react'
import Table from 'react-bootstrap/Table';



function ManageShop() {
  return (
    <div>
      <h1>Shop Approvals</h1>
      <div className='custom-table-container'>
     <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Shop ID</th>
          <th>Shop Name</th>
          <th>Owner (Seller)</th>
          <th>Phone</th>
          <th>City</th>
          <th>Action</th>
        </tr>
      </thead>

      <tbody>
        <tr>
          <td>1</td>
          <td>John</td>
          <td>9876543210</td>
          <td>Male</td>
          <td>john@gmail.com</td>
          <td>24</td>
          <td>
              <button className="btn btn-success btn-sm ms-2">Accept</button>
              <button className="btn btn-danger btn-sm ms-2">Reject</button>           
          </td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default ManageShop
