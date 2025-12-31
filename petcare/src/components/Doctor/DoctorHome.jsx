import React from "react";
import "./Doctor.css";
import { Link } from "react-router-dom";
import Sidebar from "../Sidebar";

function DoctorHome() {
  const doctorLinks = [
    { label: 'Dashboard', path: '/DoctorHome' },
    { label: 'Community Feed', path: '/communityparticipation' },
    { label: 'Ask Guidance', path: '/provideguidance' },
    { label: 'Doctor Chat', path: '/DoctorChat' },
    { label: 'Case Discussions', path: '/case-discussions' }, // Assuming route exists or placeholder
    { label: 'My Profile', path: '/profile' }, // Assuming route exists or placeholder
    { label: 'Support', path: '/support' }, // Assuming route exists or placeholder
  ];

  return (
    <div className="doctor-dashboard" style={{ display: 'flex' }}>
      <Sidebar links={doctorLinks} role="Doctor" />

      {/* Main Area */}
      <main className="doctor-main" style={{ flex: 1, backgroundColor: 'var(--bg-color)' }}>
        <h1>Welcome, Doctor</h1>
        <p className="subtitle">
          Connect with verified doctors • Share knowledge • Get guidance
        </p>

        <div className="card-grid">
          <div className="card">
            <h3>🗣 Community Feed</h3>
            <p>Join discussions with doctors across specializations.</p>
            <Link to={'/communityparticipation'}><button>Open</button></Link>
          </div>

          <div className="card">
            <h3>📘 Ask Guidance</h3>
            <p>Get expert advice from senior doctors.</p>
            <Link to={'/provideguidance'}><button>Ask</button></Link>
          </div>

          <div className="card">
            <h3>💬 Doctor Chat</h3>
            <p>Secure 1-to-1 chat with verified doctors.</p>
            <Link to={'/DoctorChat'}><button>Chat</button></Link>
          </div>

          <div className="card">
            <h3>🧠 Case Discussions</h3>
            <p>Discuss anonymized medical cases safely.</p>
            <button>View</button>
          </div>
        </div>
      </main>
    </div>
  );
}

export default DoctorHome;
