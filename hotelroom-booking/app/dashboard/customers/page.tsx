'use client'
import Sidebar from "@/components/Sidebar";
import axios from "axios";
import { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

export default function CustomersPage() {
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
      <ToastContainer theme="dark"/>
      <Sidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6 mt-20">
          Customers
        </h1>

        <div className="bg-white rounded-xl shadow-md p-6">
          {bookings.map((customer) => (
            <div
              key={customer._id}
              className="border-b py-4 flex justify-between"
            >
              <div>
                <h2 className="font-bold">{customer.name}</h2>
                <p>{customer.email}</p>
              </div>

              <button
                    onClick={() => deleteBooking(customer._id)}
                    className="bg-red-500 hover:bg-green-700 text-white px-4 py-2 rounded-lg"
                  >
                    Delete
                  </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}