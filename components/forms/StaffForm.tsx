"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  Briefcase,
  Clock3,
  DollarSign,
  MapPin,
  CalendarDays,
  FileText,
  Camera,
  X,
} from "lucide-react";
import { toast } from "react-toastify";
import { StaffFormData } from "@/types/staff";


type StaffFormProps = {
  staffData?: Partial<StaffFormData> | null;
  onClose: () => void;
  onSubmit?: (data: StaffFormData) => void;
};

const defaultStaffData: StaffFormData = {
  fullName: "",
  role: "",
  email: "",
  phone: "",
  shift: "",
  salary: "",
  address: "",
  joinDate: "",
  status: "Active",
  specialization: "",
  imageUrl: "",
  notes: "",
};

const StaffForm = ({ staffData, onClose, onSubmit }: StaffFormProps) => {
  const [formData, setFormData] = useState<StaffFormData>({
    ...defaultStaffData,
    ...staffData,
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setFormData({
      ...defaultStaffData,
      ...staffData,
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error("Staff name is required");
      return;
    }

    if (!formData.role.trim()) {
      toast.error("Role is required");
      return;
    }

    if (!formData.email.trim()) {
      toast.error("Email is required");
      return;
    }

    if (!formData.phone.trim()) {
      toast.error("Phone number is required");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      onSubmit?.(formData);
      toast.success(
        staffData?.id ? "Staff updated successfully!" : "Staff added successfully!"
      );
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="max-h-[95vh] w-full max-w-6xl rounded-xl bg-white shadow-2xl hide-scrollbar overflow-y-auto">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {staffData?.id ? "Edit Staff Member" : "Add Staff Member"}
            </h2>
            <p className="text-sm text-gray-500">
              Fill in the staff details below
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
                    Full Name
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <User className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleChange}
                      placeholder="Enter full name"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Role
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Briefcase className="h-4 w-4 text-gray-400" />
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm outline-none"
                    >
                      <option value="">Select role</option>
                      <option value="Senior Stylist">Senior Stylist</option>
                      <option value="Hair Color Specialist">
                        Hair Color Specialist
                      </option>
                      <option value="Beautician">Beautician</option>
                      <option value="Receptionist">Receptionist</option>
                      <option value="Manager">Manager</option>
                      <option value="Nail Technician">Nail Technician</option>
                      <option value="Makeup Artist">Makeup Artist</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Status
                  </label>
                  <select
                    name="status"
                    value={formData.status}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  >
                    <option value="Active">Active</option>
                    <option value="On Leave">On Leave</option>
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Email
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Mail className="h-4 w-4 text-gray-400" />
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter email"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Phone
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Phone className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="+94 77 123 4567"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Shift
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Clock3 className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="shift"
                      value={formData.shift}
                      onChange={handleChange}
                      placeholder="9:00 AM - 6:00 PM"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Salary
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                    <input
                      type="number"
                      name="salary"
                      value={formData.salary}
                      onChange={handleChange}
                      placeholder="50000"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Join Date
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <CalendarDays className="h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      name="joinDate"
                      value={formData.joinDate}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Specialization
                  </label>
                  <input
                    type="text"
                    name="specialization"
                    value={formData.specialization}
                    onChange={handleChange}
                    placeholder="Hair Styling, Hair Coloring, Bridal Makeup..."
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  />
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Address
                  </label>
                  <div className="flex items-start gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <MapPin className="mt-0.5 h-4 w-4 text-gray-400" />
                    <textarea
                      name="address"
                      rows={3}
                      value={formData.address}
                      onChange={handleChange}
                      placeholder="Enter address"
                      className="w-full resize-none bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Profile Image URL
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Camera className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      placeholder="https://example.com/profile.jpg"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
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
                    : staffData?.id
                    ? "Update Staff"
                    : "Add Staff"}
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
                <div className="mb-4 flex justify-center">
                  {formData.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={formData.imageUrl}
                      alt="Staff preview"
                      className="h-24 w-24 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
                      <User className="h-10 w-10 text-blue-600" />
                    </div>
                  )}
                </div>

                <h4 className="text-center text-lg font-semibold text-gray-800">
                  {formData.fullName || "Staff Name"}
                </h4>
                <p className="mt-1 text-center text-sm text-blue-600">
                  {formData.role || "Role"}
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Status</span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                      {formData.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Shift</span>
                    <span className="font-medium text-gray-800">
                      {formData.shift || "-"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Salary</span>
                    <span className="font-medium text-gray-800">
                      {formData.salary ? `$${formData.salary}` : "-"}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  {formData.specialization || "Specialization will appear here."}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="rounded-xl bg-white p-3">
                  Use the correct role to organize staff permissions.
                </li>
                <li className="rounded-xl bg-white p-3">
                  Add shift details clearly for appointment scheduling.
                </li>
                <li className="rounded-xl bg-white p-3">
                  Mention specialization to improve staff assignment.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StaffForm;