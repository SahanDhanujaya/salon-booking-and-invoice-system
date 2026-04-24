"use client";
import AppointmentForm from "@/components/forms/AppointmentForm";
import {
  CalendarDays,
  Clock3,
  UserCheck,
  Scissors,
  Plus,
  Phone,
  Mail,
} from "lucide-react";
import { useState } from "react";

const appointments = [
  {
    customer: "Nethmi Perera",
    service: "Hair Cut & Styling",
    staff: "Nethmi Perera",
    date: "Today",
    time: "10:30 AM",
    status: "Confirmed",
  },
  {
    customer: "Kavindi Silva",
    service: "Hair Coloring",
    staff: "Kavindi Silva",
    date: "Today",
    time: "12:00 PM",
    status: "Pending",
  },
  {
    customer: "Sanduni Fernando",
    service: "Facial Treatment",
    staff: "Sanduni Fernando",
    date: "Today",
    time: "2:15 PM",
    status: "Completed",
  },
  {
    customer: "Tharushi Jayasekara",
    service: "Bridal Package",
    staff: "Nethmi Perera",
    date: "Tomorrow",
    time: "9:00 AM",
    status: "Booked",
  },
];

const todaysSchedule = [
  {
    time: "9:00 AM",
    title: "Bridal Makeup Consultation",
    customer: "Ama Peries",
  },
  {
    time: "10:30 AM",
    title: "Hair Cut & Styling",
    customer: "Nethmi Perera",
  },
  {
    time: "12:00 PM",
    title: "Hair Coloring",
    customer: "Kavindi Silva",
  },
  {
    time: "2:15 PM",
    title: "Facial Treatment",
    customer: "Sanduni Fernando",
  },
  {
    time: "4:00 PM",
    title: "Nail Care Session",
    customer: "Piumi Silva",
  },
];

const recentActivities = [
  {
    customer: "Nethmi Perera",
    action: "Appointment confirmed",
    date: "Today, 9:45 AM",
    status: "Confirmed",
  },
  {
    customer: "Kavindi Silva",
    action: "Appointment pending approval",
    date: "Today, 11:30 AM",
    status: "Pending",
  },
  {
    customer: "Sanduni Fernando",
    action: "Appointment completed",
    date: "Today, 3:00 PM",
    status: "Completed",
  },
  {
    customer: "Tharushi Jayasekara",
    action: "New booking created",
    date: "Today, 4:10 PM",
    status: "Booked",
  },
];

const AppointmentPage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  if (isFormOpen) {
    return (
      <AppointmentForm onClose={() => setIsFormOpen(false)} />
    );
  }
    
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">
          Appointment Booking
        </h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage salon bookings, appointment schedules, and daily customer flow.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Bookings</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">86</h2>
            </div>
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <CalendarDays className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Today’s Appointments</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">18</h2>
            </div>
            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <Clock3 className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Confirmed</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">12</h2>
            </div>
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <UserCheck className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Top Service</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">
                Hair Cut
              </h2>
            </div>
            <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
              <Scissors className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              Upcoming Appointments
            </h2>
            <button
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              onClick={() => setIsFormOpen(true)}
            >
              <Plus className="h-4 w-4" />
              Add Booking
            </button>
          </div>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {appointments.map((appointment) => (
              <div
                key={`${appointment.customer}-${appointment.time}`}
                className="rounded-2xl border border-gray-100 p-4 transition hover:shadow-md"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <h3 className="text-lg font-semibold text-gray-800">
                      {appointment.customer}
                    </h3>
                    <p className="text-sm text-blue-600">
                      {appointment.service}
                    </p>
                  </div>

                  <span
                    className={`rounded-full px-3 py-1 text-xs font-medium ${
                      appointment.status === "Confirmed"
                        ? "bg-green-100 text-green-600"
                        : appointment.status === "Pending"
                        ? "bg-yellow-100 text-yellow-700"
                        : appointment.status === "Completed"
                        ? "bg-purple-100 text-purple-600"
                        : "bg-blue-100 text-blue-600"
                    }`}
                  >
                    {appointment.status}
                  </span>
                </div>

                <div className="mt-4 space-y-3 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Staff</span>
                    <span className="font-medium text-gray-800">
                      {appointment.staff}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Date</span>
                    <span className="font-medium text-gray-800">
                      {appointment.date}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Time</span>
                    <span className="font-medium text-gray-800">
                      {appointment.time}
                    </span>
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
              Quick Booking
            </h2>

            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Customer Name
                </label>
                <input
                  type="text"
                  placeholder="Enter customer name"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Phone Number
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5">
                  <Phone className="h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="+94 77 123 4567"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Email
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5">
                  <Mail className="h-4 w-4 text-gray-400" />
                  <input
                    type="email"
                    placeholder="customer@email.com"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Service
                </label>
                <select className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                  <option>Hair Cut & Styling</option>
                  <option>Hair Coloring</option>
                  <option>Facial Treatment</option>
                  <option>Bridal Package</option>
                  <option>Manicure & Pedicure</option>
                </select>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Staff
                </label>
                <select className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500">
                  <option>Nethmi Perera</option>
                  <option>Kavindi Silva</option>
                  <option>Sanduni Fernando</option>
                  <option>Tharushi Jayasekara</option>
                </select>
              </div>

              <div className="grid grid-cols-2 gap-3">
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Date
                  </label>
                  <input
                    type="date"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Time
                  </label>
                  <input
                    type="time"
                    className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700"
              >
                Book Appointment
              </button>
            </form>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Today’s Schedule
            </h2>

            <div className="space-y-3">
              {todaysSchedule.map((item) => (
                <div
                  key={`${item.time}-${item.customer}`}
                  className="rounded-xl border border-gray-100 p-3"
                >
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-semibold text-blue-600">
                      {item.time}
                    </span>
                    <span className="text-xs text-gray-400">Scheduled</span>
                  </div>
                  <p className="mt-2 text-sm font-medium text-gray-800">
                    {item.title}
                  </p>
                  <p className="text-sm text-gray-500">{item.customer}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Recent Appointment Activity
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
                  key={`${activity.customer}-${activity.date}`}
                  className="border-b last:border-b-0"
                >
                  <td className="px-3 py-4 font-medium text-gray-800">
                    {activity.customer}
                  </td>
                  <td className="px-3 py-4 text-gray-600">
                    {activity.action}
                  </td>
                  <td className="px-3 py-4 text-gray-600">{activity.date}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        activity.status === "Confirmed"
                          ? "bg-green-100 text-green-600"
                          : activity.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : activity.status === "Completed"
                          ? "bg-purple-100 text-purple-600"
                          : "bg-blue-100 text-blue-600"
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

export default AppointmentPage;