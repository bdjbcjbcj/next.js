"use client";

import Sidebar from "@/components/Sidebar";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast, ToastContainer } from "react-toastify";

const Page = () => {

  const [bookings, setBookings] = useState([]);

  // FETCH BOOKINGS
  const fetchBookings = async () => {

    try {

      const response = await fetch("/api/contact");

      const data = await response.json();

      if (data.success) {
        setBookings(data.contacts);
      }

    } catch (error) {
      console.log(error);
    }
  };

  // DELETE BOOKING
   const deleteBooking = async (id) => {

    try {

      const res = await axios.delete(`/api/contact?id=${id}`);

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

  // LOAD DATA
  useEffect(() => {
    fetchBookings();
  }, []);

  return (
    <div className="flex">
        <ToastContainer theme="dark"/>

      <Sidebar />

      <div className="ml-64 p-8 w-full">

        <h1 className="text-3xl font-bold mb-6">
          Bookings
        </h1>

        <table className="w-full bg-white rounded-xl shadow-md overflow-hidden">

          <thead className="bg-blue-600 text-white">
            <tr>
              <th className="p-4">Name</th>
              <th className="p-4">Email</th>
              <th className="p-4">Phone no</th>
              <th className="p-4">Message</th>
              <th className="p-4">Delete</th>
            </tr>
          </thead>

          <tbody>

            {bookings.map((item) => (

              <tr
                key={item._id}
                className="text-center border-b"
              >
                <td className="p-4">{item.name}</td>

                <td className="p-4">{item.email}</td>

                <td className="p-4">{item.number}</td>

                <td className="p-4">{item.message}</td>

                <td className="p-4">

                  <button
                    onClick={() => deleteBooking(item._id)}
                    className="bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-lg"
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
};

export default Page;