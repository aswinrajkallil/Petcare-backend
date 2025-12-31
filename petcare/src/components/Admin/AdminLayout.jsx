import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './Admin.css';

function AdminLayout() {
    const adminLinks = [
        { label: 'Home', path: '/admin-dashboard' },
        { label: 'Users', path: '/viewuser' },
        { label: 'Doctors', path: '/viewdoctor' },
        { label: 'Sellers', path: '/viewseller' },
        { label: 'Shops', path: '/viewshop' },
        { label: 'Complaints', path: '/viewcomplaint' },
    ];

    return (
        <div className="admin-layout" style={{ display: 'flex' }}>
            <Sidebar links={adminLinks} role="Admin" />
            <div className="admin-content" style={{ flex: 1, backgroundColor: 'var(--bg-color)' }}>
                <Outlet />
            </div>
        </div>
    );
}

export default AdminLayout;
