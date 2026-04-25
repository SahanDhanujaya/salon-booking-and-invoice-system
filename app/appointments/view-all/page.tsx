"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Search,
  CalendarDays,
  Clock3,
  UserCheck,
  Scissors,
  Eye,
  Pencil,
  User,
  Phone,
  Mail,
  FileText,
} from "lucide-react";
import DetailsModal from "@/components/common/modals/DetailsModal";
import AppointmentForm from "@/components/forms/AppointmentForm";

type Appointment = {
  id: number;
  customerName: string;
  customerEmail: string;
  customerPhone: string;
  service: string;
  staff: string;
  appointmentDate: string;
  appointmentTime: string;
  status: string;
  paymentStatus: string;
  notes?: string;
};

const appointmentList: Appointment[] = [
  {
    id: 1,
    customerName: "Nethmi Perera",
    customerEmail: "nethmi@example.com",
    customerPhone: "+94 77 123 4567",
    service: "Hair Cut & Styling",
    staff: "Kavindi Silva",
    appointmentDate: "2026-04-27",
    appointmentTime: "10:30",
    status: "Confirmed",
    paymentStatus: "Paid",
    notes: "Requested senior stylist",
  },
  {
    id: 2,
    customerName: "Kavindi Silva",
    customerEmail: "kavindi.customer@example.com",
    customerPhone: "+94 71 987 6543",
    service: "Hair Coloring",
    staff: "Nethmi Perera",
    appointmentDate: "2026-04-27",
    appointmentTime: "12:00",
    status: "Pending",
    paymentStatus: "Unpaid",
    notes: "Color consultation needed",
  },
  {
    id: 3,
    customerName: "Sanduni Fernando",
    customerEmail: "sanduni@example.com",
    customerPhone: "+94 76 456 7890",
    service: "Facial Treatment",
    staff: "Piumi Silva",
    appointmentDate: "2026-04-28",
    appointmentTime: "14:15",
    status: "Completed",
    paymentStatus: "Paid",
    notes: "Regular customer",
  },
  {
    id: 4,
    customerName: "Tharushi Jayasekara",
    customerEmail: "tharushi@example.com",
    customerPhone: "+94 75 222 3344",
    service: "Bridal Package",
    staff: "Kavindi Silva",
    appointmentDate: "2026-04-29",
    appointmentTime: "09:00",
    status: "Cancelled",
    paymentStatus: "Partial",
    notes: "Reschedule requested",
  },
];

