import React from 'react';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h4>Quick Contact</h4>
            <ul>
              <li>📞 +91 98765 43210</li>
              <li>📧 info@aiminstitute.com</li>
              <li>📍 Main Street, Education Hub, City- 123456</li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>AIM e-Learning</h4>
            <ul>
              <li><a href="#e-learning">Visit AIM e-Learning Website</a></li>
              <li><a href="#download-app">Download AIM e-Learning App</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>AIM e-Assessment</h4>
            <ul>
              <li><a href="#e-exams">Visit AIM e-Assessment Website</a></li>
              <li><a href="#download-exam-app">Download AIM e-Assessment App</a></li>
            </ul>
          </div>
          
          <div className="footer-section">
            <h4>Quick Links</h4>
            <ul>
              <li><a href="#primary-classes">Primary Classes (5th-7th)</a></li>
              <li><a href="#middle-school">Middle School (8th-10th)</a></li>
              <li><a href="#high-school">High School (11th-12th)</a></li>
              <li><a href="#enquiry">Have You Any Enquiry?</a></li>
            </ul>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>Copyright @ | www.aiminstitute.com | Email Us: info@aiminstitute.com</p>
          <p style={{ marginTop: '10px' }}>
            T&C | Privacy Policy | Cancellation Policy | Design & Developed by - TECHNOSOFT SOFTWARE SOLUTION
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
