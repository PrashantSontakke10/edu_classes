import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();
  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/login", form);

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      if (res.data.user.role === "student") navigate("/student");
      else if (res.data.user.role === "teacher") navigate("/teacher");
      else if (res.data.user.role === "admin") navigate("/admin");
      else navigate("/login");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Login failed");
      } else if (error.request) {
        alert("Server not responding. Make sure the backend server is running on port 3000.");
      } else {
        alert("Login failed");
      }
      console.error("Login Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2>Login</h2>
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input
        name="password"
        type="password"
        placeholder="Password"
        onChange={handleChange}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
