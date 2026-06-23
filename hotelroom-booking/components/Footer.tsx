"use client";

import {
  Send,
  MapPin,
  Phone,
  Mail,
  Star,
  Users,
  Building2,
} from "lucide-react";

import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-[#0B1120] text-white pt-20 pb-8">

      <div className="max-w-7xl mx-auto px-6">

        {/* ===== STATS SECTION (NEW) ===== */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16 text-center">

          <div className="bg-white/5 p-6 rounded-2xl">
            <Users className="mx-auto text-blue-500 mb-2" />
            <h3 className="text-2xl font-bold">12K+</h3>
            <p className="text-gray-400 text-sm">Happy Guests</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <Building2 className="mx-auto text-blue-500 mb-2" />
            <h3 className="text-2xl font-bold">250+</h3>
            <p className="text-gray-400 text-sm">Luxury Rooms</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <Star className="mx-auto text-blue-500 mb-2" />
            <h3 className="text-2xl font-bold">4.9</h3>
            <p className="text-gray-400 text-sm">Rating</p>
          </div>

          <div className="bg-white/5 p-6 rounded-2xl">
            <MapPin className="mx-auto text-blue-500 mb-2" />
            <h3 className="text-2xl font-bold">20+</h3>
            <p className="text-gray-400 text-sm">Locations</p>
          </div>

        </div>

        {/* ===== TOP GRID ===== */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

          {/* ABOUT */}
          <div>
            <h2 className="text-3xl font-bold mb-5">RoyalStay</h2>

            <p className="text-gray-400 leading-relaxed">
              Experience luxury, comfort, and unforgettable hospitality with
              premium rooms and world-class services.
            </p>

            {/* SOCIAL ICONS */}
            <div className="flex gap-4 mt-6">

              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-blue-600 transition cursor-pointer">
                <FaFacebookF size={18} />
              </div>

              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-pink-600 transition cursor-pointer">
                <FaInstagram size={18} />
              </div>

              <div className="w-11 h-11 rounded-full bg-white/10 flex items-center justify-center hover:bg-sky-500 transition cursor-pointer">
                <FaTwitter size={18} />
              </div>

            </div>
          </div>

          {/* QUICK LINKS */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Quick Links</h3>

            <ul className="space-y-4 text-gray-400">
              <li className="hover:text-white cursor-pointer">Home</li>
              <li className="hover:text-white cursor-pointer">Rooms</li>
              <li className="hover:text-white cursor-pointer">Services</li>
              <li className="hover:text-white cursor-pointer">About</li>
              <li className="hover:text-white cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* CONTACT */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Contact Info</h3>

            <div className="space-y-5 text-gray-400">

              <div className="flex gap-3">
                <MapPin className="text-blue-500 mt-1" />
                <p>New York, USA</p>
              </div>

              <div className="flex gap-3">
                <Phone className="text-blue-500 mt-1" />
                <p>+1 234 567 890</p>
              </div>

              <div className="flex gap-3">
                <Mail className="text-blue-500 mt-1" />
                <p>support@royalstay.com</p>
              </div>

            </div>
          </div>

          {/* NEWSLETTER */}
          <div>
            <h3 className="text-2xl font-semibold mb-5">Newsletter</h3>

            <form className="space-y-4">

              <input
                type="text"
                placeholder="Your Name"
                className="w-full bg-white/10 px-4 py-3 rounded-xl outline-none focus:border-blue-500 border border-white/10"
              />

              <input
                type="email"
                placeholder="Your Email"
                className="w-full bg-white/10 px-4 py-3 rounded-xl outline-none focus:border-blue-500 border border-white/10"
              />

              <button
                type="submit"
                className="w-full bg-blue-600 hover:bg-blue-700 py-3 rounded-xl flex justify-center items-center gap-2"
              >
                Subscribe <Send size={16} />
              </button>

            </form>
          </div>

        </div>

        {/* ===== FEATURED MINI SECTION (NEW) ===== */}
        <div className="mt-20">
          <h3 className="text-2xl font-bold mb-6">Featured Rooms</h3>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

            <div className="bg-white/5 p-5 rounded-2xl">
              <h4 className="font-semibold">Royal Suite</h4>
              <p className="text-gray-400 text-sm">Sea view luxury room</p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl">
              <h4 className="font-semibold">Deluxe Room</h4>
              <p className="text-gray-400 text-sm">Comfort & modern style</p>
            </div>

            <div className="bg-white/5 p-5 rounded-2xl">
              <h4 className="font-semibold">Presidential</h4>
              <p className="text-gray-400 text-sm">Ultra premium experience</p>
            </div>

          </div>
        </div>

        {/* FOOTER BOTTOM */}
        <div className="border-t border-white/10 mt-16 pt-8 text-center text-gray-500">
          © 2026 RoyalStay Hotel Management System. All Rights Reserved.
        </div>

      </div>
    </footer>
  );
}