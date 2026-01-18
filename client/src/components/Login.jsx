import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { GraduationCap, ShieldCheck, UserCircle, Users } from "lucide-react";
import Button from "./ui/Button";
import Input from "./ui/Input";
import Label from "./ui/Label";
import Card from "./ui/Card";
import { login as loginApi } from "../api/auth";

const Login = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    email: "",
    password: "",
    role: "student",
  });

  const [status, setStatus] = useState({
    loading: false,
    error: "",
    success: "",
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ loading: true, error: "", success: "" });

    try {
      const data = await loginApi(formData);

      if (data?.token) {
        localStorage.setItem("auth_token", data.token);
        localStorage.setItem("auth_user", JSON.stringify(data.user));
      }

      setStatus({ loading: false, error: "", success: "Logged in successfully" });
      navigate("/");
    } catch (err) {
      setStatus({
        loading: false,
        error: err.message || "Login failed",
        success: "",
      });
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-100 px-4">
      <div className="w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 rounded-2xl overflow-hidden shadow-xl bg-white">

        {/* LEFT BRANDING */}
        <div className="hidden md:flex flex-col justify-between p-10 bg-linear-to-br from-blue-700 to-blue-900 text-white">
          <div className="flex items-center gap-3">
            <div className="p-3 rounded-xl bg-white/20">
              <GraduationCap className="h-7 w-7" />
            </div>
            <div>
              <h1 className="text-2xl font-bold">Aim</h1>
              <p className="text-sm opacity-80">
                The Institute Of Self Development
              </p>
            </div>
          </div>

          <div className="space-y-6 mt-10">
            <Feature
              icon={<ShieldCheck className="h-4 w-4 text-blue-600" />}
              title="Secure Access"
              desc="Role-based authentication for administrators, teachers, and students"
            />
            <Feature
              icon={<UserCircle className="h-4 w-4 text-blue-600" />}
              title="Easy Management"
              desc="Streamline class scheduling, attendance, and student progress"
            />
            <Feature
              icon={<Users className="h-4 w-4 text-blue-600" />}
              title="Connected Learning"
              desc="Keep parents and students informed with real-time updates"
            />
          </div>
        </div>

        {/* RIGHT LOGIN FORM */}
        <Card className="p-8 md:p-10 flex flex-col justify-center">
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-gray-900">Welcome Back</h2>
            <p className="text-sm text-gray-500">
              Sign in to access your dashboard
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">

            {/* ROLE TOGGLE */}
            <div>
              <Label>Role</Label>
              <div className="mt-2 flex gap-3">
                {["student", "teacher"].map((role) => (
                  <button
                    key={role}
                    type="button"
                    onClick={() => setFormData({ ...formData, role })}
                    className={`flex-1 py-2 rounded-lg border-2 font-semibold transition
                      ${
                        formData.role === role
                          ? "border-blue-700 bg-blue-50 text-blue-700 shadow"
                          : "border-gray-200 text-gray-600 hover:border-blue-300"
                      }`}
                  >
                    {role === "student" ? "Student" : "Teacher"}
                  </button>
                ))}
              </div>
            </div>

            {/* EMAIL */}
            <div>
              <Label>Email Address</Label>
              <Input
                type="email"
                placeholder="Enter your email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>

            {/* PASSWORD */}
            <div>
              <Label>Password</Label>
              <Input
                type="password"
                placeholder="Enter your password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>

            {/* OPTIONS */}
            <div className="flex items-center justify-between text-sm">
              <label className="flex items-center gap-2 text-gray-600">
                <input
                  type="checkbox"
                  className="rounded border-gray-300"
                />
                Remember me
              </label>

              <button
                type="button"
                className="font-semibold text-blue-700 hover:underline"
              >
                Forgot password?
              </button>
            </div>

            {/* SUBMIT */}
            <Button type="submit" className="w-full">
              {status.loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>

          {status.error && (
            <p className="mt-4 text-center text-red-600 text-sm">
              {status.error}
            </p>
          )}

          {status.success && (
            <p className="mt-4 text-center text-green-600 text-sm">
              {status.success}
            </p>
          )}

          {/* SIGNUP LINK */}
          <div className="mt-6 text-center text-sm text-gray-600">
            Don’t have an account?{" "}
            <button
              onClick={() => navigate("/signup")}
              className="font-semibold text-blue-700 hover:underline"
            >
              Sign Up
            </button>
          </div>
        </Card>
      </div>
    </div>
  );
};

const Feature = ({ icon, title, desc }) => (
  <div className="flex gap-3 items-start bg-white/10 p-4 rounded-xl">
    <div className="p-2 rounded-lg bg-white">{icon}</div>
    <div>
      <h3 className="font-semibold">{title}</h3>
      <p className="text-sm opacity-80">{desc}</p>
    </div>
  </div>
);

export default Login;
