"use client";

import {
  Users,
  Star,
  Award,
  Building2,
  Globe,
  Heart,
} from "lucide-react";

import { motion } from "framer-motion";

import CountUp from "react-countup";

export default function AboutPage() {

  // STATS WITH RUNNING COUNT
  const stats = [
    {
      icon: <Users />,
      value: 12,
      suffix: "K+",
      label: "Happy Guests",
    },

    {
      icon: <Building2 />,
      value: 250,
      suffix: "+",
      label: "Luxury Rooms",
    },

    {
      icon: <Star />,
      value: 4.9,
      decimals: 1,
      label: "Guest Rating",
    },

    {
      icon: <Globe />,
      value: 20,
      suffix: "+",
      label: "Global Locations",
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
        delay: i * 0.15,
        duration: 0.7,
      },
    }),
  };

  return (
    <div className="bg-[#0B1120] text-white min-h-screen overflow-hidden">

      {/* HERO SECTION */}
      <motion.div
        initial={{ opacity: 0, scale: 1.1 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1 }}
        className="h-[70vh] flex items-center justify-center text-center relative bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&w=2070&auto=format&fit=crop')",
        }}
      >
        <div className="absolute inset-0 bg-black/60"></div>

        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
          className="relative z-10 px-6"
        >
          <h1 className="text-5xl font-bold mb-4">
            About RoyalStay
          </h1>

          <p className="text-gray-300 max-w-2xl mx-auto">
            Delivering luxury hospitality experiences with comfort, elegance,
            and world-class service.
          </p>
        </motion.div>
      </motion.div>

      {/* STATS SECTION */}
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-6 py-16">

        {stats.map((item, i) => (
          <motion.div
            key={i}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={i}
            whileHover={{
              scale: 1.08,
              y: -8,
            }}
            className="bg-white/10 border border-white/20 p-6 rounded-2xl text-center backdrop-blur-lg"
          >

            {/* ICON */}
            <motion.div
              whileHover={{
                rotate: 15,
                scale: 1.2,
              }}
              className="flex justify-center text-blue-500 mb-3"
            >
              {item.icon}
            </motion.div>

            {/* RUNNING COUNT */}
            <h2 className="text-3xl font-bold">

              <CountUp
                end={item.value}
                duration={3}
                decimals={item.decimals || 0}
                enableScrollSpy
                scrollSpyOnce
              />

              {item.suffix}

            </h2>

            <p className="text-gray-400">
              {item.label}
            </p>

          </motion.div>
        ))}

      </div>

      {/* MISSION & VISION */}
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 pb-20">

        <motion.div
          initial={{ opacity: 0, x: -60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 p-8 rounded-3xl border border-white/20"
        >

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">

            <motion.div
              animate={{
                scale: [1, 1.2, 1],
              }}
              transition={{
                repeat: Infinity,
                duration: 2,
              }}
            >
              <Heart className="text-blue-500" />
            </motion.div>

            Our Mission

          </h2>

          <p className="text-gray-400">
            To provide world-class hospitality with unmatched comfort and
            personalized service.
          </p>

        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 60 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{ scale: 1.03 }}
          className="bg-white/10 p-8 rounded-3xl border border-white/20"
        >

          <h2 className="text-2xl font-bold mb-4 flex items-center gap-2">

            <motion.div
              animate={{
                rotate: [0, 10, -10, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
            >
              <Award className="text-blue-500" />
            </motion.div>

            Our Vision

          </h2>

          <p className="text-gray-400">
            To become a global leader in luxury hotel experiences.
          </p>

        </motion.div>

      </div>

      {/* FOOD HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
        className="flex flex-col items-center justify-center px-6"
      >

        <h1 className="text-4xl font-semibold">
          OUR FOOD
        </h1>

        <p className="max-w-lg text-center mt-3 text-gray-500 font-light">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
          Iste possimus id exercitationem eligendi provident.
        </p>

      </motion.div>

      {/* FOOD SECTION */}
      <div className="py-15">

        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
            className="relative"
          >

            <motion.img
              src="https://www.jehangirsrestaurant.com/wp-content/uploads/2025/05/A-Taste-of-Royal-Luxury-1.jpg"
              className="rounded-3xl shadow-2xl"
              alt="Food"
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.5 }}
            />

            <motion.div
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                repeat: Infinity,
                duration: 3,
              }}
              className="absolute bottom-6 left-6 bg-white/10 backdrop-blur-md border border-white/20 p-4 rounded-2xl"
            >

              <p className="text-sm text-gray-300">
                Chef’s Special
              </p>

              <h3 className="font-bold">
                Gourmet Experience
              </h3>

            </motion.div>

          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.9 }}
            viewport={{ once: true }}
          >

            <p className="text-blue-500 uppercase tracking-[4px] mb-4">
              Our Cuisine
            </p>

            <h2 className="text-4xl font-bold mb-6">
              Experience Our Luxury Food Taste
            </h2>

            <p className="text-gray-400 mb-6 leading-relaxed">
              At RoyalStay Hotel, we serve world-class cuisine prepared by
              expert chefs. From traditional dishes to international gourmet
              meals, every bite is crafted for a luxury experience.
            </p>

            <ul className="space-y-3 text-gray-300 mb-8">

              <motion.li whileHover={{ x: 10 }}>
                🍽️ Fresh & Organic Ingredients
              </motion.li>

              <motion.li whileHover={{ x: 10 }}>
                👨‍🍳 Expert International Chefs
              </motion.li>

              <motion.li whileHover={{ x: 10 }}>
                🥗 Multi-Cuisine Menu
              </motion.li>

              <motion.li whileHover={{ x: 10 }}>
                🕯️ Luxury Fine Dining Experience
              </motion.li>

            </ul>

            <motion.button
              whileHover={{
                scale: 1.08,
              }}
              whileTap={{
                scale: 0.95,
              }}
              className="bg-blue-600 hover:bg-blue-700 px-8 py-3 rounded-xl transition"
            >
              Discover More
            </motion.button>

          </motion.div>

        </div>

      </div>
    </div>
  );
}