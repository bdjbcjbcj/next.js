"use client";

import {
  Star,
  Wifi,
  Tv,
  Bath,
  BedDouble,
  Waves,
  Coffee,
} from "lucide-react";

import Link from "next/link";

import { motion } from "framer-motion";

export default function RoomsPage() {
  // NORMAL ROOMS
  const rooms = [
    {
      id: 101,
      type: "Deluxe Room",
      price: "$120 / Day",
      desc: "Comfortable modern room with city view, king bed, and premium facilities.",
      img: "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 102,
      type: "Luxury Suite",
      price: "$250 / Night",
      desc: "Spacious luxury suite with ocean view, living area, and VIP services.",
      img: "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 103,
      type: "Single Room",
      price: "$70 / Day",
      desc: "Perfect for solo travelers with cozy bed and essential amenities.",
      img: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 104,
      type: "Presidential Suite",
      price: "$500 / Night",
      desc: "Ultra luxury suite with private lounge, jacuzzi, and premium services.",
      img: "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 105,
      type: "Family Room",
      price: "$180 / Night",
      desc: "Large room for families with multiple beds and entertainment setup.",
      img: "https://images.unsplash.com/photo-1590490360182-c33d57733427?q=80&w=2070&auto=format&fit=crop",
    },
    {
      id: 106,
      type: "Honeymoon Suite",
      price: "$300 / Day",
      desc: "Romantic suite with special decoration, privacy, and luxury comfort.",
      img: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  // VVIP ROOMS
  const vvipRooms = [
    {
      id: 201,
      title: "VVIP Royal Suite",
      image:
        "https://images.unsplash.com/photo-1551882547-ff40c63fe5fa?q=80&w=2070&auto=format&fit=crop",
      price: "$450 / Night",
      floor: "Ground Floor",
      bed: "King Double Bed",
      features: [
        "Private Pool",
        "Luxury Bathroom",
        "Smart TV",
        "Free Breakfast",
      ],
    },
    {
      id: 202,
      title: "Presidential Suite",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
      price: "$550 / Day",
      floor: "Ground Floor",
      bed: "Double Deluxe Bed",
      features: ["Sea View", "Mini Bar", "Jacuzzi", "24/7 Room Service"],
    },
  ];

  // CUSTOMER REVIEWS
  const reviews = [
    {
      id: 1,
      name: "Ali Khan",
      rating: 5,
      review:
        "Amazing VVIP experience! The room was super clean and luxurious.",
    },
    {
      id: 2,
      name: "Sara Ahmed",
      rating: 5,
      review:
        "Best hotel service ever. The double bed room was extremely comfortable.",
    },
    {
      id: 3,
      name: "John Smith",
      rating: 4,
      review:
        "Beautiful ground floor room with premium facilities and great staff.",
    },
  ];

  // ANIMATION VARIANTS
  const fadeUp = {
    hidden: { opacity: 0, y: 60 },
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
    <div className="min-h-screen bg-[#0B1120] text-white py-20 overflow-hidden">
      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: -40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 px-6"
      >
        <h1 className="text-5xl font-bold mb-4">Our Luxury Rooms</h1>

        <p className="text-gray-400">
          Choose your perfect stay from our premium hotel collection
        </p>
      </motion.div>

      {/* NORMAL ROOMS */}
      <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 mb-24">
        {rooms.map((room, index) => (
          <motion.div
            key={room.id}
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            custom={index}
            whileHover={{ scale: 1.04 }}
            className="bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-xl backdrop-blur-lg"
          >
            <motion.img
              src={room.img}
              alt={room.type}
              className="h-56 w-full object-cover"
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.4 }}
            />

            <div className="p-6">
              <div className="flex justify-between items-center mb-3">
                <h2 className="text-2xl font-semibold">{room.type}</h2>

                <span className="text-blue-400 font-bold">
                  {room.price}
                </span>
              </div>

              <p className="text-gray-400 text-sm mb-4">
                Room No:
                <span className="text-white ml-2">{room.id}</span>
              </p>

              <p className="text-gray-300 text-sm leading-relaxed mb-6">
                {room.desc}
              </p>

              <Link
                href={{
                  pathname: `/booking/${room.id}`,
                  query: {
                    name: room.type,
                    price: room.price,
                  },
                }}
              >
                <motion.button
                  whileTap={{ scale: 0.9 }}
                  whileHover={{ scale: 1.05 }}
                  className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl"
                >
                  Book Now
                </motion.button>
              </Link>
            </div>
          </motion.div>
        ))}
      </div>

      {/* VVIP SECTION */}
      <div className="px-6 mb-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <h2 className="text-5xl font-bold text-yellow-400 mb-4">
            VVIP Luxury Suites
          </h2>

          <p className="text-gray-300">
            Premium ground floor luxury rooms with world-class comfort
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-7xl mx-auto">
          {vvipRooms.map((room, index) => (
            <motion.div
              key={room.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{ y: -10 }}
              className="bg-white/10 backdrop-blur-lg rounded-3xl overflow-hidden shadow-xl"
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={room.image}
                  alt={room.title}
                  className="w-full h-[280px] object-cover"
                  whileHover={{ scale: 1.08 }}
                  transition={{ duration: 0.5 }}
                />

                <motion.span
                  animate={{
                    scale: [1, 1.1, 1],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="absolute top-4 left-4 bg-yellow-500 text-black px-4 py-1 rounded-full font-semibold"
                >
                  VVIP
                </motion.span>
              </div>

              <div className="p-6">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-2xl font-bold">{room.title}</h2>

                  <p className="text-yellow-400 font-bold">{room.price}</p>
                </div>

                {/* ROOM INFO */}
                <div className="flex flex-wrap gap-4 text-sm text-gray-300 mb-5">
                  <div className="flex items-center gap-2">
                    <BedDouble size={18} />
                    {room.bed}
                  </div>

                  <div className="flex items-center gap-2">
                    <Wifi size={18} />
                    Free Wifi
                  </div>

                  <div className="flex items-center gap-2">
                    <Tv size={18} />
                    Smart TV
                  </div>

                  <div className="flex items-center gap-2">
                    <Bath size={18} />
                    Luxury Bath
                  </div>
                </div>

                {/* FEATURES */}
                <div className="grid grid-cols-2 gap-3 mb-6">
                  {room.features.map((feature, index) => (
                    <motion.div
                      key={index}
                      whileHover={{ scale: 1.05 }}
                      className="bg-slate-800 p-3 rounded-xl text-sm"
                    >
                      {feature}
                    </motion.div>
                  ))}
                </div>

                {/* EXTRA SERVICES */}
                <motion.div
                  animate={{
                    y: [0, -5, 0],
                  }}
                  transition={{
                    repeat: Infinity,
                    duration: 2,
                  }}
                  className="flex gap-4 mb-6 text-yellow-400"
                >
                  <Coffee />
                  <Waves />
                </motion.div>

                <Link
                  href={{
                    pathname: `/booking/${room.id}`,
                    query: {
                      name: room.title,
                      price: room.price,
                    },
                  }}
                >
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.95 }}
                    className="w-full bg-yellow-500 hover:bg-yellow-400 text-black font-bold py-3 rounded-xl transition"
                  >
                    Book Now
                  </motion.button>
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* CUSTOMER REVIEWS */}
      <div className="px-6">
        <motion.h2
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-4xl font-bold text-center mb-10 text-yellow-400"
        >
          Customer Reviews
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {reviews.map((review, index) => (
            <motion.div
              key={review.id}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              custom={index}
              whileHover={{
                scale: 1.04,
                rotate: 1,
              }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl p-6 shadow-lg"
            >
              {/* STARS */}
              <div className="flex mb-4 text-yellow-400">
                {[...Array(review.rating)].map((_, i) => (
                  <motion.div
                    key={i}
                    animate={{
                      scale: [1, 1.2, 1],
                    }}
                    transition={{
                      repeat: Infinity,
                      duration: 2,
                      delay: i * 0.2,
                    }}
                  >
                    <Star fill="currentColor" size={20} />
                  </motion.div>
                ))}
              </div>

              {/* REVIEW */}
              <p className="text-gray-300 mb-5">
                "{review.review}"
              </p>

              {/* USER */}
              <div className="flex items-center gap-3">
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                  className="w-12 h-12 rounded-full bg-yellow-500 flex items-center justify-center text-black font-bold"
                >
                  {review.name.charAt(0)}
                </motion.div>

                <div>
                  <h3 className="font-semibold">{review.name}</h3>

                  <p className="text-sm text-gray-400">
                    Verified Customer
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}