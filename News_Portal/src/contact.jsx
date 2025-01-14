import React, { useState } from "react";
// import axios from "axios"
import './index.css'
import 'bootstrap-icons/font/bootstrap-icons.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    contact: "",
    message: "",
  });

  const [statusMessage, setStatusMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatusMessage("");
    setErrorMessage("");

    try {
      const response = await fetch("https://news-portal-suby.onrender.com/contactUs/save", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatusMessage("Your message has been successfully sent!");
        setFormData({
          name: "",
          email: "",
          contact: "",
          message: "",
        });
      } else {
        const errorData = await response.json();
        setErrorMessage(errorData.message || "Something went wrong. Please try again later.");
      }
    } catch (error) {
      setErrorMessage("Failed to send message. Please try again later.");
    }
  };

  return (
    <div className="container" style={{ fontFamily: "Arial, sans-serif", padding: "20px" }}>
      
      <div className="header" style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1>Contact Us</h1>
        <p>Please feel free to contact us for any inquiries or feedback.</p>
      </div>

      {/* Contact Section */}
      <div className="contact-section" style={{ display: "flex", gap: "20px", flexWrap: "wrap" }}>
        {/* Contact Info */}
        <div className="contact-info" style={{ flex: "1", minWidth: "300px" }}>
          <h2>Contact Info</h2>
          <ul style={{ listStyle: "none", padding: 0, fontSize: "16px" }}>
            <li>
              <i className="bi bi-phone"></i> <span>7879863767</span>
            </li>
            <li>
              <i className="bi bi-envelope"></i> <span>sharmagauri2220022@gmail.com</span>
            </li>
            <li>
              <i className="bi bi-geo-alt"></i> <span>Your address here</span>
            </li>
          </ul>
        </div>

        {/* Contact Form */}
        <div
          className="contact-form"
          style={{
            flex: "1",
            minWidth: "300px",
            padding: "20px",
            border: "1px solid #ccc",
            borderRadius: "8px",
            boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
          }}
        >
          <h2>Send Us a Message</h2>
          <form onSubmit={handleSubmit}>
            <label htmlFor="name" style={{ display: "block", marginBottom: "5px" }}>
              Your Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px" }}
            />

            <label htmlFor="email" style={{ display: "block", marginBottom: "5px" }}>
              Your Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px" }}
            />

            <label htmlFor="contact" style={{ display: "block", marginBottom: "5px" }}>
              Contact Number
            </label>
            <input
              type="number"
              id="contact"
              name="contact"
              value={formData.contact}
              onChange={handleChange}
              required
              style={{ width: "100%", padding: "10px", marginBottom: "15px", borderRadius: "5px" }}
            />

            <label htmlFor="remarks" style={{ display: "block", marginBottom: "5px" }}>
              Remarks
            </label>
            <textarea
              id="remarks"
              name="remarks"
              value={formData.message}
              onChange={handleChange}
             
              style={{
                width: "100%",
                padding: "10px",
                marginBottom: "15px",
                borderRadius: "5px",
                height: "100px",
              }}
            ></textarea>

            <button
              type="submit"
              style={{
                backgroundColor: "#007BFF",
                color: "#fff",
                padding: "10px 20px",
                border: "none",
                borderRadius: "5px",
                cursor: "pointer",
              }}
            >
              Submit
            </button>
          </form>
          {statusMessage && <div style={{ color: "green", marginTop: "15px" }}>{statusMessage}</div>}
          {errorMessage && <div style={{ color: "red", marginTop: "15px" }}>{errorMessage}</div>}
        </div>
      </div>

      {/* Map Section */}
      <div className="map-container" style={{ marginTop: "30px" }}>
        <h3 style={{ textAlign: "center" }}>Find Us Here:</h3>
        <iframe
          src=""
          width="100%"
          height="400"
          style={{ border: "0", borderRadius: "8px" }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
      </div>

      {/* Social Media Links */}
      <div className="social-media">
        <a href="#" >
          <i className="bi bi-facebook"></i>
        </a>
        <a href="#" >
          <i className="bi bi-twitter"></i>
        </a>
        <a href="#" >
          <i className="bi bi-instagram"></i>
        </a>
        <a href="#" >
          <i className="bi bi-youtube"></i>
        </a>
        <a href="#" >
          <i className="bi bi-linkedin"></i>
        </a>
      </div>
      
    </div>
  );
};

export default Contact;
