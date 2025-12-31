import React from 'react';
import { NavLink, useNavigate } from 'react-router-dom';
import Logo from './Logo';
import './Sidebar.css';

const Sidebar = ({ links, role }) => {
    const navigate = useNavigate();

    const handleLogout = () => {
        // Clear any auth tokens/state here if needed
        localStorage.removeItem("userLoginId");
        navigate('/');
    };

    return (
        <div className="sidebar">
            <div className="sidebar-header">
                <Logo width={40} height={40} className="sidebar-logo" />
                <h2 className="sidebar-title">{role} Panel</h2>
            </div>

            <ul className="sidebar-menu">
                {links.map((link, index) => (
                    <li key={index}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) => isActive ? "sidebar-link active" : "sidebar-link"}
                        >
                            {link.label}
                        </NavLink>
                    </li>
                ))}
            </ul>

            <div className="sidebar-footer">
                <button onClick={handleLogout} className="logout-button">
                    Log Out
                </button>
            </div>
        </div>
    );
};

export default Sidebar;
