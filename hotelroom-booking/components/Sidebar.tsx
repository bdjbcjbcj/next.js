import Link from "next/link";

export default function Sidebar() {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white p-5 fixed">
      <h2 className="text-2xl font-bold mb-10">
        Hotel Admin
      </h2>

      <div className="flex flex-col gap-4">
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/dashboard/rooms">Rooms</Link>
        <Link href="/dashboard/bookings">Bookings</Link>
        <Link href="/dashboard/customers">Customers</Link>
        <Link href="/dashboard/payments">Payments</Link>
        <Link href="/dashboard/forms">Forms</Link>
      </div>
    </div>
  )
}