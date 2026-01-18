import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Button from './ui/Button';
import Input from './ui/Input';
import Label from './ui/Label';
import Card from './ui/Card';
import { GraduationCap, ShieldCheck, UserCircle, Users } from 'lucide-react';
import './Login.css';
import { login as loginApi } from '../api/auth';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    role: 'student'
  });
  const [status, setStatus] = useState({ loading: false, error: '', success: '' });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: '', success: '' });
    try {
      const data = await loginApi(formData);
      if (data?.token) {
        localStorage.setItem('auth_token', data.token);
        localStorage.setItem('auth_user', JSON.stringify(data.user));
      }
      setStatus({ loading: false, error: '', success: 'Logged in successfully' });
      navigate("/");
    } catch (err) {
      setStatus({ loading: false, error: err.message || 'Login failed', success: '' });
    }
  };

  return (
    <div className="auth-container">
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

        {/* Right Side - Login Form */}
        <Card className="auth-card">
          <div className="auth-form-wrapper">
            {/* Header */}
            <div className="auth-header">
              <h2 className="auth-title">Welcome Back</h2>
              <p className="auth-subtitle">Sign in to access your dashboard</p>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="auth-form">
              <div className="form-field">
                <Label htmlFor="role">Role</Label>
                <div className="role-toggle">
                  {['student', 'teacher'].map((role) => (
                    <button
                      key={role}
                      type="button"
                      className={`role-chip ${formData.role === role ? 'active' : ''}`}
                      onClick={() => setFormData({ ...formData, role })}
                    >
                      {role === 'student' ? 'Student' : 'Teacher'}
                    </button>
                  ))}
                </div>
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

              <div className="login-options">
                <label className="remember-me">
                  <input type="checkbox" className="rounded border-border" />
                  <span className="text-muted-foreground">Remember me</span>
                </label>
                <button 
                  type="button" 
                  className="forgot-password"
                  onClick={() => console.log("Forgot password clicked")}
                >
                  Forgot password?
                </button>
              </div>

              <Button type="submit" className="auth-submit-btn">
                {status.loading ? 'Signing in...' : 'Sign In'}
              </Button>
            </form>

            {status.error && <p className="auth-error">{status.error}</p>}
            {status.success && <p className="auth-success">{status.success}</p>}

            {/* Toggle to Signup */}
            <div className="auth-toggle">
              <span className="text-muted-foreground">Don't have an account?</span>{' '}
              <button
                onClick={() => navigate('/signup')}
                className="toggle-link"
              >
                Sign Up
              </button>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
};

export default Login;
