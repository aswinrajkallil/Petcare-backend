import React from "react";
import { Link } from "react-router-dom";
import Logo from "../Logo";
import './Admin.css';

function AdminNavbar() {
  return (
    <nav className="admin-nav">
      <div className="admin-logo">
        <Logo width={30} height={30} className="nav-logo-icon" />
        Admin Panel
      </div>

      <ul className="admin-links">
        <li><Link to="/viewuser">Users</Link></li>
        <li><Link to="/viewdoctor">Doctors</Link></li>
        <li><Link to="/viewseller">Sellers</Link></li>
        <li><Link to="/viewshop">Shops</Link></li>
        <li><Link to="/viewcomplaint">Complaints</Link></li>
        <li><Link to="/">Log out</Link></li>
      </ul>
    </nav>
  );
}

export default AdminNavbar;
