"use client";

import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function BookingPage() {

  const [bookings, setBookings] = useState([]);

  // FETCH BOOKINGS
  const fetchBookings = async () => {
    const res = await fetch("/api/booking");
    const data = await res.json();

    if (data.success) {
      setBookings(data.bookings);
    }
  }; 
  
  // DELETE BOOKING
   const deleteBooking = async (id) => {

    try {

      const res = await axios.delete(`/api/booking?id=${id}`);

      if (res.data.success) {

        toast.success(res.data.message);

        // refresh list
        fetchBookings();

      } else {
        toast.error(res.data.message);
      }

    } catch (error) {

      console.log(error);

      toast.error("Delete failed");
    }
  };

  useEffect(() => {
    fetchBookings();
  }, []);

  

  return (
    <div className="flex">
      <ToastContainer theme="dark"/>
      <Sidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6 mt-20">
          Bookings
        </h1>

        <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">

          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Room ID</th>
              <th className="p-4">Check In</th>
              <th className="p-4">Check Out</th>
              <th className="p-4">Action</th>
            </tr>
          </thead>

          <tbody>

            {bookings.map((item) => (
              <tr
                key={item._id}
                className="text-center border-b"
              >
                <td className="p-4">{item.name}</td>
                <td className="p-4">{item.roomId}</td>
                <td className="p-4">{item.checkIn}</td>
                <td className="p-4">{item.checkOut}</td>

                <td className="p-4">
                  <button
                    onClick={() => deleteBooking(item._id)}
                    className="bg-red-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
                </td>

              </tr>
            ))}

          </tbody>

        </table>
      </div>
    </div>
  );
}