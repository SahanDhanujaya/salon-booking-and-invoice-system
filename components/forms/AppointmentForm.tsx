"use client";

import { useState } from "react";
import {
  CalendarDays,
  Clock3,
  User,
  Scissors,
  UserCog,
  Phone,
  Mail,
  FileText,
  X,
} from "lucide-react";
import { toast } from "react-toastify";
import { AppointmentFormData } from "@/types/appointment";

interface AppointmentFormProps {
  appointment?: AppointmentFormData;
  onClose: () => void;
}

const AppointmentForm = ({
  appointment,
  onClose,
}: AppointmentFormProps) => {
  const [formData, setFormData] = useState<AppointmentFormData>({
    customerName: appointment?.customerName || "",
    customerEmail: appointment?.customerEmail || "",
    customerPhone: appointment?.customerPhone || "",
    service: appointment?.service || "",
    staff: appointment?.staff || "",
    appointmentDate: appointment?.appointmentDate || "",
    appointmentTime: appointment?.appointmentTime || "",
    status: appointment?.status || "Pending",
    paymentStatus: appointment?.paymentStatus || "Unpaid",
    notes: appointment?.notes || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setFormData({
      customerName: "",
      customerEmail: "",
      customerPhone: "",
      service: "",
      staff: "",
      appointmentDate: "",
      appointmentTime: "",
      status: "Pending",
      paymentStatus: "Unpaid",
      notes: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.customerName.trim()) {
      toast.error("Customer name is required");
      return;
    }

    if (!formData.customerPhone.trim()) {
      toast.error("Customer phone is required");
      return;
    }

    if (!formData.service) {
      toast.error("Please select a service");
      return;
    }

    if (!formData.staff) {
      toast.error("Please select a staff member");
      return;
    }

    if (!formData.appointmentDate) {
      toast.error("Please select appointment date");
      return;
    }

    if (!formData.appointmentTime) {
      toast.error("Please select appointment time");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        appointment
          ? "Appointment updated successfully!"
          : "Appointment created successfully!"
      );

      handleReset();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to save appointment");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="hide-scrollbar max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-white shadow-2xl">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {appointment ? "Edit Appointment" : "Add Appointment"}
            </h2>
            <p className="text-sm text-gray-500">
              Fill in the appointment details below
            </p>
          </div>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="grid gap-6 p-6 xl:grid-cols-3">
          <div className="xl:col-span-2">
            <form onSubmit={handleSubmit} className="rounded-2xl bg-white">
              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Customer Name
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <User className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="customerName"
                      value={formData.customerName}
                      onChange={handleChange}
                      placeholder="Enter customer name"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Customer Email
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      name="customerEmail"
                      value={formData.customerEmail}
                      onChange={handleChange}
                      placeholder="Enter email"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Customer Phone
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="customerPhone"
                      value={formData.customerPhone}
                      onChange={handleChange}
                      placeholder="+94 77 123 4567"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Service
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Scissors className="h-4 w-4 text-gray-400" />
                    <select
                      name="service"
                      value={formData.service}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm outline-none"
                    >
                      <option value="">Select service</option>
                      <option value="Hair Cut & Styling">Hair Cut & Styling</option>
                      <option value="Hair Coloring">Hair Coloring</option>
                      <option value="Facial Treatment">Facial Treatment</option>
                      <option value="Bridal Package">Bridal Package</option>
                      <option value="Manicure & Pedicure">
                        Manicure & Pedicure
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Staff
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <UserCog className="h-4 w-4 text-gray-400" />
                    <select
                      name="staff"
                      value={formData.staff}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm outline-none"
                    >
                      <option value="">Select staff</option>
                      <option value="Nethmi Perera">Nethmi Perera</option>
                      <option value="Kavindi Silva">Kavindi Silva</option>
                      <option value="Sanduni Fernando">Sanduni Fernando</option>
                      <option value="Tharushi Jayasekara">
                        Tharushi Jayasekara
                      </option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Appointment Date
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <CalendarDays className="h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      name="appointmentDate"
                      value={formData.appointmentDate}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Appointment Time
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Clock3 className="h-4 w-4 text-gray-400" />
                    <input
                      type="time"
                      name="appointmentTime"
                      value={formData.appointmentTime}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Appointment Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="No Show">No Show</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Payment Status
                  </label>
                  <select
                    name="paymentStatus"
                    value={formData.paymentStatus}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  >
                    <option value="Unpaid">Unpaid</option>
                    <option value="Paid">Paid</option>
                    <option value="Partial">Partial</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Notes
                  </label>
                  <div className="flex items-start gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <FileText className="mt-0.5 h-4 w-4 text-gray-400" />
                    <textarea
                      name="notes"
                      rows={4}
                      value={formData.notes}
                      onChange={handleChange}
                      placeholder="Additional notes..."
                      className="w-full resize-none bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <button
                  type="submit"
                  disabled={loading}
                  className="rounded-xl bg-blue-600 px-6 py-3 text-sm font-medium text-white transition hover:bg-blue-700 disabled:cursor-not-allowed disabled:opacity-70"
                >
                  {loading
                    ? "Saving..."
                    : appointment
                    ? "Update Appointment"
                    : "Add Appointment"}
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="rounded-xl bg-gray-100 px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-200"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

          <div className="space-y-6">
            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">
                Preview
              </h3>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <h4 className="text-center text-lg font-semibold text-gray-800">
                  {formData.customerName || "Customer Name"}
                </h4>
                <p className="mt-1 text-center text-sm text-blue-600">
                  {formData.service || "Service"}
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Staff</span>
                    <span className="font-medium text-gray-800">
                      {formData.staff || "-"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Date</span>
                    <span className="font-medium text-gray-800">
                      {formData.appointmentDate || "-"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Time</span>
                    <span className="font-medium text-gray-800">
                      {formData.appointmentTime || "-"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Status</span>
                    <span className="rounded-full bg-blue-100 px-3 py-1 text-xs font-medium text-blue-600">
                      {formData.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Payment</span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                      {formData.paymentStatus}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  {formData.notes || "Appointment notes will appear here."}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="rounded-xl bg-white p-3">
                  Always confirm customer phone number before saving.
                </li>
                <li className="rounded-xl bg-white p-3">
                  Assign the correct staff member based on specialization.
                </li>
                <li className="rounded-xl bg-white p-3">
                  Use notes for special requests or reminders.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentForm;