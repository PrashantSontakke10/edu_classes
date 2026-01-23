import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { GraduationCap, Shield, LayoutGrid, Users } from "lucide-react";

const Login = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const res = await api.post("/auth/login", {
        email: form.email,
        password: form.password,
      });

      localStorage.setItem("token", res.data.token);
      localStorage.setItem("role", res.data.user.role);

      if (res.data.user.role === "student") navigate("/student");
      else if (res.data.user.role === "teacher") navigate("/teacher");
    } catch (error) {
      alert(error.response?.data?.message || "Login failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 px-4">
      <div className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-2xl bg-white">

        {/* LEFT BRANDING */}
        <div className="hidden md:flex flex-col justify-between p-12 bg-gradient-to-br from-blue-800 to-blue-600 text-white">
          <div className="flex items-center gap-4">
            <div className="p-3 bg-white/20 rounded-full">
              <GraduationCap className="w-7 h-7" />
            </div>
            <div>
              <h1 className="text-3xl font-bold">Aim</h1>
              <p className="text-sm opacity-90">
                The Institute Of Self Development
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Feature
              icon={<Shield />}
              title="Secure Access"
              desc="Role-based authentication for administrators, teachers, and students"
            />
            <Feature
              icon={<LayoutGrid />}
              title="Easy Management"
              desc="Streamline class scheduling, attendance, and student progress"
            />
            <Feature
              icon={<Users />}
              title="Connected Learning"
              desc="Keep parents and students informed with real-time updates"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center px-8 md:px-14 py-12 space-y-6"
        >
          <div className="text-center">
            <h2 className="text-3xl font-bold text-blue-800">
              Welcome Back
            </h2>
            <p className="text-gray-500">
              Sign in to access your dashboard
            </p>
          </div>

          {/* ROLE */}
          <div>
            <label className="block mb-2 text-sm font-medium text-gray-700">
              Role
            </label>
            <div className="flex gap-3">
              {["student", "teacher"].map((r) => (
                <button
                  key={r}
                  type="button"
                  onClick={() => setForm({ ...form, role: r })}
                  className={`flex-1 py-2 rounded-lg border font-semibold transition
                    ${
                      form.role === r
                        ? "border-blue-800 bg-blue-50 text-blue-800"
                        : "border-gray-300 text-gray-600"
                    }`}
                >
                  {r.charAt(0).toUpperCase() + r.slice(1)}
                </button>
              ))}
            </div>
          </div>

          {/* EMAIL */}
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-700 outline-none"
          />

          {/* PASSWORD */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-700 outline-none"
          />

          {/* OPTIONS */}
          <div className="flex items-center justify-between text-sm">
            <label className="flex items-center gap-2 text-gray-600">
              <input type="checkbox" className="rounded border-gray-300" />
              Remember me
            </label>
            <button
              type="button"
              className="text-blue-800 font-semibold underline underline-offset-2"
            >
              Forgot password?
            </button>
          </div>

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-900 transition disabled:opacity-60"
          >
            {loading ? "Signing in..." : "Sign In"}
          </button>

          {/* SIGNUP */}
          <div className="text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/signup")}
              className="text-blue-800 font-semibold underline underline-offset-2"
            >
              Sign Up
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex gap-4 items-start">
    <div className="p-2 bg-white/20 rounded-lg">{icon}</div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm opacity-80">{desc}</p>
    </div>
  </div>
);

export default Login;