import React from 'react';
import { Outlet } from 'react-router-dom';
import AdminNavbar from './Admin_nav';

function AdminLayout() {
    return (
        <>
            <AdminNavbar />
            <Outlet />
        </>
    );
}

export default AdminLayout;
