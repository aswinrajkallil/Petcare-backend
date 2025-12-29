import React from 'react'
import Table from 'react-bootstrap/Table';
function ManageSeller() {
  return (
    <div>
      <h1>Seller Approvals</h1>
      <div className='custom-table-container'>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Seller Name</th>
            <th>Shop Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Address</th>
            <th>Products Category</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>jar</td>
            <td>myG</td>
            <td>7890654321</td>
            <td>myg@gmail.com</td>
            <td>Ramanattukara</td>
            <td>pet food</td>
            <td>
              <button className="btn btn-success btn-sm ms-2">Accept</button>
              <button className="btn btn-danger btn-sm ms-2">Reject</button>   
            </td>

            
          </tr>
        </thead>
        <tbody>
          
        </tbody>
      </Table>
      </div>
    </div>
  )
}

export default ManageSeller
