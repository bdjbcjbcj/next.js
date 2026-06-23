"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
    setError(""); // Clear error when user types
  };
const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
  setLoading(true);

  try {
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(form),
      credentials: "include",
    });

    const data = await res.json();

    if (data.success) {
      router.push("/dashboard"); // ✔ clean redirect
    } else {
      setError(data.message);
    }
  } catch (err) {
    setError("Something went wrong");
  } finally {
    setLoading(false);
  }
};
  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1120] mt-8 relative">

      {/* BLUE GLOW BACKGROUND EFFECT */}
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full top-20 left-20"></div>

      <div className="absolute w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full bottom-20 right-20"></div>

      {/* LOGIN CARD */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl w-[400px]"
      >

        <h2 className="text-3xl font-bold mb-2 text-center text-white">
          Welcome Back
        </h2>

        <p className="text-center text-gray-300 mb-6">
          Login to RoyalStay Dashboard
        </p>

        {/* ERROR MESSAGE */}
        {error && (
          <div className="bg-red-500/20 border border-red-500 text-red-300 p-3 rounded-lg mb-4 text-sm">
            {error}
          </div>
        )}

        {/* EMAIL */}
        <input
          type="email"
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="w-full bg-white/10 text-white placeholder-gray-300 border border-white/20 p-3 rounded-xl mb-4 outline-none focus:border-blue-500"
          required
        />

        {/* PASSWORD */}
        <input
          type="password"
          name="password"
          value={form.password}
          onChange={handleChange}
          placeholder="Password"
          className="w-full bg-white/10 text-white placeholder-gray-300 border border-white/20 p-3 rounded-xl mb-6 outline-none focus:border-blue-500"
          required
        />

        {/* TEST CREDENTIALS HINT */}
        <p className="text-xs text-gray-400 mb-4">
          💡 Demo: test@example.com / password123
        </p>

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-medium shadow-lg shadow-blue-500/30 disabled:opacity-50 disabled:cursor-not-allowed"
        >
          {loading ? "Logging in..." : "Login"}
        </button>

        {/* FOOTER TEXT */}
        <div className="flex justify-between text-sm text-gray-300 mt-5">
          <p className="hover:text-white cursor-pointer">
            Forgot Password?
          </p>

          <Link href="/register">
            <p className="hover:text-white cursor-pointer">
              Create Account
            </p>
          </Link>
        </div>

      </form>
    </div>
  );
}
