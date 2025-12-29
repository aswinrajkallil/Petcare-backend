import React from 'react'
import Table from 'react-bootstrap/Table';
function ViewComplaint() {
  return (
    <div>
      <h1>New Tickets</h1>
      <div className='custom-table-container'>
        <Table striped bordered hover>
        <thead>
          <tr>
            <th>#</th>
            <th>Name</th>
            <th>Phone</th>
            <th>Email</th>
            <th>Products Category</th>
            <th>description</th>
            <th>Action</th>
          </tr>
          <tr>
            <td>1</td>
            <td>John Doe</td>
            <td>9876543210</td>
            <td>john@example.com</td>
            <td>Pet Food</td>
            <td>Received damaged product</td>
            <td>
                <button className="btn btn-success btn-sm ms-2">Resolve</button>
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

export default ViewComplaint
