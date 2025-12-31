import React from 'react';
 import '../Dashboard.css';

const AdminDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Welcome Back, Admin!</h1>
                <p>Here's what's happening in your system today.</p>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <h3>Total Users</h3>
                    <p className="stat-value">1,234</p>
                </div>
                <div className="stat-card">
                    <h3>Active Doctors</h3>
                    <p className="stat-value">45</p>
                </div>
                <div className="stat-card">
                    <h3>Verified Shops</h3>
                    <p className="stat-value">89</p>
                </div>
                <div className="stat-card">
                    <h3>Pending Complaints</h3>
                    <p className="stat-value warning">12</p>
                </div>
            </div>
        </div>
    );
};

export default AdminDashboard;
