import React from 'react'
import './shop.css'   // <-- external CSS
import { Link } from 'react-router-dom'

function AddProducts() {
  return (
   
    <div className="addproduct-container">

      <aside className="sidebar">
        <h2 className="logo">My Shop</h2>
        <ul className="menu">
        
          <Link to={'/addproducts'}><li>Add Product</li></Link>
          <Link to ={'/manageproducts'}><li>Manage Products</li></Link>
          <Link to ={'/trackorder'}><li>Track Orders</li></Link>
          <Link to ={'/customersupport'}><li>Customer Support</li></Link> 
          <Link to ={'/'}><li>Log Out</li></Link>   

        </ul>
      </aside>
       
      <form className='addproduct'>
        <h1 className='producth1'>ADD PRODUCT</h1>
        <label>Product name</label>
        <input type='text' />

        <label>Description</label>
        <textarea className="desc-box"></textarea>

      
      <label>Price</label>
      <div className="price-row">
      <input type="number" step="1" className="price-input" />

      <select className="currency-select">
        <option value="INR">INR ₹</option>
        <option value="USD">USD $</option>
        <option value="EUR">EUR €</option>
        <option value="JPY">JPY ¥</option>
        <option value="AED">AED د.إ</option>
      </select>
    </div>
    <label>Quantity</label>
<div className="quantity-box">
  <input type="number" placeholder="Enter quantity" className="qty-input" />

  <select className="qty-unit">
    <option value="">Unit</option>

    {/* Weight */}
    <option value="kg">kg</option>
    <option value="g">g</option>
    <option value="mg">mg</option>
    

    {/* Volume */}
    <option value="l">Litre (L)</option>
    <option value="ml">Millilitre (mL)</option>

    {/* Length */}
    <option value="m">Meter (m)</option>
    <option value="cm">Centimeter (cm)</option>

    {/* Count */}
    <option value="pcs">pcs</option>
    <option value="box">box</option>
    <option value="pack">pack</option>
  </select>
</div>


        



        <button type="submit">ADD</button>
      </form>
    </div>
  )
}

export default AddProducts
