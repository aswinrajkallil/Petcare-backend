import React from "react";
import "./ShopHome.css";
import { Link } from "react-router-dom";

const ShopHome = () => {
  return (
    <div className="dashboard">
      {/* Sidebar */}
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

      {/* Main Content */}
      <main className="main-content">
        <h1>Shop Dashboard</h1>

        <div className="card-container">
         <Link to={'/addproducts'}><button className="card">➕ Add Product</button></Link>
          <Link to ={'/manageproducts'}><button className="card">📦 Manage Products</button></Link>
          <Link to ={'/trackorder'}><button className="card">🚚 Track Orders</button></Link>
         <Link to ={'/customersupport'}> <button className="card">💬 Customer Support</button></Link>
        </div>
      </main>
    </div>
  );
};

export default ShopHome;


