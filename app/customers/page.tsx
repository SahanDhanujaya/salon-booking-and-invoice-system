"use client";
import CustomerForm from "@/components/forms/CustomerForm";
import {
  Users,
  UserPlus,
  UserCheck,
  BadgeDollarSign,
  Mail,
  Phone,
  CalendarDays,
  Star,
} from "lucide-react";
import { useState } from "react";

const customers = [
  {
    name: "Nethmi Perera",
    email: "nethmi@example.com",
    phone: "+94 77 123 4567",
    visits: 12,
    joined: "Jan 12, 2026",
    status: "Active",
    loyalty: "Gold",
  },
  {
    name: "Kavindi Silva",
    email: "kavindi@example.com",
    phone: "+94 71 987 6543",
    visits: 8,
    joined: "Feb 03, 2026",
    status: "Active",
    loyalty: "Silver",
  },
  {
    name: "Sanduni Fernando",
    email: "sanduni@example.com",
    phone: "+94 76 456 7890",
    visits: 15,
    joined: "Dec 28, 2025",
    status: "VIP",
    loyalty: "Platinum",
  },
  {
    name: "Tharushi Jayasekara",
    email: "tharushi@example.com",
    phone: "+94 75 222 3344",
    visits: 4,
    joined: "Mar 14, 2026",
    status: "New",
    loyalty: "Bronze",
  },
];

const recentActivities = [
  {
    name: "Nethmi Perera",
    activity: "Booked Hair Cut & Styling",
    date: "Today, 10:30 AM",
    status: "Confirmed",
  },
  {
    name: "Kavindi Silva",
    activity: "Completed Facial Treatment",
    date: "Today, 12:15 PM",
    status: "Completed",
  },
  {
    name: "Sanduni Fernando",
    activity: "Paid Bridal Package Invoice",
    date: "Yesterday, 5:20 PM",
    status: "Paid",
  },
  {
    name: "Tharushi Jayasekara",
    activity: "Registered as new customer",
    date: "Today, 9:00 AM",
    status: "New",
  },
];

const CustomersPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  if (isFormOpen) {
    return (
      <CustomerForm onClose={() => setIsFormOpen(false)} />
    )
  }
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Customers</h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage customer profiles, visit history, loyalty levels, and recent activity.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Customers</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">248</h2>
            </div>
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">New This Month</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">32</h2>
            </div>
            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <UserPlus className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Returning Customers</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">174</h2>
            </div>
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <UserCheck className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">VIP Customers</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">18</h2>
            </div>
            <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
              <BadgeDollarSign className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Customer Profiles</h2>
            <button onClick={() => setIsFormOpen(true)} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Add Customer
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {customers.map((customer) => (
              <div
                key={customer.email}
                className="rounded-2xl border border-gray-100 p-4 transition hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {customer.name}
                    </h3>
                    <p className="text-sm text-blue-600">{customer.loyalty} Member</p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      customer.status === "VIP"
                        ? "bg-yellow-100 text-yellow-700"
                        : customer.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {customer.status}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>{customer.email}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>{customer.phone}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4 text-gray-400" />
                    <span>Joined: {customer.joined}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{customer.visits} Visits</span>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-xl bg-gray-100 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    View
                  </button>
                  <button className="flex-1 rounded-xl bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700">
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Loyalty Summary
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Platinum</span>
                <span className="font-semibold text-gray-800">8 Customers</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Gold</span>
                <span className="font-semibold text-gray-800">24 Customers</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Silver</span>
                <span className="font-semibold text-gray-800">56 Customers</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Bronze</span>
                <span className="font-semibold text-gray-800">160 Customers</span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Quick Summary
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Most Loyal</span>
                <span className="font-semibold text-gray-800">Sanduni Fernando</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Newest Customer</span>
                <span className="font-semibold text-gray-800">Tharushi Jayasekara</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Top Segment</span>
                <span className="font-semibold text-gray-800">Returning</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Avg. Monthly Visits</span>
                <span className="font-semibold text-gray-800">6.4</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Recent Customer Activity
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="px-3 py-3 font-medium">Customer Name</th>
                <th className="px-3 py-3 font-medium">Activity</th>
                <th className="px-3 py-3 font-medium">Date</th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr
                  key={`${activity.name}-${activity.date}`}
                  className="border-b last:border-b-0"
                >
                  <td className="px-3 py-4 font-medium text-gray-800">
                    {activity.name}
                  </td>
                  <td className="px-3 py-4 text-gray-600">
                    {activity.activity}
                  </td>
                  <td className="px-3 py-4 text-gray-600">{activity.date}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        activity.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : activity.status === "Confirmed"
                          ? "bg-blue-100 text-blue-600"
                          : activity.status === "Paid"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-yellow-100 text-yellow-700"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default CustomersPage;