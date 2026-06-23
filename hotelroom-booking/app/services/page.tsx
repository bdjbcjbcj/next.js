"use client";

import {
  Utensils,
  BedDouble,
  Waves,
  Sparkles,
  Car,
  HeartPulse,
  PartyPopper,
  Cake,
  Music,
  Camera,
} from "lucide-react";

import Link from "next/link";

import { motion } from "framer-motion";

export default function ServicesPage() {
  const services = [
    {
      icon: <BedDouble size={40} className="text-blue-500" />,
      title: "Luxury Rooms",
      desc: "Elegant rooms with modern interiors, comfort beds, and premium amenities.",
    },
    {
      icon: <Utensils size={40} className="text-blue-500" />,
      title: "Fine Dining",
      desc: "World-class restaurant offering international cuisines and gourmet meals.",
    },
    {
      icon: <Waves size={40} className="text-blue-500" />,
      title: "Swimming Pool",
      desc: "Relax in our infinity pool with luxury seating and night lighting.",
    },
    {
      icon: <Sparkles size={40} className="text-blue-500" />,
      title: "Housekeeping",
      desc: "24/7 cleaning service ensuring your room stays fresh and comfortable.",
    },
    {
      icon: <Car size={40} className="text-blue-500" />,
      title: "Transport Service",
      desc: "Luxury car pickup and drop service available anytime for guests.",
    },
    {
      icon: <HeartPulse size={40} className="text-blue-500" />,
      title: "Spa & Wellness",
      desc: "Relax with professional spa treatments, massage, and wellness care.",
    },

    // NEW SERVICES
    {
      icon: <PartyPopper size={40} className="text-pink-500" />,
      title: "Wedding Events",
      desc: "Luxury wedding halls with stunning decoration, catering, lighting, and event management.",
    },
    {
      icon: <Cake size={40} className="text-yellow-500" />,
      title: "Birthday Parties",
      desc: "Celebrate unforgettable birthdays with customized themes, cakes, and entertainment.",
    },
    {
      icon: <Music size={40} className="text-green-500" />,
      title: "Music & DJ Nights",
      desc: "Enjoy live music, DJ parties, dance floors, and premium sound systems.",
    },
    {
      icon: <Camera size={40} className="text-purple-500" />,
      title: "Photography Service",
      desc: "Professional photography and videography services for weddings and special events.",
    },
  ];

  // ANIMATION VARIANTS
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 50,
    },

    visible: (i = 1) => ({
      opacity: 1,
      y: 0,

      transition: {
        delay: i * 0.1,
        duration: 0.6,
      },
    }),
  };

  return (
    <div className="min-h-screen bg-[#0B1120] text-white py-20 overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6"
      >
        <h1 className="text-5xl font-bold mb-4">
          Our Services
        </h1>

        <p className="text-gray-400">
          Premium hospitality services for a luxury experience
        </p>
      </motion.div>

      {/* SERVICES GRID */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
        {services.map((service, index) => (
          <motion.div
            key={index}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover={{
              scale: 1.05,
              y: -8,
            }}
            className="bg-white/10 border border-white/20 p-8 rounded-3xl shadow-xl backdrop-blur-lg"
          >
            <motion.div
              whileHover={{
                rotate: 10,
                scale: 1.2,
              }}
              transition={{ duration: 0.3 }}
              className="mb-5"
            >
              {service.icon}
            </motion.div>

            <h2 className="text-2xl font-semibold mb-3">
              {service.title}
            </h2>

            <p className="text-gray-400 leading-relaxed">
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>

      {/* EVENT SECTION */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto mt-24 px-6"
      >
        <div className="bg-gradient-to-r from-pink-600/20 to-blue-600/20 border border-white/10 rounded-3xl p-10 grid md:grid-cols-2 gap-10 items-center">
          {/* LEFT */}
          <motion.div
            initial={{ opacity: 0, x: -60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">
              Plan Your Dream Event With Us
            </h2>

            <p className="text-gray-300 leading-relaxed mb-6">
              From luxury weddings to birthday celebrations and corporate
              parties, we provide complete event management with elegant halls,
              premium decoration, catering, music, and unforgettable memories.
            </p>

            <div className="flex flex-wrap gap-4">
              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-pink-500/20 text-pink-300 px-4 py-2 rounded-full text-sm"
              >
                Wedding Events
              </motion.span>

              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-yellow-500/20 text-yellow-300 px-4 py-2 rounded-full text-sm"
              >
                Birthday Parties
              </motion.span>

              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-green-500/20 text-green-300 px-4 py-2 rounded-full text-sm"
              >
                DJ Nights
              </motion.span>

              <motion.span
                whileHover={{ scale: 1.1 }}
                className="bg-blue-500/20 text-blue-300 px-4 py-2 rounded-full text-sm"
              >
                Corporate Events
              </motion.span>
            </div>
          </motion.div>

          {/* RIGHT */}
          <motion.div
            initial={{ opacity: 0, x: 60 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.03 }}
          >
            <motion.img
              src="https://images.unsplash.com/photo-1519167758481-83f550bb49b3?q=80&w=2070&auto=format&fit=crop"
              alt="Wedding Event"
              className="rounded-3xl h-[350px] w-full object-cover"
              whileHover={{ scale: 1.08 }}
              transition={{ duration: 0.5 }}
            />
          </motion.div>
        </div>
      </motion.div>

      {/* BOTTOM BANNER */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="max-w-5xl mx-auto mt-20 text-center bg-white/5 border border-white/10 p-10 rounded-3xl"
      >
        <h2 className="text-3xl font-bold mb-4">
          Experience Luxury Like Never Before
        </h2>

        <p className="text-gray-400 mb-6">
          Book your stay now and enjoy world-class services at RoyalStay Hotel.
        </p>

        <Link href="/room">
          <motion.button
            whileHover={{
              scale: 1.08,
            }}
            whileTap={{
              scale: 0.95,
            }}
            className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl font-medium transition"
          >
            Book Now
          </motion.button>
        </Link>
      </motion.div>
    </div>
  );
}