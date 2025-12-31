import React from 'react';
import '../Dashboard.css'; // Shared dashboard styles

const DoctorDashboard = () => {
    return (
        <div className="dashboard-container">
            <div className="dashboard-header">
                <h1>Hello, Doctor!</h1>
                <p>Thank you for contributing to the community.</p>
            </div>

            <div className="dashboard-stats">
                <div className="stat-card">
                    <h3>Upcoming Appointments</h3>
                    <p className="stat-value">3</p>
                </div>
                <div className="stat-card">
                    <h3>Patient Queries</h3>
                    <p className="stat-value highlight">8</p>
                </div>
                <div className="stat-card">
                    <h3>Community Posts</h3>
                    <p className="stat-value">24</p>
                </div>
            </div>
        </div>
    );
};

export default DoctorDashboard;
