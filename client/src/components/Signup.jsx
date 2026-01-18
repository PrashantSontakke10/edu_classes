import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import Card from "./ui/Card";
import { GraduationCap, UserCircle, Users, ShieldCheck } from "lucide-react";
// import "./Signup.css";

const Signup = () => {
  const navigate = useNavigate();
  const [selectedRole, setSelectedRole] = useState(null);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    name: ""
  });

  const roles = [
    {
      id: "admin",
      title: "Admin",
      description: "Manage entire platform",
      icon: ShieldCheck
    },
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

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup submitted:", {
      ...formData,
      role: selectedRole
    });
    // Add authentication logic here
  };

  return (
    <div className="auth-container" style={{ minHeight: "100vh", padding: "20px", backgroundColor: "#f5f5f5" }}>
      <div className="auth-wrapper">
        {/* Left Side - Branding */}
        <div className="auth-branding">
          <div className="auth-logo">
            <div className="logo-icon">
              <GraduationCap className="h-7 w-7 text-primary-foreground" />
            </div>
            <div>
              <h1 className="logo-title">Aim</h1>
              <p className="logo-subtitle">The Institute Of Self Development</p>
            </div>
          </div>
          <div className="auth-features">
            <div className="feature-item">
              <div className="feature-icon">
                <ShieldCheck className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="feature-title">Secure Access</h3>
                <p className="feature-description">Role-based authentication for administrators, teachers, and students</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <UserCircle className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="feature-title">Easy Management</h3>
                <p className="feature-description">Streamline class scheduling, attendance, and student progress</p>
              </div>
            </div>
            <div className="feature-item">
              <div className="feature-icon">
                <Users className="h-4 w-4 text-primary" />
              </div>
              <div>
                <h3 className="feature-title">Connected Learning</h3>
                <p className="feature-description">Keep parents and students informed with real-time updates</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side - Signup Form */}
        <Card className="auth-card" style={{ padding: "20px", backgroundColor: "white", borderRadius: "10px" }}>
          <div className="auth-form-wrapper" style={{ padding: "20px" }}>
            {/* Header */}
            <div className="auth-header">
              <h2 className="auth-title">Create Account</h2>
              <p className="auth-subtitle">Join our tuition management platform</p>
            </div>

            {/* Role Selection */}
            <div className="role-selection">
              <Label className="text-sm font-medium">Select Your Role</Label>
              <div className="role-grid">
                {roles.map((role) => {
                  const Icon = role.icon;
                  return (
                    <button
                      key={role.id}
                      type="button"
                      onClick={() => setSelectedRole(role.id)}
                      className={`role-card ${selectedRole === role.id ? "role-card-selected" : ""}`}
                    >
                      <Icon className={`role-icon ${selectedRole === role.id ? "role-icon-selected" : ""}`} />
                      <p className={`role-title ${selectedRole === role.id ? "role-title-selected" : ""}`}>
                        {role.title}
                      </p>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-field">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  placeholder="Enter your full name"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  required
                />
              </div>

              <div className="form-field">
                <Label htmlFor="email">Email Address</Label>
                <Input
                  id="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  required
                />
              </div>

              <div className="form-field">
                <Label htmlFor="password">Password</Label>
                <Input
                  id="password"
                  type="password"
                  placeholder="Enter your password"
                  value={formData.password}
                  onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                  required
                />
              </div>

              <Button type="submit" className="auth-submit-btn" disabled={!selectedRole}>
                Create Account
              </Button>
            </form>

            {/* Toggle to Login */}
            <div className="auth-toggle">
              <span className="text-muted-foreground">Already have an account?</span>{" "}
              <button
                onClick={() => navigate("/login")}
                className="toggle-link"
              >
                Sign In
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Signup;
