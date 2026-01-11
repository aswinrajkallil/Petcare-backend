import React from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../Sidebar';
import './Doctor.css'; // Reuse existing styles

const DoctorLayout = () => {
    const doctorLinks = [
        { label: 'Home', path: '/DoctorHome' },
        { label: 'Community Feed', path: '/communityparticipation' },
        { label: 'Guidance', path: '/provideguidance' },
        { label: 'Provide Guidance', path: '/doctorGuidance' },
        { label: 'Doctor Chat', path: '/DoctorChat' },

        // { label: 'Case Discussions', path: '/case-discussions' },
        // { label: 'My Profile', path: '/profile' },
        // { label: 'Support', path: '/support' },
    ];

    return (
        <div className="doctor-dashboard" style={{ display: 'flex' }}>
            <Sidebar links={doctorLinks} role="Doctor" />
            <div className="doctor-main" style={{ flex: 1, backgroundColor: 'var(--bg-color)' }}>
                <Outlet />
            </div>
        </div>
    );
};

export default DoctorLayout;
