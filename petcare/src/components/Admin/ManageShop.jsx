import React from 'react'
import { useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import api from '../api';
import { useState } from 'react';



function ManageShop() {
    const [shops,setShops] = useState([]);

    const fetchShop=async(req,res)=>{
    try{
      const res=await api.get("/admin/viewallShop")
      // console.log(res)
      setShops(res.data.shops)
    }
    catch(e){
      console.log(e);
      
    }
  }
  useEffect(()=>{fetchShop()},[])
  console.log(shops);
  
  return (
    <div>
      <h1>Shop Approvals</h1>
      <div className='custom-table-container'>
     <Table striped bordered hover size="sm">
      <thead>
          <tr>
          <th>No</th>
          <th>shop name</th>
          <th>Owner (Seller)</th>
          <th>Phone</th>
          <th>City</th>
          <th>Action</th>
        </tr>

      </thead>

      <tbody>
        {shops.map((shop,index)=>

        <tr  key={shop._id}>
          <td>{index+ 1}</td>
          <td>{shop.shopname}</td>
          <td>{shop.owner}</td>
          <td>{shop.phone}</td>
          <td>{shop.city}</td>
          <td>
              <button className="btn btn-success btn-sm ms-2">Accept</button>
              <button className="btn btn-danger btn-sm ms-2">Reject</button>           
          </td>
        </tr>
                )}

      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default ManageShop
