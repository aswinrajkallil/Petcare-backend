import React, { useEffect, useState } from 'react'
import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { Link, useNavigate } from 'react-router-dom';
import api from '../api';


function ManageProducts() {
  const navigate=useNavigate()
  const[products,setProducts]=useState([]);
  const shopLId=localStorage.getItem("userLoginId")

  const fetchProduct=async(req,res)=>{
    try{
      const res=await api.get(`/shop/manageproducts/${shopLId}`)
      console.log(res);
      setProducts(res.data.products)

    } 
    catch(e){
      console.log(e);
    }

  }
useEffect(()=>{fetchProduct()},[])

const handledelete=async(id)=>{
  try{
    const res=await api.delete(`/shop/deleteproduct/${id}`)
    console.log(res);
    alert("deleted successfully")
    fetchProduct()
    
  }
  catch(e){
    console.log(e);
    
  }
}


  return (
    <div> 
      <h1>Manage Products</h1>
      <div className='custom-table-container'>
      <Table striped bordered hover size="sm">
      <thead>
        <tr>
          <th>NO</th>
          <th>Product Image</th>
          <th>Product Name</th>
          <th>Description</th>
          <th>Price</th>
          <th>Quantity</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
                {products.map((p,i)=>

        <tr key={i}>
          <td>{i+1}</td>
          <td><img src={`http://localhost:8000/${p.image}` } className="product-img" alt={p.productname}></img></td>
          <td>{p.productname}</td>
          <td>{p. description}</td>
          <td>{p.price}</td>
          <td>{p.quantity}</td>
          <td><Button variant="primary" onClick={()=>navigate(`/Editproduct/${p._id}`)}>EDIT</Button><Button variant="danger" className="ms-2" onClick={()=>handledelete(p._id)}>DELETE</Button></td>
        </tr>
             )}

      </tbody>
    </Table>
    </div>
    </div>
  )
}

export default ManageProducts