const ViewAllAppointmentsPage = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectedAppointment, setSelectedAppointment] =
    useState<Appointment | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const filteredAppointments = useMemo(() => {
    const keyword = search.toLowerCase();

    return appointmentList.filter(
      (appointment) =>
        appointment.customerName.toLowerCase().includes(keyword) ||
        appointment.service.toLowerCase().includes(keyword) ||
        appointment.staff.toLowerCase().includes(keyword) ||
        appointment.status.toLowerCase().includes(keyword)
    );
  }, [search]);

  const handleView = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsViewModalOpen(true);
  };

  const handleEdit = (appointment: Appointment) => {
    setSelectedAppointment(appointment);
    setIsEditModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedAppointment(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedAppointment(null);
  };

  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6">
      <div className="mx-auto w-full max-w-7xl">
        <div className="mb-6 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
          <div>
            <button
              type="button"
              onClick={() => router.back()}
              className="mb-4 inline-flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm transition hover:bg-gray-100"
            >
              <ArrowLeft className="h-4 w-4" />
              Back
            </button>

            <h1 className="text-3xl font-bold text-gray-800">
              View All Appointments
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              View and manage all salon appointments in one place.
            </p>
          </div>

          <div className="flex w-full max-w-md items-center rounded-xl border border-gray-200 bg-white px-3 py-3 shadow-sm">
            <Search className="mr-2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search appointment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
            />
          </div>
        </div>

        <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Appointments</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">
                  {appointmentList.length}
                </h2>
              </div>
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <CalendarDays className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Confirmed</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">1</h2>
              </div>
              <div className="rounded-xl bg-green-100 p-3 text-green-600">
                <UserCheck className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">1</h2>
              </div>
              <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
                <Clock3 className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Top Service</p>
                <h2 className="mt-2 text-xl font-bold text-gray-800">
                  Hair Cut
                </h2>
              </div>
              <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                <Scissors className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              Appointment List
            </h2>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              {filteredAppointments.length} Records
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="px-3 py-3 font-medium">Customer</th>
                  <th className="px-3 py-3 font-medium">Service</th>
                  <th className="px-3 py-3 font-medium">Staff</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                  <th className="px-3 py-3 font-medium">Time</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredAppointments.map((appointment) => (
                  <tr key={appointment.id} className="border-b last:border-b-0">
                    <td className="px-3 py-4">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {appointment.customerName}
                        </p>
                        <p className="text-xs text-gray-500">
                          ID: #{appointment.id}
                        </p>
                      </div>
                    </td>

                    <td className="px-3 py-4 text-gray-700">
                      {appointment.service}
                    </td>

                    <td className="px-3 py-4 text-gray-600">
                      {appointment.staff}
                    </td>

                    <td className="px-3 py-4 text-gray-600">
                      {appointment.appointmentDate}
                    </td>

                    <td className="px-3 py-4 text-gray-600">
                      {appointment.appointmentTime}
                    </td>

                    <td className="px-3 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          appointment.status === "Confirmed"
                            ? "bg-green-100 text-green-600"
                            : appointment.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : appointment.status === "Completed"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {appointment.status}
                      </span>
                    </td>

                    <td className="px-3 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleView(appointment)}
                          className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          View
                        </button>

                        <button
                          onClick={() => handleEdit(appointment)}
                          className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700 transition hover:bg-amber-100"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredAppointments.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-3 py-10 text-center text-sm text-gray-500"
                    >
                      No appointments found.
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <DetailsModal
        isOpen={isViewModalOpen}
        title="Appointment Details"
        onClose={closeViewModal}
      >
        {selectedAppointment && (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <CalendarDays className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {selectedAppointment.customerName}
                </h3>
                <p className="text-sm text-blue-600">
                  {selectedAppointment.service}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Appointment ID</span>
                <span className="font-medium text-gray-800">
                  #{selectedAppointment.id}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="flex items-center gap-2 text-gray-500">
                  <Mail className="h-4 w-4" />
                  Email
                </span>
                <span className="font-medium text-gray-800">
                  {selectedAppointment.customerEmail}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="flex items-center gap-2 text-gray-500">
                  <Phone className="h-4 w-4" />
                  Phone
                </span>
                <span className="font-medium text-gray-800">
                  {selectedAppointment.customerPhone}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Staff</span>
                <span className="font-medium text-gray-800">
                  {selectedAppointment.staff}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Date</span>
                <span className="font-medium text-gray-800">
                  {selectedAppointment.appointmentDate}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Time</span>
                <span className="font-medium text-gray-800">
                  {selectedAppointment.appointmentTime}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Status</span>
                <span className="font-medium text-gray-800">
                  {selectedAppointment.status}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Payment Status</span>
                <span className="font-medium text-gray-800">
                  {selectedAppointment.paymentStatus}
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-blue-50 p-4">
              <p className="flex items-center gap-2 text-sm font-medium text-blue-700">
                <FileText className="h-4 w-4" />
                Notes
              </p>
              <p className="mt-2 text-sm text-gray-700">
                {selectedAppointment.notes || "No notes available."}
              </p>
            </div>
          </div>
        )}
      </DetailsModal>

      {isEditModalOpen && selectedAppointment && (
        <AppointmentForm
          appointment={{
            customerName: selectedAppointment.customerName,
            customerEmail: selectedAppointment.customerEmail,
            customerPhone: selectedAppointment.customerPhone,
            service: selectedAppointment.service,
            staff: selectedAppointment.staff,
            appointmentDate: selectedAppointment.appointmentDate,
            appointmentTime: selectedAppointment.appointmentTime,
            status: selectedAppointment.status,
            paymentStatus: selectedAppointment.paymentStatus,
            notes: selectedAppointment.notes || "",
          }}
          onClose={closeEditModal}
        />
      )}
    </div>
  );
};

export default ViewAllAppointmentsPage;