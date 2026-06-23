"use client";

import {
  BedDouble,
  Wifi,
  Utensils,
  Waves,
  Star,
  ArrowRight,
  ChevronDown,
} from "lucide-react";

import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import {
  motion,
  AnimatePresence,
  useScroll,
  useTransform,
  useViewportScroll,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

import "swiper/css";
import "swiper/css/pagination";
import Link from "next/link";

// Reusable animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const slideInFromLeft = {
  hidden: { opacity: 0, x: -60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const slideInFromRight = {
  hidden: { opacity: 0, x: 60 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.8,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const scaleIn = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: [0.33, 1, 0.68, 1],
    },
  },
};

const Section = ({ children, className = "" }) => {
  const ref = useRef(null);
  const [isInView, setIsInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, []);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={containerVariants}
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default function Home() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // HOTEL SLIDER DATA
  const premiumRooms = [
    {
      name: "Royal Deluxe Room",
      image:
        "https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop",
      price: "$299",
    },
    {
      name: "Luxury Presidential Suite",
      image:
        "https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop",
      price: "$499",
    },
    {
      name: "Premium Honeymoon Suite",
      image:
        "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&w=2070&auto=format&fit=crop",
      price: "$399",
    },
    {
      name: "VVIP Royal Hall",
      image:
        "https://images.unsplash.com/photo-1611892440504-42a792e24d32?q=80&w=2070&auto=format&fit=crop",
      price: "$699",
    },
  ];

  // TESTIMONIALS DATA
  const testimonials = [
    {
      name: "Ali Khan",
      role: "Business Traveler",
      text: "Amazing hotel experience! Rooms were clean and service was excellent.",
      rating: 5,
    },
    {
      name: "Sara Ahmed",
      role: "Tourist",
      text: "Luxury stay with beautiful environment. Highly recommended!",
      rating: 5,
    },
    {
      name: "John Doe",
      role: "CEO",
      text: "Best hotel management system experience I ever had.",
      rating: 5,
    },
  ];

  // FEATURES DATA
  const features = [
    {
      icon: <BedDouble className="w-8 h-8 text-blue-500" />,
      title: "Luxury Rooms",
      desc: "Experience premium comfort with modern luxury rooms.",
    },
    {
      icon: <Wifi className="w-8 h-8 text-blue-500" />,
      title: "Free WiFi",
      desc: "High-speed internet available in all hotel areas.",
    },
    {
      icon: <Utensils className="w-8 h-8 text-blue-500" />,
      title: "Restaurant",
      desc: "Delicious international cuisines with luxury dining.",
    },
    {
      icon: <Waves className="w-8 h-8 text-blue-500" />,
      title: "Swimming Pool",
      desc: "Relax and enjoy our premium outdoor swimming pool.",
    },
  ];

  if (!mounted) return null;

  return (
    <div className="w-full overflow-hidden bg-white">
      {/* ===== HERO SECTION ===== */}
      <section className="relative h-screen bg-cover bg-center overflow-hidden">
        <motion.div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1566073771259-6a8506099945?q=80&w=2070&auto=format&fit=crop')",
          }}
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.2, ease: "easeOut" }}
        />

        {/* OVERLAY */}
        <motion.div
          className="absolute inset-0 bg-black/60"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        />

        {/* ANIMATED BACKGROUND ELEMENTS */}
        <motion.div
          className="absolute top-20 left-10 w-40 h-40 bg-blue-500 rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, -30, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-20 right-10 w-60 h-60 bg-purple-500 rounded-full opacity-20 blur-3xl"
          animate={{
            y: [0, 30, 0],
            x: [0, -20, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        {/* CONTENT */}
        <div className="relative z-10 flex items-center justify-center h-full text-center px-6">
          <motion.div
            initial="hidden"
            animate="visible"
            variants={containerVariants}
            className="w-full"
          >
            {/* SUBTITLE */}
            <motion.p
              variants={itemVariants}
              className="text-blue-400 uppercase tracking-[5px] mt-3 text-sm sm:text-base font-semibold"
            >
              Welcome To RoyalStay
            </motion.p>

            {/* MAIN TITLE */}
            <motion.h1
              variants={itemVariants}
              className="text-5xl md:text-7xl font-bold text-white leading-tight mt-4"
            >
              Luxury Hotel <br /> For Your Vacation
            </motion.h1>

            {/* DESCRIPTION */}
            <motion.p
              variants={itemVariants}
              className="text-gray-300 mt-6 max-w-2xl mx-auto text-lg leading-relaxed"
            >
              Enjoy unforgettable experiences with premium rooms, luxury
              services, and world-class hospitality.
            </motion.p>

            {/* BUTTONS */}
            <motion.div
              variants={itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link href='/room'>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 20px 25px rgba(59, 130, 246, 0.4)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-blue-600 hover:bg-blue-700 text-white rounded-full font-semibold flex items-center justify-center gap-2 transition duration-300"
              >
               
                Book Now
                <ArrowRight size={20} />
              </motion.button>
               </Link>
               <Link href='/services'>
              <motion.button
                whileHover={{
                  scale: 1.05,
                  backgroundColor: "rgba(255, 255, 255, 0.1)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 border border-white text-white rounded-full font-semibold transition duration-300"
              >
                Explore More
              </motion.button>
              </Link>
            </motion.div>
          </motion.div>
        </div>

        {/* SCROLL INDICATOR */}
        <motion.div
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20"
          animate={{ y: [0, 10, 0] }}
          transition={{
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        >
          <ChevronDown className="w-6 h-6 text-white" />
        </motion.div>
      </section>

      {/* ===== PREMIUM ROOMS SLIDER ===== */}
      <section className="py-24 bg-gradient-to-br from-[#0B1120] to-[#1a1f3a] relative overflow-hidden">
        {/* BACKGROUND ELEMENTS */}
        <motion.div
          className="absolute top-0 right-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl -z-10"
          animate={{
            x: [0, 30, 0],
            y: [0, -30, 0],
          }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 left-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl -z-10"
          animate={{
            x: [0, -30, 0],
            y: [0, 30, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <Section>
            {/* SECTION HEADER */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.p
                variants={itemVariants}
                className="text-blue-500 uppercase tracking-[5px] mb-3 font-semibold"
              >
                Premium Rooms
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                Explore Our Luxury Collection
              </motion.h2>
            </motion.div>
          </Section>

          {/* SWIPER SLIDER */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Swiper
              slidesPerView={1}
              spaceBetween={30}
              loop={true}
              autoplay={{
                delay: 3000,
                disableOnInteraction: false,
              }}
              pagination={{
                clickable: true,
              }}
              breakpoints={{
                768: {
                  slidesPerView: 2,
                },
                1024: {
                  slidesPerView: 3,
                },
              }}
              modules={[Autoplay, Pagination]}
            >
              {premiumRooms.map((room, index) => (
                <SwiperSlide key={index}>
                  <motion.div
                    initial={{ opacity: 0, y: 40 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ y: -10 }}
                    className="group bg-white/10 border border-white/20 rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300"
                  >
                    {/* IMAGE CONTAINER */}
                    <div className="relative overflow-hidden h-[320px]">
                      <motion.img
                        src={room.image}
                        alt={room.name}
                        className="h-full w-full object-cover"
                        whileHover={{ scale: 1.1 }}
                        transition={{ duration: 0.6 }}
                      />
                      <motion.div
                        className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"
                        initial={{ opacity: 0 }}
                        whileHover={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                      />
                    </div>

                    {/* CONTENT */}
                    <div className="p-6">
                      <motion.h3
                        className="text-2xl font-bold text-white mb-3"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.2 }}
                      >
                        {room.name}
                      </motion.h3>

                      <motion.p
                        className="text-gray-400 mb-5"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        transition={{ duration: 0.5, delay: 0.3 }}
                      >
                        Premium luxury room with elegant interior and modern
                        comfort.
                      </motion.p>

                      <motion.button
                        whileHover={{ scale: 1.05, gap: "12px" }}
                        whileTap={{ scale: 0.95 }}
                        className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 px-6 py-3 rounded-xl transition-all text-white font-semibold flex items-center gap-2"
                      >
                        View Details
                        <motion.span
                          animate={{ x: [0, 5, 0] }}
                          transition={{
                            duration: 2,
                            repeat: Infinity,
                          }}
                        >
                          <ArrowRight size={16} />
                        </motion.span>
                      </motion.button>
                    </div>
                  </motion.div>
                </SwiperSlide>
              ))}
            </Swiper>
          </motion.div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section className="py-24 bg-gradient-to-br from-gray-50 to-gray-100 relative overflow-hidden">
        {/* BACKGROUND ELEMENTS */}
        <motion.div
          className="absolute top-10 left-10 w-80 h-80 bg-blue-200 rounded-full opacity-20 blur-3xl -z-10"
          animate={{
            scale: [1, 1.2, 1],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-7xl mx-auto px-6">
          <Section>
            {/* SECTION HEADER */}
            <motion.div variants={itemVariants} className="text-center mb-16">
              <motion.p
                variants={itemVariants}
                className="text-blue-600 uppercase tracking-[4px] mb-3 font-semibold"
              >
                Hotel Features
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-gray-900"
              >
                Why Choose Our Hotel
              </motion.h2>
            </motion.div>

            {/* FEATURES GRID */}
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8"
              variants={containerVariants}
            >
              {features.map((item, index) => (
                <motion.div
                  key={index}
                  variants={scaleIn}
                  whileHover={{
                    y: -10,
                    boxShadow:
                      "0 25px 50px rgba(59, 130, 246, 0.15)",
                  }}
                  className="bg-white p-8 rounded-3xl shadow-lg transition-all duration-300"
                >
                  <motion.div
                    className="mb-5"
                    whileHover={{ scale: 1.2, rotate: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    {item.icon}
                  </motion.div>

                  <motion.h3 className="text-2xl font-semibold mb-3 text-gray-900">
                    {item.title}
                  </motion.h3>

                  <motion.p className="text-gray-600 leading-relaxed">
                    {item.desc}
                  </motion.p>
                </motion.div>
              ))}
            </motion.div>
          </Section>
        </div>
      </section>

      {/* ===== ABOUT SECTION ===== */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center"
          >
            {/* IMAGE */}
            <motion.div variants={slideInFromLeft} className="overflow-hidden rounded-3xl">
              <motion.img
                src="https://images.unsplash.com/photo-1582719478250-c89cae4dc85b?q=80&w=2070&auto=format&fit=crop"
                alt="Hotel"
                className="rounded-3xl shadow-2xl"
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.6 }}
              />
            </motion.div>

            {/* CONTENT */}
            <motion.div variants={slideInFromRight}>
              <motion.p
                variants={itemVariants}
                className="text-blue-600 uppercase tracking-[4px] mb-4 font-semibold"
              >
                About Us
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-gray-900 leading-snug mb-6"
              >
                Enjoy Luxury Experience With Our Hotel
              </motion.h2>

              <motion.p
                variants={itemVariants}
                className="text-gray-600 leading-relaxed mb-6 text-lg"
              >
                Our hotel provides world-class hospitality, modern facilities,
                and unforgettable experiences for business and vacation
                travelers.
              </motion.p>

              <motion.button
                variants={itemVariants}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 15px 30px rgba(59, 130, 246, 0.3)",
                }}
                whileTap={{ scale: 0.95 }}
                className="px-8 py-4 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 text-white rounded-full font-semibold flex items-center gap-2 transition-all duration-300"
              >
                Discover More
                <ArrowRight size={20} />
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* ===== TESTIMONIAL SECTION ===== */}
      <section className="py-24 bg-gradient-to-br from-[#0B1120] to-[#1a1f3a] relative overflow-hidden">
        {/* BACKGROUND ELEMENTS */}
        <motion.div
          className="absolute top-0 left-0 w-96 h-96 bg-blue-600 rounded-full opacity-10 blur-3xl -z-10"
          animate={{
            scale: [1, 1.3, 1],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />
        <motion.div
          className="absolute bottom-0 right-0 w-96 h-96 bg-purple-600 rounded-full opacity-10 blur-3xl -z-10"
          animate={{
            scale: [1.3, 1, 1.3],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-6xl mx-auto px-6">
          <Section>
            {/* SECTION HEADER */}
            <motion.div variants={itemVariants} className="text-center mb-14">
              <motion.p
                variants={itemVariants}
                className="text-blue-500 uppercase tracking-[5px] mb-3 font-semibold"
              >
                Testimonials
              </motion.p>

              <motion.h2
                variants={itemVariants}
                className="text-4xl md:text-5xl font-bold text-white"
              >
                What Our Guests Say
              </motion.h2>
            </motion.div>
          </Section>

          {/* TESTIMONIALS GRID */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
            variants={containerVariants}
            className="grid md:grid-cols-3 gap-8"
          >
            {testimonials.map((t, i) => (
              <motion.div
                key={i}
                variants={itemVariants}
                whileHover={{
                  y: -10,
                  boxShadow: "0 25px 50px rgba(59, 130, 246, 0.3)",
                  borderColor: "rgba(59, 130, 246, 0.5)",
                }}
                className="bg-white/10 border border-white/20 p-8 rounded-3xl shadow-xl relative overflow-hidden group"
              >
                {/* ANIMATED BORDER */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-3xl"
                  animate={{
                    borderColor: [
                      "rgba(59, 130, 246, 0)",
                      "rgba(59, 130, 246, 0.5)",
                      "rgba(59, 130, 246, 0)",
                    ],
                  }}
                  transition={{
                    duration: 3,
                    repeat: Infinity,
                  }}
                  style={{ pointerEvents: "none" }}
                />

                {/* QUOTE MARK */}
                <motion.span
                  className="text-6xl text-blue-500 absolute top-4 right-6 opacity-30"
                  animate={{ rotate: [0, 5, 0] }}
                  transition={{
                    duration: 4,
                    repeat: Infinity,
                  }}
                >
                  "
                </motion.span>

                {/* STARS */}
                <motion.div
                  className="flex gap-1 mb-4 text-yellow-400"
                  initial="hidden"
                  whileInView="visible"
                  variants={{
                    visible: {
                      transition: {
                        staggerChildren: 0.1,
                      },
                    },
                  }}
                >
                  {[...Array(t.rating)].map((_, i) => (
                    <motion.div
                      key={i}
                      variants={{
                        hidden: { opacity: 0, scale: 0 },
                        visible: {
                          opacity: 1,
                          scale: 1,
                          transition: { duration: 0.3 },
                        },
                      }}
                    >
                      <Star size={16} fill="currentColor" />
                    </motion.div>
                  ))}
                </motion.div>

                {/* TEXT */}
                <motion.p
                  className="text-gray-300 mb-6 leading-relaxed relative z-10"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.2 }}
                >
                  {t.text}
                </motion.p>

                {/* USER INFO */}
                <motion.div
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 0.6, delay: 0.3 }}
                >
                  <motion.h4 className="text-white font-bold text-lg">
                    {t.name}
                  </motion.h4>

                  <motion.p className="text-gray-400 text-sm">
                    {t.role}
                  </motion.p>
                </motion.div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* CTA SECTION */}
      <section className="py-24 bg-gradient-to-r from-blue-600 to-blue-800 relative overflow-hidden">
        <motion.div
          className="absolute inset-0"
          animate={{
            backgroundPosition: ["0% 0%", "100% 100%"],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
        />

        <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-4xl md:text-5xl font-bold text-white mb-6"
          >
            Ready for Your Dream Vacation?
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="text-xl text-blue-100 mb-8"
          >
            Book now and enjoy an unforgettable luxury experience
          </motion.p>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            whileHover={{
              scale: 1.05,
              boxShadow: "0 25px 50px rgba(255, 255, 255, 0.3)",
            }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-4 bg-white text-blue-600 font-bold rounded-full hover:bg-gray-100 transition-all duration-300 flex items-center gap-2 mx-auto"
          >
            Book Your Stay
            <ArrowRight size={20} />
          </motion.button>
        </div>
      </section>
    </div>
  );
}
