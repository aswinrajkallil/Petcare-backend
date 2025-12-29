import React from 'react'
import Table from 'react-bootstrap/Table';
function CommunityParticipation() {
  return (
    <div>

       <div className='custom-table-container'>
        <h1>Community</h1>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Post</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          
        </tr>
        <tr>
          <td>3</td>
          <td colSpan={2}>Larry the Bird</td>
         
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default CommunityParticipation
