import React from 'react'
import Table from 'react-bootstrap/Table';


function ProvideGuidance() {
  return (
    <div>
      <h1>Guidance</h1>
       <div className='custom-table-container'>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>#</th>
          <th>Doctor Name</th>
          <th>Guidance</th>
          <th>Video</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>Mark</td>
          <td>Otto</td>
          <td>@mdo</td>
        </tr>
        <tr>
          <td>2</td>
          <td>Jacob</td>
          <td>Thornton</td>
          <td>@fat</td>
        </tr>
        <tr>
          <td>3</td>
          <td >Larry</td>
          <td>bird</td>
          <td>@twitter</td>
        </tr>
      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default ProvideGuidance
