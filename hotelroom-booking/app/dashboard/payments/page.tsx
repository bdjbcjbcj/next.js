'use client'
import Sidebar from "@/components/Sidebar";
import { useEffect, useState } from "react";

export default function PaymentsPage() {
  const [bookings, setBookings] = useState([]);
    
      // FETCH Name ,Emails
      const fetchBookings = async () => {
        const res = await fetch("/api/booking");
        const data = await res.json();
    
        if (data.success) {
          setBookings(data.bookings);
        }
      };
  
      
       useEffect(() => {
          fetchBookings();
        }, []);
  return (
    <div className="flex">
      <Sidebar />

      <div className="ml-64 p-8 w-full">
        <h1 className="text-3xl font-bold mb-6 mt-20">
          Payments
        </h1>

        <div className="grid grid-cols-2 gap-6">
          {bookings.map((payment) => (
            <div
              key={payment._id}
              className="bg-white p-6 rounded-xl shadow-md"
            >
              <h2 className="text-2xl font-bold mb-2">
                {payment.name}
              </h2>

              <p>Amount: {payment.roomPrice}</p>
              <p>Status: Pending </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}