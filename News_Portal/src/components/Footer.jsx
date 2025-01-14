import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <>
      <footer className="footer">
        <div className="footer-content">
          <h4>Top News</h4>
          <ul>
            <li><a href="#">Breaking News Hindi</a></li>
            <li><a href="#">Top News Hindi</a></li>
            <li><a href="#">Latest News Hindi</a></li>
            <li><a href="#">Stories and News</a></li>
            <li><a href="#">Social Media News</a></li>
            <li><a href="#">Top Profile</a></li>
            <li><a href="#">Top Literature News</a></li>
          </ul>
        </div>

        <div className="footer-content">
          <h4>POPULAR CATEGORIES</h4>
          <ul>
            <li><a href="#">Sports News</a></li>
            <li><a href="#">Business News</a></li>
            <li><a href="#">India News</a></li>
            <li><a href="#">World News</a></li>
            <li><a href="#">Technolgy News</a></li>
            <li><a href="#">Health + Tips</a></li>
          </ul>
        </div>

        <div className="footer-content">
          <h4>Social Impact</h4>
          <ul>
            <li><a href="#">People</a></li>
            <li><a href="#">Planet</a></li>
            <li><a href="#">Environmental and Social Impact Reporting</a></li>
          </ul>
        </div>

        <div className="footer-content">
          <h4>For Business Partners</h4>
          <ul>
            <li><a href="#">Landlord Support Center</a></li>
            <li><a href="#">Suppliers</a></li>
            <li><a href="#">Corporate Gift Card Sales</a></li>
            <li><a href="#">Office and Foodservice Coffee</a></li>
          </ul>
        </div>

        <div className="footer-content">
          <h4>Entertainment</h4>
          <ul>
            <li><a href="#">ETIMES</a></li>
            <li><a href="#">BOLLYWOOD NEWS</a></li>
            <li><a href="#">TV</a></li>
            <li><a href="#">LIFESTYLES</a></li>
          </ul>
        </div>
      </footer>

      <div className="logo-icon">
        <i className="bx bxl-spotify"></i>
        <i className="bx bxl-facebook-circle"></i>
        <i className="bx bxl-pinterest-alt"></i>
        <i className="bx bxl-instagram"></i>
        <i className="bx bxl-youtube"></i>
        <i className="bx bxl-twitter"></i>
      </div>

      <footer className="privacy-footer">
        <div className="footer-content">
          <h4>Privacy Note</h4>
          <ul>
            <li><a href="#">Consumer Health Privacy Notice</a></li>
            <li><a href="#">Terms of Use</a></li>
            <li><a href="#">Do Not Share My Personal Information</a></li>
            <li><a href="#">CA Supply Chain Act</a></li>
            <li><a href="#">Accessibility</a></li>
            <li><a href="#">Cookie Preferences</a></li>
            <li><a href="#">© 2024 Starbucks Coffee Company. All rights reserved.</a></li>
          </ul>
        </div>
      </footer>
    </>
  );
};

export default Footer;