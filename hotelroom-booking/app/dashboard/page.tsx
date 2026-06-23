"use client";

import Sidebar from "@/components/Sidebar";
import DashboardCard from "@/components/DashboardCard";
import { ToastContainer, toast } from "react-toastify";
import { useRouter } from "next/navigation";


export default function Dashboard() {
  const router = useRouter();

  const handleLogout = async () => {
   

 try {
      await fetch("/api/logout", {
        method: "POST",
      });

      localStorage.removeItem("token");
     

      toast.success("Logged out successfully");

      setTimeout(() => {
        router.push("/login");
      }, 800);

    } catch (error) {
      toast.error("Logout failed");
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">

      {/* SIDEBAR */}
      <Sidebar />

      {/* MAIN CONTENT */}
      <div className="flex-1 ml-64 p-8">

        <ToastContainer theme="dark" />

        {/* HEADER */}
        <div className="flex justify-between items-center mt-20 mb-8">

          <h1 className="text-4xl font-bold text-gray-800">
            Dashboard
          </h1>

          {/* LOGOUT BUTTON */}
          <button
            onClick={handleLogout}
            className="bg-red-600 hover:bg-red-700 text-white px-4 py-2 rounded-xl transition"
          >
            Logout
          </button>

        </div>

        {/* CARDS */}
        <div className="grid grid-cols-4 gap-6">
          <DashboardCard title="Total Rooms" value="10" />
          <DashboardCard title="Available Rooms" value="6" />
          <DashboardCard title="Bookings" value="4" />
          <DashboardCard title="Revenue" value="$9,000" />
        </div>

      </div>
    </div>
  );
}