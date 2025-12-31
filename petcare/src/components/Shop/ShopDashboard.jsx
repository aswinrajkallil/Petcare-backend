import React from 'react';
import '../Dashboard.css'; // Shared dashboard styles

const ShopDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Welcome to Your Shop!</h1>
                <p>Manage your products and track your orders efficiently.</p>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <h3>Total Products</h3>
                    <p className="stat-value">156</p>
                </div>
                <div className="stat-card">
                    <h3>New Orders</h3>
                    <p className="stat-value highlight">5</p>
                </div>
                <div className="stat-card">
                    <h3>Total Sales</h3>
                    <p className="stat-value">$12,450</p>
                </div>
            </div>
        </div>
    );
};

export default ShopDashboard;
