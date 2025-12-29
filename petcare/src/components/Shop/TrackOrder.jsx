import React from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';

function TrackOrder() {
  return (
    <div className='container'>
      <h1 className='orderh1'>ORDER</h1>
      <Table striped bordered hover size="sm" className='TrackOrder'>
      <thead>
        <tr>
          <th>#</th>
          <th>Product Name</th>
          <th>Customer Name</th>
          <th>Delivery Date</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>uahs</td>
          <td>ajsh</td>
          <td>kjshx</td>
          <td><Button  variant="success">ACCEPT</Button><Button  variant="danger" className="ms-2" >REJECT</Button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>uahs</td>
          <td>ajsh</td>
          <td>kjshx</td>
          <td><Button  variant="success">ACCEPT</Button><Button  variant="danger" className="ms-2" >REJECT</Button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>uahs</td>
          <td>ajsh</td>
          <td>kjshx</td>
          <td><Button  variant="success">ACCEPT</Button><Button  variant="danger" className="ms-2" >REJECT</Button></td>
        </tr>
        <tr>
          <td>1</td>
          <td>uahs</td>
          <td>ajsh</td>
          <td>kjshx</td>
          <td><Button  variant="success">ACCEPT</Button><Button  variant="danger" className="ms-2" >REJECT</Button></td>
        </tr>
     
      </tbody>
    </Table>
    </div>
  )
}

export default TrackOrder
