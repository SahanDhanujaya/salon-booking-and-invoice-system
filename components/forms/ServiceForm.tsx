"use client";

import { useState } from "react";
import {
  Scissors,
  Clock3,
  DollarSign,
  FileText,
  Tag,
  ImagePlus,
  Sparkles,
} from "lucide-react";
import { toast } from "react-toastify";
import { useRouter } from "next/navigation";
import { ServiceFormData } from "@/types/service";

interface ServiceFormProps {
  service?: ServiceFormData;
  onClose: () => void;
}

const ServiceForm = ({ service, onClose }: ServiceFormProps) => {
  const [formData, setFormData] = useState<ServiceFormData>({
    serviceName: service?.serviceName || "",
    category: service?.category || "",
    price: service?.price || "",
    duration: service?.duration || "",
    description: service?.description || "",
    status: service?.status || "Active",
    imageUrl: service?.imageUrl || "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleReset = () => {
    setFormData({
      serviceName: "",
      category: "",
      price: "",
      duration: "",
      description: "",
      status: "Active",
      imageUrl: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.serviceName.trim()) {
      toast.error("Service name is required");
      return;
    }

    if (!formData.category) {
      toast.error("Please select a category");
      return;
    }

    if (!formData.price || Number(formData.price) <= 0) {
      toast.error("Please enter a valid price");
      return;
    }

    if (!formData.duration || Number(formData.duration) <= 0) {
      toast.error("Please enter a valid duration");
      return;
    }

    setLoading(true);

    try {
      // Replace this with your real API call
      // const response = await fetch("/api/services", {
      //   method: "POST",
      //   headers: { "Content-Type": "application/json" },
      //   body: JSON.stringify(formData),
      // });

      await new Promise((resolve) => setTimeout(resolve, 1200));

      toast.success("Service added successfully!");
      handleReset();
    } catch (error) {
      console.error(error);
      toast.error("Failed to add service");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-999 flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div className="max-h-[95vh] w-full max-w-6xl rounded-xl bg-white shadow-2xl hide-scrollbar overflow-y-auto">
        <div className="mb-6 flex justify-between border-b border-gray-200">
          <div className="mb-6 px-4 pt-4">
            <h1 className="text-2xl font-bold text-gray-800">
              Add New Service
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              Create a new salon service with pricing, duration, category, and
              details.
            </p>
          </div>
          <div className="px-4 pt-4">
            <button
              onClick={onClose}
              className=" rounded-full p-2 text-gray-500 transition hover:bg-gray-200"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
        <div className="grid gap-6 xl:grid-cols-3 px-4 pb-4">
          <div className="xl:col-span-2">
            <form
              onSubmit={handleSubmit}
              className="rounded-2xl bg-white p-6 shadow-sm"
            >
              <div className="mb-6 flex items-center gap-3">
                <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                  <Scissors className="h-5 w-5" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-gray-800">
                    Service Information
                  </h2>
                  <p className="text-sm text-gray-500">
                    Fill in the details for the new salon service
                  </p>
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Service Name
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Scissors className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="serviceName"
                      value={formData.serviceName}
                      onChange={handleChange}
                      placeholder="Enter service name"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Category
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Tag className="h-4 w-4 text-gray-400" />
                    <select
                      name="category"
                      value={formData.category}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm outline-none"
                    >
                      <option value="">Select category</option>
                      <option value="Hair Service">Hair Service</option>
                      <option value="Facial">Facial</option>
                      <option value="Nail Care">Nail Care</option>
                      <option value="Makeup">Makeup</option>
                      <option value="Bridal">Bridal</option>
                      <option value="Spa">Spa</option>
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
                    <option value="Inactive">Inactive</option>
                  </select>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Price
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                    <input
                      type="number"
                      name="price"
                      min="0"
                      step="0.01"
                      value={formData.price}
                      onChange={handleChange}
                      placeholder="0.00"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Duration (minutes)
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Clock3 className="h-4 w-4 text-gray-400" />
                    <input
                      type="number"
                      name="duration"
                      min="1"
                      value={formData.duration}
                      onChange={handleChange}
                      placeholder="60"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Image URL
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <ImagePlus className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="imageUrl"
                      value={formData.imageUrl}
                      onChange={handleChange}
                      placeholder="https://example.com/service-image.jpg"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div className="md:col-span-2">
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Description
                  </label>
                  <div className="rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <div className="mb-2 flex items-center gap-2">
                      <FileText className="h-4 w-4 text-gray-400" />
                      <span className="text-xs text-gray-400">
                        Service details
                      </span>
                    </div>
                    <textarea
                      name="description"
                      rows={5}
                      value={formData.description}
                      onChange={handleChange}
                      placeholder="Enter service description..."
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
                  {loading ? "Saving..." : "Add Service"}
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
            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <div className="mb-4 flex items-center gap-2">
                <Sparkles className="h-5 w-5 text-violet-600" />
                <h2 className="text-xl font-bold text-gray-800">Preview</h2>
              </div>

              <div className="rounded-2xl border border-gray-100 p-4">
                <div className="mb-4 flex h-40 items-center justify-center rounded-xl bg-gray-100">
                  {formData.imageUrl ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img
                      src={formData.imageUrl}
                      alt="Service preview"
                      className="h-full w-full rounded-xl object-cover"
                    />
                  ) : (
                    <span className="text-sm text-gray-400">
                      No image preview
                    </span>
                  )}
                </div>

                <h3 className="text-lg font-semibold text-gray-800">
                  {formData.serviceName || "Service Name"}
                </h3>
                <p className="mt-1 text-sm text-blue-600">
                  {formData.category || "Category"}
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Price</span>
                    <span className="font-medium text-gray-800">
                      {formData.price ? `$${formData.price}` : "$0.00"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Duration</span>
                    <span className="font-medium text-gray-800">
                      {formData.duration
                        ? `${formData.duration} mins`
                        : "0 mins"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Status</span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                      {formData.status}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm leading-6 text-gray-500">
                  {formData.description ||
                    "Service description will appear here."}
                </p>
              </div>
            </div>

            <div className="rounded-2xl bg-white p-5 shadow-sm">
              <h2 className="mb-4 text-xl font-bold text-gray-800">Tips</h2>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="rounded-xl bg-gray-50 p-3">
                  Use clear service names like “Hair Cut & Styling”.
                </li>
                <li className="rounded-xl bg-gray-50 p-3">
                  Set realistic duration for booking accuracy.
                </li>
                <li className="rounded-xl bg-gray-50 p-3">
                  Add a short description so staff and customers understand the
                  service.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceForm;
