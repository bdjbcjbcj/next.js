"use client";

import { useState } from "react";

import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Send,
} from "lucide-react";

import {
  FaFacebookF,
  FaInstagram,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";

import { toast, ToastContainer } from "react-toastify";

import { motion } from "framer-motion";

export default function ContactPage() {

  // FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    number: "",
    message: "",
  });

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState("");
  const [error, setError] = useState("");

  // HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT FORM
  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    setSuccess("");
    setError("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",

        headers: {
          "Content-Type": "application/json",
        },

        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (data.success) {

        toast.success("Message sent successfully!");

        setFormData({
          name: "",
          email: "",
          number: "",
          message: "",
        });

      } else {

        setError(data.message || "Something went wrong");

      }

    } catch (err) {

      setError("Server error. Please try again.");

    } finally {

      setLoading(false);

    }
  };

  // ANIMATION VARIANTS
  const fadeUp = {
    hidden: {
      opacity: 0,
      y: 60,
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

      <ToastContainer />

      {/* HERO */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-center py-20"
      >

        <h1 className="text-5xl font-bold my-4">
          Contact Us
        </h1>

        <p className="text-gray-400">
          We are here to help you 24/7 for bookings and inquiries
        </p>

      </motion.div>

      {/* MAIN GRID */}
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">

        {/* LEFT INFO */}
        <motion.div
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >

          <h2 className="text-3xl font-bold mb-8">
            Get In Touch
          </h2>

          <div className="space-y-6">

            {[
              {
                icon: <MapPin className="text-blue-500" />,
                text: "New York, USA - RoyalStay Hotel Street",
              },

              {
                icon: <Phone className="text-blue-500" />,
                text: "+1 234 567 890",
              },

              {
                icon: <Mail className="text-blue-500" />,
                text: "support@royalstay.com",
              },

              {
                icon: <Clock className="text-blue-500" />,
                text: "24/7 Customer Support",
              },
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                custom={index}
                whileHover={{
                  scale: 1.03,
                  x: 10,
                }}
                className="flex items-center gap-4 bg-white/10 p-5 rounded-2xl border border-white/20 backdrop-blur-lg"
              >

                <motion.div
                  whileHover={{
                    rotate: 15,
                    scale: 1.2,
                  }}
                >
                  {item.icon}
                </motion.div>

                <p>{item.text}</p>

              </motion.div>
            ))}

          </div>

          {/* SOCIAL */}
          <div className="flex gap-4 mt-8">

            {[
              {
                icon: <FaFacebookF />,
                color: "hover:bg-blue-600",
              },

              {
                icon: <FaInstagram />,
                color: "hover:bg-pink-600",
              },

              {
                icon: <FaTwitter />,
                color: "hover:bg-sky-500",
              },

              {
                icon: <FaWhatsapp />,
                color: "hover:bg-green-500",
              },
            ].map((social, i) => (
              <motion.div
                key={i}
                whileHover={{
                  scale: 1.15,
                  rotate: 10,
                }}

                whileTap={{
                  scale: 0.9,
                }}

                className={`w-11 h-11 flex items-center justify-center rounded-full bg-white/10 cursor-pointer transition ${social.color}`}
              >
                {social.icon}
              </motion.div>
            ))}

          </div>

        </motion.div>

        {/* RIGHT FORM */}
        <motion.div
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          whileHover={{
            scale: 1.01,
          }}
          className="bg-white/10 border border-white/20 p-8 rounded-3xl backdrop-blur-lg"
        >

          <h2 className="text-3xl font-bold mb-6">
            Send Message
          </h2>

          <form onSubmit={handleSubmit} className="space-y-4">

            {/* INPUTS */}
            {[
              {
                name: "name",
                type: "text",
                placeholder: "Your Name",
              },

              {
                name: "email",
                type: "email",
                placeholder: "Your Email",
              },

              {
                name: "number",
                type: "text",
                placeholder: "Phone No",
              },
            ].map((input, index) => (
              <motion.input
                key={index}
                whileFocus={{
                  scale: 1.02,
                }}
                name={input.name}
                value={formData[input.name]}
                onChange={handleChange}
                type={input.type}
                placeholder={input.placeholder}
                className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none"
              />
            ))}

            {/* TEXTAREA */}
            <motion.textarea
              whileFocus={{
                scale: 1.02,
              }}
              name="message"
              value={formData.message}
              onChange={handleChange}
              rows="5"
              placeholder="Your Message"
              className="w-full p-3 rounded-xl bg-white/10 border border-white/20 outline-none resize-none"
            />

            {/* BUTTON */}
            <motion.button
              whileHover={{
                scale: 1.03,
              }}

              whileTap={{
                scale: 0.95,
              }}

              type="submit"
              disabled={loading}
              className="w-full bg-blue-600 hover:bg-blue-700 transition py-3 rounded-xl flex items-center justify-center gap-2 font-medium"
            >

              {loading ? "Sending..." : "Send Message"}

              <motion.div
                animate={{
                  x: [0, 5, 0],
                }}

                transition={{
                  repeat: Infinity,
                  duration: 1.5,
                }}
              >
                <Send size={18} />
              </motion.div>

            </motion.button>

            {/* SUCCESS / ERROR */}
            {success && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-green-400 text-center mt-3"
              >
                {success}
              </motion.p>
            )}

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-red-400 text-center mt-3"
              >
                {error}
              </motion.p>
            )}

          </form>

        </motion.div>

      </div>

      {/* MAP */}
      <motion.div
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mt-20"
      >

        <div className="bg-white rounded-3xl overflow-hidden shadow-2xl">

          <div className="p-6 border-b border-gray-200">

            <h2 className="text-2xl font-bold text-gray-800">
              Our Location
            </h2>

            <p className="text-gray-500">
              Visit RoyalStay Hotel anytime
            </p>

          </div>

          <motion.iframe
            whileHover={{
              scale: 1.01,
            }}
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3021.8737241905453!2d-73.985428!3d40.748817"
            width="100%"
            height="450"
            className="border-0"
            loading="lazy"
          ></motion.iframe>

        </div>

      </motion.div>

    </div>
  );
}