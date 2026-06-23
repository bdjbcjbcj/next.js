'use client'

import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function RoomsPage() {
   const [bookings, setBookings] = useState([]);
    
      // FETCH Name ,Emails
      const fetchBookings = async () => {
        const res = await fetch("/api/booking");
        const data = await res.json();
    
        if (data.success) {
          setBookings(data.bookings);
        }
      };
  
      // DELETE Emails ,Name
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
      <ToastContainer/>
      <Sidebar />

      <div className="ml-64 p-8 w-full">
        <div className="flex justify-between mb-6 mt-20">
          <h1 className="text-3xl font-bold">Booked Rooms</h1>

        </div>

        <div className="grid grid-cols-3 gap-6">
          {bookings.map((room) => (
            <div
              key={room._id}
              className="bg-white p-5 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold mb-2">
                Room {room.roomId}
              </h2>

              <p>Type: {room.roomName}</p>
              <p>Price: {room.roomPrice}</p>
              <p>Status: Booked</p>

              <div className="flex gap-3 mt-4">
                <button className="bg-yellow-500 text-white px-4 py-2 rounded-lg">
                  Edit
                </button>

                 <button
                    onClick={() => deleteBooking(room._id)}
                    className="bg-red-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}