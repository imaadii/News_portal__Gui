import React from "react";
import "./Gauri.css"; // Create a corresponding CSS file for styling

const Footer = () => {
  return (
    <footer className="footer">
      <div className="social-icons">
        <a href="#"><i className="fa fa-facebook"></i></a>
        <a href="#"><i className="fa fa-twitter"></i></a>
        <a href="#"><i className="fa fa-google"></i></a>
        <a href="#"><i className="fa fa-youtube"></i></a>
        <a href="#"><i className="fa fa-instagram"></i></a>
        <a href="#"><i className="fa fa-linkedin"></i></a>
        <a href="#"><i className="fa fa-vk"></i></a>
      </div>
      <div className="footer-sections">
        <div className="footer-column">
          <h4>DOOGEE</h4>
          <ul>
            <li>Teardown</li>
            <li>News</li>
            <li>Partners</li>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Terms of Use</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Social</h4>
          <ul>
            <li>Facebook</li>
            <li>Twitter</li>
            <li>Youtube</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Service</h4>
          <ul>
            <li>Compare</li>
            <li>Download</li>
            <li>Feedback</li>
            <li>Bug Report</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Activity</h4>
          <ul>
            <li>Influencers</li>
            <li>Affiliate</li>
            <li>Co-branding</li>
            <li>Honor</li>
            <li>Giveaway</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Newsletter Subscription</h4>
          <div className="newsletter">
            <input
              type="text"
              placeholder="Subscribe to our newsletter"
              className="newsletter-input"
            />
            <button className="newsletter-button">Subscribe</button>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>Copyright© 2018 DOOGEE. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
