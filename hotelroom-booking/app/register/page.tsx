"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function RegisterPage() {
  const router = useRouter();

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  // HANDLE INPUTS
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // HANDLE REGISTER API
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      setLoading(true);

      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      alert(data.message);

      if (data.success) {
        router.push("/login");
      }
    } catch (error) {
      console.log(error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#0B1120] relative mt-8">

      {/* BACKGROUND GLOW */}
      <div className="absolute w-[400px] h-[400px] bg-blue-600/20 blur-[120px] rounded-full top-20 left-20"></div>

      <div className="absolute w-[300px] h-[300px] bg-purple-600/20 blur-[120px] rounded-full bottom-20 right-20"></div>

      {/* REGISTER CARD */}
      <form
        onSubmit={handleSubmit}
        className="bg-white/10 backdrop-blur-xl border border-white/20 p-8 rounded-3xl shadow-2xl w-[400px]"
      >

        <h2 className="text-3xl font-bold mb-2 text-center text-white">
          Create Account
        </h2>

        <p className="text-center text-gray-300 mb-6">
          Register your RoyalStay account
        </p>

        {/* NAME */}
        <input
          type="text"
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Full Name"
          className="w-full bg-white/10 text-white placeholder-gray-300 border border-white/20 p-3 rounded-xl mb-4 outline-none focus:border-blue-500"
          required
        />

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

        {/* BUTTON */}
        <button
          type="submit"
          disabled={loading}
          className="w-full bg-blue-600 hover:bg-blue-700 transition text-white py-3 rounded-xl font-medium shadow-lg shadow-blue-500/30"
        >
          {loading ? "Registering..." : "Register"}
        </button>

        {/* FOOTER */}
        <div className="text-center text-sm text-gray-300 mt-5">
          Already have an account?

          <Link href="/login">
            <span className="ml-2 hover:text-white cursor-pointer">
              Login
            </span>
          </Link>
        </div>

      </form>
    </div>
  );
}