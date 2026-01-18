import { useState } from "react";
import api from "../../services/api";
import { useNavigate } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    role: "student",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await api.post("/auth/signup", form);

      // SUCCESS
      alert("Signup successful");
      navigate("/login");

    } catch (error) {
      // 🔥 FAILURE HANDLING (THIS FIXES YOUR ISSUE)

      if (error.response) {
        // Backend sent error message
        alert(error.response.data.message || "Signup failed");
      } else if (error.request) {
        // Server not reachable
        alert("Server not responding. Try again later.");
      } else {
        // Other error
        alert("Signup failed");
      }

      console.error("Signup Error:", error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <h2 className="bg-blue-500 text-white p-2 rounded-md">Signup</h2>

      <input
        name="name"
        placeholder="Name"
        value={form.name}
        onChange={handleChange}
        required
      />

      <input
        name="email"
        type="email"
        placeholder="Email"
        value={form.email}
        onChange={handleChange}
        required
      />

      <input
        name="password"
        type="password"
        placeholder="Password"
        value={form.password}
        onChange={handleChange}
        required
      />

      <select name="role" value={form.role} onChange={handleChange}>
        <option value="student">Student</option>
        <option value="teacher">Teacher</option>
      </select>

      <button type="submit">Signup</button>
    </form>
  );
};

export default Signup;
