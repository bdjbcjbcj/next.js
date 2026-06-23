"use client";

import {
  useParams,
  useSearchParams,
} from "next/navigation";

import { useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function BookingPage() {

  // GET URL PARAMS
  const params = useParams();

  // GET QUERY PARAMS
  const searchParams = useSearchParams();

  // ROOM DATA
  const roomId = params.id;

  const roomName = searchParams.get("name");

  const roomPrice = searchParams.get("price");

  // FORM STATE
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    checkIn: "",
    checkOut: "",
  });

  // HANDLE CHANGE
  const handleChange = (e) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  // SUBMIT
 const handleSubmit = async (e) => {
  e.preventDefault();

  try {
    const res = await fetch("/api/booking", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        ...formData,
        roomId,
        roomName,
        roomPrice,
      }),
    });

    const data = await res.json();

    if (data.success) {
      toast.success("Room Booked Successfully ✅");

      // reset form
      setFormData({
        name: "",
        email: "",
        phone: "",
        checkIn: "",
        checkOut: "",
      });
    } else {
      alert(data.message);
    }

  } catch (error) {
    console.log(error);
    alert("Something went wrong ❌");
  }
};
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center p-6">
        <ToastContainer theme="dark"/>

      <div className="bg-white shadow-xl rounded-2xl p-8 mt-6 w-full max-w-2xl">

        <h1 className="text-3xl font-bold mb-2 text-center">
          Book {roomName}
        </h1>

        <div className="mb-6 text-center">
             <p className="text-2xl text-blue-600 font-semibold">
            {roomPrice}
          </p>

          <p className="text-sm mt-1 text-gray-500">
            Room ID:{roomId}
          </p>

         

        </div>

        <form
          onSubmit={handleSubmit}
          className="space-y-5"
        >

          <input
            type="text"
            name="name"
            placeholder="Enter Your Name"
             value={formData.name}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <input
            type="email"
            name="email"
            placeholder="Enter Your Email"
             value={formData.email}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <input
            type="text"
            name="phone"
            placeholder="Enter Phone Number"
             value={formData.phone}
            onChange={handleChange}
            className="w-full border p-3 rounded-xl"
            required
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

            <div>

              <label className="block mb-2 font-medium">
                Check In
              </label>

              <input
                type="date"
                name="checkIn"
                 value={formData.checkIn}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
                required
              />

            </div>

            <div>

              <label className="block mb-2 font-medium">
                Check Out
              </label>

              <input
                type="date"
                name="checkOut"
                 value={formData.checkOut}
                onChange={handleChange}
                className="w-full border p-3 rounded-xl"
                required
              />

            </div>

          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-xl text-lg"
          >
            Confirm Booking
          </button>

        </form>

      </div>
    </div>
  );
}