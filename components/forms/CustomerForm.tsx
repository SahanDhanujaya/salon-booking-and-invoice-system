"use client";

import { useState } from "react";
import {
  User,
  Mail,
  Phone,
  MapPin,
  CalendarDays,
  FileText,
  Camera,
  Star,
  X,
} from "lucide-react";
import { toast } from "react-toastify";
import { CustomerFormData } from "@/types/customer";

interface CustomerFormProps {
  customer?: CustomerFormData;
  onClose: () => void;
}

const CustomerForm = ({ customer, onClose }: CustomerFormProps) => {
  const [formData, setFormData] = useState<CustomerFormData>({
    fullName: customer?.fullName || "",
    email: customer?.email || "",
    phone: customer?.phone || "",
    gender: customer?.gender || "",
    dateOfBirth: customer?.dateOfBirth || "",
    address: customer?.address || "",
    joinDate: customer?.joinDate || "",
    loyaltyLevel: customer?.loyaltyLevel || "Bronze",
    status: customer?.status || "Active",
    preferredService: customer?.preferredService || "",
    imageUrl: customer?.imageUrl || "",
    notes: customer?.notes || "",
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
      fullName: "",
      email: "",
      phone: "",
      gender: "",
      dateOfBirth: "",
      address: "",
      joinDate: "",
      loyaltyLevel: "Bronze",
      status: "Active",
      preferredService: "",
      imageUrl: "",
      notes: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.fullName.trim()) {
      toast.error("Customer name is required");
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

      toast.success(
        customer ? "Customer updated successfully!" : "Customer added successfully!"
      );
      handleReset();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to save customer");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="max-h-[95vh] w-full max-w-6xl overflow-y-auto rounded-3xl bg-white shadow-2xl hide-scrollbar">
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <div>
            <h2 className="text-2xl font-bold text-gray-800">
              {customer ? "Edit Customer" : "Add Customer"}
            </h2>
            <p className="text-sm text-gray-500">
              Fill in the customer details below
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
                    Gender
                  </label>
                  <select
                    name="gender"
                    value={formData.gender}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  >
                    <option value="">Select gender</option>
                    <option value="Female">Female</option>
                    <option value="Male">Male</option>
                    <option value="Other">Other</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Date of Birth
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <CalendarDays className="h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      name="dateOfBirth"
                      value={formData.dateOfBirth}
                      onChange={handleChange}
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

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Loyalty Level
                  </label>
                  <select
                    name="loyaltyLevel"
                    value={formData.loyaltyLevel}
                    onChange={handleChange}
                    className="w-full rounded-xl border border-gray-200 px-4 py-3 text-sm outline-none focus:border-blue-500"
                  >
                    <option value="Bronze">Bronze</option>
                    <option value="Silver">Silver</option>
                    <option value="Gold">Gold</option>
                    <option value="Platinum">Platinum</option>
                    <option value="VIP">VIP</option>
                  </select>
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
                    <option value="Inactive">Inactive</option>
                    <option value="VIP">VIP</option>
                    <option value="New">New</option>
                  </select>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Preferred Service
                  </label>
                  <input
                    type="text"
                    name="preferredService"
                    value={formData.preferredService}
                    onChange={handleChange}
                    placeholder="Hair Cut, Hair Coloring, Facial..."
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
                      placeholder="https://example.com/customer.jpg"
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
                    : customer
                    ? "Update Customer"
                    : "Add Customer"}
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
              <h3 className="mb-4 text-lg font-semibold text-gray-800">Preview</h3>

              <div className="rounded-2xl bg-white p-4 shadow-sm">
                <div className="mb-4 flex justify-center">
                  {formData.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={formData.imageUrl}
                      alt="Customer preview"
                      className="h-24 w-24 rounded-full object-cover"
                    />
                  ) : (
                    <div className="flex h-24 w-24 items-center justify-center rounded-full bg-blue-100">
                      <User className="h-10 w-10 text-blue-600" />
                    </div>
                  )}
                </div>

                <h4 className="text-center text-lg font-semibold text-gray-800">
                  {formData.fullName || "Customer Name"}
                </h4>
                <p className="mt-1 text-center text-sm text-blue-600">
                  {formData.loyaltyLevel || "Bronze"} Member
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Status</span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                      {formData.status}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Phone</span>
                    <span className="font-medium text-gray-800">
                      {formData.phone || "-"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Preferred Service</span>
                    <span className="font-medium text-gray-800">
                      {formData.preferredService || "-"}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  {formData.notes || "Customer notes will appear here."}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="rounded-xl bg-white p-3">
                  Add correct contact details for booking and invoice updates.
                </li>
                <li className="rounded-xl bg-white p-3">
                  Use loyalty levels to track valuable repeat customers.
                </li>
                <li className="rounded-xl bg-white p-3">
                  Save preferred services to improve recommendations.
                </li>
              </ul>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <div className="mb-4 flex items-center gap-2">
                <Star className="h-5 w-5 text-yellow-500" />
                <h3 className="text-lg font-semibold text-gray-800">
                  Loyalty Info
                </h3>
              </div>

              <div className="space-y-3 text-sm text-gray-600">
                <div className="rounded-xl bg-white p-3">Bronze - New customers</div>
                <div className="rounded-xl bg-white p-3">Silver - Returning customers</div>
                <div className="rounded-xl bg-white p-3">Gold - Frequent visits</div>
                <div className="rounded-xl bg-white p-3">Platinum / VIP - High-value customers</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CustomerForm;