"use client";

import { assets } from "@/Assets/assets";
import Image from "next/image";
import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Link from "next/link";

const Header = () => {

  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubscribe = async (e) => {
    e.preventDefault();

    if (!email) {
      return toast.error("Please enter email");
    }

    try {

      setLoading(true);

      const res = await axios.post("/api/email", {
        email
      });

      if (res.data.success) {
        toast.success(res.data.message || "Subscribed!");
        setEmail("");
      } else {
        toast.error(res.data.message);
      }

    } catch (error) {
      console.log(error);
      toast.error("Already Subscribed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="px-5 py-5 md:px-12 lg:px-28">

      {/* HEADER */}
      <div className="flex justify-between items-center">
        <Image src={assets.logo} alt="" width={180} className="w-36" />

        <Link href={'/admin'} className="flex border border-black gap-2 items-center font-medium py-1 px-3 sm:py-3 sm:px-6 shadow-[-7px_7px_0_black]">
          Get Started
          <Image src={assets.arrow} alt="" />
        </Link>
      </div>

      {/* HERO */}
      <div className="text-center my-8">

        <h1 className="text-3xl sm:text-5xl font-medium">
          Latest Blogs
        </h1>

        <p className="mt-8 max-w-3xl m-auto text-xs sm:text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {/* SUBSCRIBE FORM */}
        <form
          onSubmit={handleSubscribe}
          className="flex justify-between max-w-lg scale-75 sm:scale-100 mx-auto mt-10 border border-black shadow-[-7px_7px_0_black]"
        >

          <input
            className="pl-4 outline-none w-full"
            type="email"
            placeholder="Enter your Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />

          <button
            type="submit"
            disabled={loading}
            className="border-l border-black py-4 px-4 sm:px-8 active:bg-gray-600 active:text-white"
          >
            {loading ? "..." : "Subscribe"}
          </button>

        </form>

      </div>

    </div>
  );
};

export default Header;