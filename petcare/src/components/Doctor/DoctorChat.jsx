import React from "react";
import "./DoctorChat.css";

function DoctorChat() {
  return (
    <div className="chat-layout">

      {/* LEFT – CHAT LIST */}
      <aside className="chat-sidebar">
        <div className="chat-header">
          <h3>Doctor Chat</h3>
        </div>

        <div className="chat-search">
          <input type="text" placeholder="Search doctor..." />
        </div>

        <div className="chat-list">
          <div className="chat-item active">
            <div className="avatar">DR</div>
            <div className="chat-info">
              <h4>Dr. Rahul</h4>
              <p>Can you review this case?</p>
            </div>
            <span className="time">10:42</span>
          </div>

          <div className="chat-item">
            <div className="avatar">DS</div>
            <div className="chat-info">
              <h4>Dr. Sneha</h4>
              <p>Thanks for the update</p>
            </div>
            <span className="time">Yesterday</span>
          </div>
        </div>
      </aside>

      {/* RIGHT – CHAT WINDOW */}
      <main className="chat-main">
        <div className="chat-top">
          <div className="avatar large">DR</div>
          <div>
            <h4>Dr. Rahul</h4>
            <span>Online</span>
          </div>
        </div>

        <div className="chat-messages">
          <div className="message received">
            Please review this anonymized case.
          </div>

          <div className="message sent">
            Sure, I’ll check and respond.
          </div>

          <div className="message received">
            Patient details removed as discussed.
          </div>
        </div>

        <div className="chat-input">
          <input type="text" placeholder="Type a message..." />
          <button>Send</button>
        </div>
      </main>

    </div>
  );
}

export default DoctorChat;
