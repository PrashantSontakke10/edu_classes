import React from "react";

const DebugSignup = () => {
  console.log("DebugSignup component is rendering");
  
  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: "#f0f0f0", 
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <h1 style={{ color: "#333", textAlign: "center" }}>Debug Signup Page</h1>
      <div style={{ 
        backgroundColor: "white", 
        padding: "20px", 
        borderRadius: "10px",
        maxWidth: "500px",
        margin: "0 auto",
        boxShadow: "0 2px 10px rgba(0,0,0,0.1)"
      }}>
        <h2>Signup Form</h2>
        <form>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Full Name:</label>
            <input 
              type="text" 
              style={{ 
                width: "100%", 
                padding: "10px", 
                border: "1px solid #ddd", 
                borderRadius: "5px" 
              }} 
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Email:</label>
            <input 
              type="email" 
              style={{ 
                width: "100%", 
                padding: "10px", 
                border: "1px solid #ddd", 
                borderRadius: "5px" 
              }} 
            />
          </div>
          <div style={{ marginBottom: "15px" }}>
            <label style={{ display: "block", marginBottom: "5px" }}>Password:</label>
            <input 
              type="password" 
              style={{ 
                width: "100%", 
                padding: "10px", 
                border: "1px solid #ddd", 
                borderRadius: "5px" 
              }} 
            />
          </div>
          <button 
            type="submit" 
            style={{ 
              backgroundColor: "#1e40af", 
              color: "white", 
              padding: "10px 20px", 
              border: "none", 
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Create Account
          </button>
        </form>
      </div>
    </div>
  );
};

export default DebugSignup;
