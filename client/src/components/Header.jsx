import React from 'react';
import { useNavigate } from 'react-router-dom';
import ImageLogo from './ImageLogo';

const Header = () => {
  const navigate = useNavigate();
  
  return (
    <header className="header">
      <div className="header-top">
        <div className="container">
          <div className="header-top-content">
            <div className="contact-info">
              <span>📞 +91 98765 43210</span>
              <span>📱 +91 98765 43211</span>
              <span>🕒 Mon-Sat 8:00 to 20:00</span>
            </div>
            <div className="login-section">
              <button 
                onClick={() => navigate("/login")}
                style={{ background: "none", border: "none", color: "white", cursor: "pointer", textDecoration: "underline" }}
              >
                Login
              </button>
              <span>|</span>
              <button 
                onClick={() => navigate("/signup")}
                style={{ background: "none", border: "none", color: "white", cursor: "pointer", textDecoration: "underline" }}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      
      <div className="header-main">
        <div className="container">
          <div className="header-content">
            <ImageLogo size="medium" showText={true} />
            
            <nav>
              <ul className="nav-menu">
                <li><button onClick={() => navigate("/")} style={{ background: "none", border: "none", color: "#333", cursor: "pointer" }}>Home</button></li>
                <li><a href="#about">About us</a></li>
                <li><a href="#gallery">Gallery</a></li>
                <li><a href="#notice">Notice</a></li>
                <li><a href="#tuition-classes">Tuition Classes</a></li>
                <li><a href="#contact">Contact Us</a></li>
              </ul>
            </nav>
            
            <button className="enroll-btn" onClick={() => navigate("/signup")}>Enroll Now</button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
