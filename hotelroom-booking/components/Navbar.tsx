"use client";

import Link from "next/link";
import { useState } from "react";
import { Home, ChevronRight, X, Menu } from "lucide-react";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  const navLinks = [
    { name: "Home", path: "/" },
    { name: "Rooms", path: "/room" },
    { name: "Services", path: "/services" },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0a0a0f] border-b border-white/[0.07]">
      <div className="max-w-7xl mx-auto px-6 lg:px-10">
        <div className="flex items-center justify-between h-[72px]">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-[10px] flex items-center justify-center"
              style={{ background: "linear-gradient(135deg, #b8973d 0%, #e2c06a 100%)" }}>
              <Home className="w-4 h-4 text-[#0a0a0f]" strokeWidth={2.2} />
            </div>
            <span className="text-[17px] font-medium tracking-[0.04em] text-[#f0e6c8]">
              RoyalStay
            </span>
          </Link>

          {/* Desktop Links */}
          <div className="hidden md:flex items-center gap-0.5">
            {navLinks.map((item) => (
              <Link
                key={item.path}
                href={item.path}
                className="px-4 py-2 rounded-lg text-[13.5px] text-white/55 hover:text-white/90 hover:bg-white/[0.06] transition-all duration-200"
              >
                {item.name}
              </Link>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex items-center gap-2.5">
           <Link href='/login'>
            <button className="px-5 py-2 rounded-lg border border-white/20 text-white/70 text-[13.5px] hover:bg-white/[0.06] hover:text-white transition-all duration-200">
              Login

            </button>
           </Link>
           <Link href='/room'>
            <button
              className="px-5 py-2 rounded-lg text-[13.5px] font-medium text-[#0a0a0f] hover:opacity-90 transition-opacity"
              style={{ background: "linear-gradient(135deg, #b8973d 0%, #e2c06a 100%)" }}
            >
              Book a Room
            </button>
            </Link>
          </div>

          {/* Mobile Right */}
          <div className="md:hidden flex items-center gap-2.5">
            <button
              className="px-4 py-1.5 rounded-[7px] text-[13px] font-medium text-[#0a0a0f]"
              style={{ background: "linear-gradient(135deg, #b8973d 0%, #e2c06a 100%)" }}
            >
              Book
            </button>
            <button
              onClick={() => setOpen(!open)}
              className="w-9 h-9 flex items-center justify-center rounded-lg border border-white/15 text-white/70 hover:bg-white/[0.06] transition-all"
            >
              {open ? <X size={16} strokeWidth={2.2} /> : <Menu size={18} strokeWidth={2} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="md:hidden border-t border-white/[0.07] px-5 pt-4 pb-5">
          <div className="flex flex-col gap-0.5 mb-5">
            {navLinks.map((item, i) => (
              <Link
                key={item.path}
                href={item.path}
                onClick={() => setOpen(false)}
                className={`flex items-center justify-between px-3.5 py-3 rounded-[9px] text-[14.5px] transition-all
                  ${i === 0
                    ? "bg-[#b8973d]/[0.12] text-[#e2c06a] font-medium"
                    : "text-white/65 hover:text-white hover:bg-white/[0.05]"
                  }`}
              >
                {item.name}
                <ChevronRight
                  size={14}
                  className={i === 0 ? "text-[#b8973d]" : "text-white/30"}
                />
              </Link>
            ))}
          </div>

          <div className="flex flex-col gap-2">
            <button className="w-full py-3.5 rounded-[10px] border border-white/15 text-white/70 text-[14px] hover:bg-white/[0.05] transition-all">
              Sign in
            </button>
            <Link href='/room'>
            <button
              className="w-full py-3.5 rounded-[10px] text-[14px] font-medium text-[#0a0a0f]"
              style={{ background: "linear-gradient(135deg, #b8973d 0%, #e2c06a 100%)" }}
            >
              Book a Room
            </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}