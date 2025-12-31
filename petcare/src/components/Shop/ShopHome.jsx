import React from "react";
import "./ShopHome.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

const ShopHome = () => {
  const shopLinks = [
    { label: 'Dashboard', path: '/shophome' },
    { label: 'Add Product', path: '/addproducts' },
    { label: 'Manage Products', path: '/manageproducts' },
    { label: 'Track Orders', path: '/trackorder' },
    { label: 'Customer Support', path: '/customersupport' },
  ];

  return (
    <div className="dashboard" style={{ display: 'flex' }}>
      <Sidebar links={shopLinks} role="Shop" />

      {/* Main Content */}
      <main className="main-content" style={{ flex: 1, backgroundColor: 'var(--bg-color)' }}>
        <h1>Shop Dashboard</h1>

        <div className="card-container">
          <Link to={'/addproducts'}><button className="card">➕ Add Product</button></Link>
          <Link to={'/manageproducts'}><button className="card">📦 Manage Products</button></Link>
          <Link to={'/trackorder'}><button className="card">🚚 Track Orders</button></Link>
          <Link to={'/customersupport'}> <button className="card">💬 Customer Support</button></Link>
        </div>
      </main>
    </div>
  );
};

export default ShopHome;


