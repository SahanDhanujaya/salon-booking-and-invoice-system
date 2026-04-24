"use client";
import StaffForm from "@/components/forms/StaffForm";
import { StaffFormData } from "@/types/staff";
import {
  Users,
  UserCheck,
  UserX,
  Briefcase,
  Phone,
  Mail,
  Clock3,
  Star,
} from "lucide-react";
import { useState } from "react";

const staffMembers = [
  {
    name: "Nethmi Perera",
    role: "Senior Stylist",
    email: "nethmi@example.com",
    phone: "+94 77 123 4567",
    shift: "9:00 AM - 6:00 PM",
    status: "Active",
    rating: "4.9",
  },
  {
    name: "Kavindi Silva",
    role: "Hair Color Specialist",
    email: "kavindi@example.com",
    phone: "+94 71 987 6543",
    shift: "10:00 AM - 7:00 PM",
    status: "Active",
    rating: "4.8",
  },
  {
    name: "Sanduni Fernando",
    role: "Beautician",
    email: "sanduni@example.com",
    phone: "+94 76 456 7890",
    shift: "8:30 AM - 5:30 PM",
    status: "On Leave",
    rating: "4.7",
  },
  {
    name: "Tharushi Jayasekara",
    role: "Receptionist",
    email: "tharushi@example.com",
    phone: "+94 75 222 3344",
    shift: "9:00 AM - 5:00 PM",
    status: "Active",
    rating: "4.6",
  },
];

const recentActivities = [
  {
    name: "Nethmi Perera",
    action: "Completed 5 appointments",
    time: "Today, 11:30 AM",
    status: "Completed",
  },
  {
    name: "Kavindi Silva",
    action: "Started hair coloring session",
    time: "Today, 1:00 PM",
    status: "In Progress",
  },
  {
    name: "Sanduni Fernando",
    action: "Marked leave for today",
    time: "Today, 8:00 AM",
    status: "On Leave",
  },
  {
    name: "Tharushi Jayasekara",
    action: "Managed 12 bookings",
    time: "Today, 3:30 PM",
    status: "Completed",
  },
];

const StaffPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedStaff, setSelectedStaff] = useState<StaffFormData | undefined>(
    undefined,
  );
  
  if (isFormOpen) {
    return (
      <StaffForm
        staffData={selectedStaff}
        onClose={() => setIsFormOpen(false)}
      />
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Staff Management</h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage salon staff, shifts, roles, and daily activity.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Staff</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">16</h2>
            </div>
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <Users className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Active Today</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">12</h2>
            </div>
            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <UserCheck className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">On Leave</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">2</h2>
            </div>
            <div className="rounded-xl bg-red-100 p-3 text-red-600">
              <UserX className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Departments</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">5</h2>
            </div>
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <Briefcase className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Staff Members</h2>
            <button onClick={() => setIsFormOpen(true)} className="rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700">
              Add Staff
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {staffMembers.map((staff) => (
              <div
                key={staff.email}
                className="rounded-2xl border border-gray-100 p-4 transition hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {staff.name}
                    </h3>
                    <p className="text-sm text-blue-600">{staff.role}</p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      staff.status === "Active"
                        ? "bg-green-100 text-green-600"
                        : "bg-red-100 text-red-600"
                    }`}
                  >
                    {staff.status}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center gap-2">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <span>{staff.email}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <span>{staff.phone}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Clock3 className="h-4 w-4 text-gray-400" />
                    <span>{staff.shift}</span>
                  </div>

                  <div className="flex items-center gap-2">
                    <Star className="h-4 w-4 text-yellow-500" />
                    <span>{staff.rating} Rating</span>
                  </div>
                </div>

                <div className="mt-4 flex gap-2">
                  <button className="flex-1 rounded-xl bg-gray-100 py-2 text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600">
                    View
                  </button>
                  <button
                    onClick={() => {
                      setIsFormOpen(true);
                    }}
                    className="flex-1 rounded-xl bg-blue-600 py-2 text-sm font-medium text-white hover:bg-blue-700"
                  >
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
              Shift Summary
            </h2>
            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Morning Shift</span>
                <span className="font-semibold text-gray-800">5 Staff</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Evening Shift</span>
                <span className="font-semibold text-gray-800">7 Staff</span>
              </div>
              <div className="flex items-center justify-between">
                <span>On Leave</span>
                <span className="font-semibold text-gray-800">2 Staff</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Top Performer</span>
                <span className="font-semibold text-gray-800">
                  Nethmi Perera
                </span>
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Role Categories
            </h2>
            <div className="flex flex-wrap gap-3">
              {[
                "Senior Stylist",
                "Color Specialist",
                "Beautician",
                "Receptionist",
                "Manager",
              ].map((role) => (
                <span
                  key={role}
                  className="rounded-full bg-blue-50 px-4 py-2 text-sm font-medium text-blue-600"
                >
                  {role}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Recent Staff Activity
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="px-3 py-3 font-medium">Staff Name</th>
                <th className="px-3 py-3 font-medium">Activity</th>
                <th className="px-3 py-3 font-medium">Time</th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr
                  key={`${activity.name}-${activity.time}`}
                  className="border-b last:border-b-0"
                >
                  <td className="px-3 py-4 font-medium text-gray-800">
                    {activity.name}
                  </td>
                  <td className="px-3 py-4 text-gray-600">{activity.action}</td>
                  <td className="px-3 py-4 text-gray-600">{activity.time}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        activity.status === "Completed"
                          ? "bg-green-100 text-green-600"
                          : activity.status === "In Progress"
                            ? "bg-yellow-100 text-yellow-600"
                            : "bg-red-100 text-red-600"
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

export default StaffPage;
