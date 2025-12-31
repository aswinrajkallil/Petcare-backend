import React from "react";
import "./Doctor.css";
import { Link } from "react-router-dom";

function DoctorHome() {
  return (
    <div className="doctor-dashboard">

      {/* Sidebar */}
      <aside className="doctor-sidebar">
        <h2 className="logo">Doctor Hub</h2>
        <ul>
          <li>Community Feed</li>
          <li>Ask Guidance</li>
          <li>Doctor Chat</li>
          <li>Case Discussions</li>
          <li>My Profile</li>
          <li>Support</li>
        </ul>
      </aside>

      {/* Main Area */}
      <main className="doctor-main">
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
            <Link to ={'/provideguidance'}><button>Ask</button></Link>
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
