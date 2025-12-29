import React from 'react'
import Table from 'react-bootstrap/Table';
function CustomerSupport() {
  return (
    <div>
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
