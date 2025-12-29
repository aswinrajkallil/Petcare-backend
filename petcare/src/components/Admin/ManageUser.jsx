import React from 'react'
import Table from 'react-bootstrap/Table';
import './Admin.css' 
function ManageUser() {
  return (
    <div>
      <h1>User Controls</h1>
      <div className='custom-table-container'>
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>#</th>
              <th>Name</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Email ID</th>
              <th>Age</th>
              <th>Block / Unblock</th>
              
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
                <button className="btn btn-danger btn-sm ms-2 button ">Block</button>
                <button className="btn btn-success btn-sm ms-2 button ">Unblock</button>
              </td>
            </tr>
            <tr>
              <td>2</td>
              <td>jar</td>
              <td>9876543210</td>
              <td>Male</td>
              <td>jar@gmail.com</td>
              <td>20</td>
              <td>
                <button className="btn btn-danger btn-sm ms-2 button">Block</button>
                <button className="btn btn-success btn-sm ms-2 button">Unblock</button>
              </td>
            </tr>
          </tbody>
        </Table>
      </div>
    </div>
  )
}

export default ManageUser
