import { Mail, Phone, MapPin, Globe } from "lucide-react";
import "./footer.css";

const Footer = () => {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-logo-div">
            <img src="./fin-logo.svg" className="footer-logo" alt="logo" />
            <div className="footer-title">Finance</div>
          </div>
          <p>Your trusted platform for financial insights and market analysis</p>
        </div>

        <div className="footer-section">
          <h3>Contact Us</h3>
          <div className="footer-contact-item">
            <Phone size={16} />
            <span>+1 234 567 890</span>
          </div>
          <div className="footer-contact-item">
            <Mail size={16} />
            <span>support@finance.com</span>
          </div>
          <div className="footer-contact-item">
            <MapPin size={16} />
            <span>123 Finance Street, Matunga</span>
          </div>
          <div className="footer-contact-item">
            <Globe size={16} />
            <span>www.finance.com</span>
          </div>
        </div>

        <div className="footer-section">
          <h3>Quick Links</h3>
          <a href="#" className="footer-link">About Us</a>
          <a href="#" className="footer-link">Services</a>
          <a href="#" className="footer-link">Privacy Policy</a>
          <a href="#" className="footer-link">Terms of Service</a>
        </div>
      </div>
      
      <div className="footer-bottom">
        <p>&copy; 2024 Finance. All rights reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
