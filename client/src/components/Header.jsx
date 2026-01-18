import React from "react";
import { useNavigate } from "react-router-dom";
import ImageLogo from "./ImageLogo";

const Header = () => {
  const navigate = useNavigate();

  return (
    <header className="sticky top-0 z-[1000] bg-white shadow-md">
      
      {/* Top Bar */}
      <div className="bg-blue-900 text-white text-sm">
        <div className="max-w-[1200px] mx-auto px-5 py-2 flex flex-col md:flex-row md:justify-between md:items-center gap-2">
          
          <div className="flex flex-wrap gap-5">
            <span>📞 +91 98765 43210</span>
            <span>📱 +91 98765 43211</span>
            <span>🕒 Mon-Sat 8:00 to 20:00</span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => navigate("/login")}
              className="underline hover:text-gray-200"
            >
              Login
            </button>
            <span>|</span>
            <button
              onClick={() => navigate("/signup")}
              className="underline hover:text-gray-200"
            >
              Sign Up
            </button>
          </div>

        </div>
      </div>

      {/* Main Header */}
      <div className="py-4">
        <div className="max-w-[1200px] mx-auto px-5 flex flex-col lg:flex-row items-center justify-between gap-6">
          
          {/* Logo */}
          <ImageLogo size="medium" showText={true} />

          {/* Navigation */}
          <nav>
            <ul className="flex flex-col lg:flex-row gap-4 lg:gap-8 text-center">
              <li>
                <button
                  onClick={() => navigate("/")}
                  className="font-medium text-gray-800 hover:text-blue-800 transition"
                >
                  Home
                </button>
              </li>
              <li><a href="#about" className="nav-link">About Us</a></li>
              <li><a href="#gallery" className="nav-link">Gallery</a></li>
              <li><a href="#notice" className="nav-link">Notice</a></li>
              <li><a href="#tuition-classes" className="nav-link">Tuition Classes</a></li>
              <li><a href="#contact" className="nav-link">Contact Us</a></li>
            </ul>
          </nav>

          {/* Enroll Button */}
          <button
            onClick={() => navigate("/admission-form")}
            className="bg-blue-900 text-white px-5 py-2 rounded-md font-semibold hover:bg-blue-800 transition"
          >
            Enroll Now
          </button>

        </div>
      </div>

    </header>
  );
};

export default Header;
