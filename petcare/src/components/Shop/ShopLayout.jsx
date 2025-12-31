import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './ShopHome.css'; // Reuse existing styles or create new ones

const ShopLayout = () => {
    const shopLinks = [
        { label: 'Home', path: '/shophome' },
        { label: 'Add Product', path: '/addproducts' },
        { label: 'Manage Products', path: '/manageproducts' },
        { label: 'Track Orders', path: '/trackorder' },
        { label: 'Customer Support', path: '/customersupport' },
    ];

    return (
        <div className="dashboard" style={{ display: 'flex' }}>
            <Sidebar links={shopLinks} role="Shop" />
            <div className="main-content" style={{ flex: 1, backgroundColor: 'var(--bg-color)' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default ShopLayout;
