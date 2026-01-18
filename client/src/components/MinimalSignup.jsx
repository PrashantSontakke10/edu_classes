import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { UserCircle, Users } from "lucide-react";
import { signup as signupApi } from "../api/auth";

const MinimalSignup = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState("student");
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: ""
  });
  const [status, setStatus] = useState({ loading: false, error: "", success: "" });

  const roles = [
    {
      id: "teacher",
      title: "Teacher",
      description: "Create and manage classes",
      icon: UserCircle
    },
    {
      id: "student",
      title: "Student/Parent",
      description: "Access learning materials",
      icon: Users
    }
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });
    try {
      const data = await signupApi({
        ...formData,
        role: selectedRole
      });
      if (data?.token) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("auth_user", JSON.stringify(data.user));
      }
      setStatus({ loading: false, error: "", success: "Account created successfully" });
      navigate("/");
    } catch (err) {
      setStatus({ loading: false, error: err.message || "Signup failed", success: "" });
    }
  };

  return (
    <div style={{ 
      padding: "20px", 
      backgroundColor: "#f5f5f5", 
      minHeight: "100vh",
      fontFamily: "Arial, sans-serif"
    }}>
      <div style={{ 
        maxWidth: "600px", 
        margin: "0 auto", 
        backgroundColor: "white", 
        padding: "30px", 
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0,0,0,0.1)"
      }}>
        <h1 style={{ color: "#1e40af", textAlign: "center", marginBottom: "30px" }}>
          Create Account
        </h1>
        
        {/* Role Selection */}
        <div style={{ marginBottom: "30px" }}>
          <h3 style={{ marginBottom: "15px", color: "#374151" }}>Select Your Role</h3>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: "15px" }}>
            {roles.map((role) => {
              const Icon = role.icon;
              return (
                <button
                  key={role.id}
                  type="button"
                  onClick={() => setSelectedRole(role.id)}
                  style={{
                    padding: "15px",
                    border: selectedRole === role.id ? "2px solid #1e40af" : "2px solid #e2e8f0",
                    borderRadius: "10px",
                    backgroundColor: selectedRole === role.id ? "#f0f4ff" : "white",
                    cursor: "pointer",
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                    gap: "10px",
                    transition: "all 0.3s ease"
                  }}
                >
                  <Icon 
                    size={24} 
                    color={selectedRole === role.id ? "#1e40af" : "#64748b"} 
                  />
                  <span style={{ 
                    fontWeight: "600", 
                    color: selectedRole === role.id ? "#1e40af" : "#374151",
                    fontSize: "14px"
                  }}>
                    {role.title}
                  </span>
                </button>
              );
            })}
          </div>
        </div>
        
        <form onSubmit={handleSubmit}>
          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Full Name
            </label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #e2e8f0",
                borderRadius: "5px",
                fontSize: "16px"
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Email Address
            </label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #e2e8f0",
                borderRadius: "5px",
                fontSize: "16px"
              }}
              required
            />
          </div>

          <div style={{ marginBottom: "20px" }}>
            <label style={{ display: "block", marginBottom: "5px", fontWeight: "bold" }}>
              Password
            </label>
            <input
              type="password"
              value={formData.password}
              onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              style={{
                width: "100%",
                padding: "12px",
                border: "2px solid #e2e8f0",
                borderRadius: "5px",
                fontSize: "16px"
              }}
              required
            />
          </div>

          <button
            type="submit"
            disabled={!selectedRole}
            style={{
              width: "100%",
              backgroundColor: selectedRole ? "#1e40af" : "#94a3b8",
              color: "white",
              padding: "12px",
              border: "none",
              borderRadius: "5px",
              fontSize: "16px",
              fontWeight: "bold",
              cursor: selectedRole ? "pointer" : "not-allowed",
              opacity: selectedRole ? 1 : 0.6
            }}
          >
            {status.loading ? "Creating account..." : "Create Account"}
          </button>
        </form>
        {status.error && (
          <p style={{ color: "#b91c1c", marginTop: "10px", textAlign: "center" }}>
            {status.error}
          </p>
        )}
        {status.success && (
          <p style={{ color: "#15803d", marginTop: "10px", textAlign: "center" }}>
            {status.success}
          </p>
        )}
        
        {/* Navigation to Login */}
        <div style={{ 
          textAlign: "center", 
          marginTop: "20px", 
          paddingTop: "20px", 
          borderTop: "1px solid #e2e8f0" 
        }}>
          <span style={{ color: "#64748b" }}>Already have an account? </span>
          <button
            onClick={() => navigate("/login")}
            style={{
              background: "none",
              border: "none",
              color: "#1e40af",
              fontWeight: "600",
              cursor: "pointer",
              textDecoration: "underline"
            }}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

export default MinimalSignup;
