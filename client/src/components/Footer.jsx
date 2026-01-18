import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white pt-16 pb-8">
      <div className="max-w-[1200px] mx-auto px-5">

        {/* Top Footer Content */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

          {/* Quick Contact */}
          <div>
            <h4 className="text-yellow-400 text-xl font-semibold mb-5">
              Quick Contact
            </h4>
            <ul className="space-y-3 text-gray-300">
              <li>📞 +91 98765 43210</li>
              <li>📧 info@aiminstitute.com</li>
              <li>📍 Main Street, Education Hub, City- 123456</li>
            </ul>
          </div>

          {/* AIM e-Learning */}
          <div>
            <h4 className="text-yellow-400 text-xl font-semibold mb-5">
              AIM e-Learning
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#e-learning"
                  className="text-gray-300 hover:text-white transition"
                >
                  Visit AIM e-Learning Website
                </a>
              </li>
              <li>
                <a
                  href="#download-app"
                  className="text-gray-300 hover:text-white transition"
                >
                  Download AIM e-Learning App
                </a>
              </li>
            </ul>
          </div>

          {/* AIM e-Assessment */}
          <div>
            <h4 className="text-yellow-400 text-xl font-semibold mb-5">
              AIM e-Assessment
            </h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="#e-exams"
                  className="text-gray-300 hover:text-white transition"
                >
                  Visit AIM e-Assessment Website
                </a>
              </li>
              <li>
                <a
                  href="#download-exam-app"
                  className="text-gray-300 hover:text-white transition"
                >
                  Download AIM e-Assessment App
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-yellow-400 text-xl font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-3">
              <li><a href="#primary-classes" className="footer-link">Primary Classes (5th-7th)</a></li>
              <li><a href="#middle-school" className="footer-link">Middle School (8th-10th)</a></li>
              <li><a href="#high-school" className="footer-link">High School (11th-12th)</a></li>
              <li><a href="#enquiry" className="footer-link">Have You Any Enquiry?</a></li>
            </ul>
          </div>

        </div>

        {/* Bottom Footer */}
        <div className="border-t border-gray-700 pt-8 text-center text-gray-400 text-sm">
          <p>
            Copyright © | www.aiminstitute.com | Email Us: info@aiminstitute.com
          </p>
          <p className="mt-3">
            T&amp;C | Privacy Policy | Cancellation Policy | Design &amp; Developed by –
            <span className="text-white font-medium"> TECHNOSOFT SOFTWARE SOLUTION</span>
          </p>
        </div>

      </div>
    </footer>
  );
};

export default Footer;
