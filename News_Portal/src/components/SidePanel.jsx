// SidePanel.js
import React, { useState } from "react";

const SidePanel = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage side panel

  const toggleNav = () => setIsOpen((prev) => !prev);

  return (
    <div>
      {/* Sidepanel */}
        <div
          className={`sidepanel ${isOpen ? "open" : ""}`} // Add class conditionally
        >
          <button className="closebtn" onClick={toggleNav}>
            ×
          </button>
          <a href="/category">Sports</a>
          <a href="#">Technology</a>
          <a href="#">Blogs</a>
          <a href="#">Contact</a>
          <a href="#">Feedback</a>
        </div>

      {/* Toggle Button */}
      <button className="openbtn" onClick={toggleNav}>
        ☰
      </button>
    </div>
  );
};

export default SidePanel;
