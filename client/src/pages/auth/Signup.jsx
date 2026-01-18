import { useState } from "react";
import { useNavigate } from "react-router-dom";
import api from "../../services/api";
import { GraduationCap, ShieldCheck, UserCircle, Users } from "lucide-react";

const Signup = () => {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    name: "",
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
      await api.post("/auth/signup", form);
      navigate("/login");
    } catch (error) {
      if (error.response) {
        alert(error.response.data.message || "Signup failed");
      } else if (error.request) {
        alert("Server not responding. Try again later.");
      } else {
        alert("Signup failed");
      }
      console.error("Signup Error:", error);
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
              <GraduationCap className="w-6 h-6" />
            </div>
            <div>
              <h1 className="text-2xl font-semibold">Aim</h1>
              <p className="text-sm opacity-80">
                The Institute Of Self Development
              </p>
            </div>
          </div>

          <div className="space-y-8">
            <Feature
              icon={<ShieldCheck />}
              title="Secure Access"
              desc="Role-based authentication for administrators, teachers, and students"
            />
            <Feature
              icon={<UserCircle />}
              title="Easy Management"
              desc="Streamline class scheduling, attendance, and progress"
            />
            <Feature
              icon={<Users />}
              title="Connected Learning"
              desc="Real-time updates for parents and students"
            />
          </div>
        </div>

        {/* RIGHT FORM */}
        <form
          onSubmit={handleSubmit}
          className="flex flex-col justify-center px-8 md:px-14 py-10 space-y-6"
        >
          <div className="text-center">
            <h2 className="text-3xl font-semibold text-blue-800">
              Create Account
            </h2>
            <p className="text-gray-500">
              Join our tuition management platform
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

          {/* NAME */}
          <input
            name="name"
            placeholder="Full Name"
            value={form.name}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-700 outline-none"
          />

          {/* EMAIL */}
          <input
            name="email"
            type="email"
            placeholder="Email Address"
            value={form.email}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-700 outline-none"
          />

          {/* PASSWORD */}
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
            required
            className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-700 outline-none"
          />

          {/* SUBMIT */}
          <button
            type="submit"
            disabled={loading}
            className="w-full py-2 rounded-lg bg-blue-800 text-white font-semibold hover:bg-blue-900 transition disabled:opacity-60"
          >
            {loading ? "Creating Account..." : "Create Account"}
          </button>

          {/* LOGIN LINK */}
          <div className="text-center text-sm text-gray-600">
            Already have an account?{" "}
            <button
              type="button"
              onClick={() => navigate("/login")}
              className="text-blue-800 font-semibold hover:underline"
            >
              Sign In
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

export default Signup;
