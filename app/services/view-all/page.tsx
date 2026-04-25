"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Search,
  Scissors,
  Sparkles,
  Clock3,
  DollarSign,
  Eye,
  Pencil,
  Tag,
} from "lucide-react";
import DetailsModal from "@/components/common/modals/DetailsModal";
import ServiceForm from "@/components/forms/ServiceForm";

type Service = {
  id: number;
  serviceName: string;
  category: string;
  price: string;
  duration: string;
  status: string;
  description: string;
  imageUrl?: string;
};

const serviceList: Service[] = [
  {
    id: 1,
    serviceName: "Hair Cut & Styling",
    category: "Hair Service",
    price: "25",
    duration: "45",
    status: "Active",
    description: "Professional haircut and styling service for a fresh modern look.",
    imageUrl: "",
  },
  {
    id: 2,
    serviceName: "Hair Coloring",
    category: "Hair Service",
    price: "60",
    duration: "90",
    status: "Active",
    description: "Premium hair coloring service with safe and quality products.",
    imageUrl: "",
  },
  {
    id: 3,
    serviceName: "Facial Treatment",
    category: "Facial",
    price: "40",
    duration: "60",
    status: "Active",
    description: "Relaxing facial treatment for glowing and healthy skin.",
    imageUrl: "",
  },
  {
    id: 4,
    serviceName: "Bridal Package",
    category: "Bridal",
    price: "150",
    duration: "180",
    status: "Inactive",
    description: "Complete bridal package including makeup, hair, and beauty care.",
    imageUrl: "",
  },
  {
    id: 5,
    serviceName: "Manicure & Pedicure",
    category: "Nail Care",
    price: "35",
    duration: "50",
    status: "Active",
    description: "Full hand and foot care treatment with nail finishing.",
    imageUrl: "",
  },
];

const ViewAllServicesPage = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectedService, setSelectedService] = useState<Service | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const filteredServices = useMemo(() => {
    const keyword = search.toLowerCase();

    return serviceList.filter(
      (service) =>
        service.serviceName.toLowerCase().includes(keyword) ||
        service.category.toLowerCase().includes(keyword) ||
        service.status.toLowerCase().includes(keyword)
    );
  }, [search]);

  const handleView = (service: Service) => {
    setSelectedService(service);
    setIsViewModalOpen(true);
  };

  const handleEdit = (service: Service) => {
    setSelectedService(service);
    setIsEditModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedService(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedService(null);
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
              View All Services
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              View and manage all salon services in one place.
            </p>
          </div>

          <div className="flex w-full max-w-md items-center rounded-xl border border-gray-200 bg-white px-3 py-3 shadow-sm">
            <Search className="mr-2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search service..."
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
                <p className="text-sm text-gray-500">Total Services</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">
                  {serviceList.length}
                </h2>
              </div>
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <Scissors className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Services</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">4</h2>
              </div>
              <div className="rounded-xl bg-green-100 p-3 text-green-600">
                <Sparkles className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Avg. Duration</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">85 min</h2>
              </div>
              <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
                <Clock3 className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Top Price</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">$150</h2>
              </div>
              <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                <DollarSign className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Service List</h2>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              {filteredServices.length} Records
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="px-3 py-3 font-medium">Service</th>
                  <th className="px-3 py-3 font-medium">Category</th>
                  <th className="px-3 py-3 font-medium">Price</th>
                  <th className="px-3 py-3 font-medium">Duration</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredServices.map((service) => (
                  <tr key={service.id} className="border-b last:border-b-0">
                    <td className="px-3 py-4">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {service.serviceName}
                        </p>
                        <p className="text-xs text-gray-500">
                          ID: #{service.id}
                        </p>
                      </div>
                    </td>

                    <td className="px-3 py-4">
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {service.category}
                      </span>
                    </td>

                    <td className="px-3 py-4 font-medium text-gray-700">
                      ${service.price}
                    </td>

                    <td className="px-3 py-4 text-gray-600">
                      {service.duration} mins
                    </td>

                    <td className="px-3 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          service.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {service.status}
                      </span>
                    </td>

                    <td className="px-3 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleView(service)}
                          className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          View
                        </button>

                        <button
                          onClick={() => handleEdit(service)}
                          className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700 transition hover:bg-amber-100"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredServices.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-3 py-10 text-center text-sm text-gray-500"
                    >
                      No services found.
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
        title="Service Details"
        onClose={closeViewModal}
      >
        {selectedService && (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <Scissors className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {selectedService.serviceName}
                </h3>
                <p className="text-sm text-blue-600">
                  {selectedService.category}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Service ID</span>
                <span className="font-medium text-gray-800">
                  #{selectedService.id}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="flex items-center gap-2 text-gray-500">
                  <Tag className="h-4 w-4" />
                  Category
                </span>
                <span className="font-medium text-gray-800">
                  {selectedService.category}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Price</span>
                <span className="font-medium text-gray-800">
                  ${selectedService.price}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Duration</span>
                <span className="font-medium text-gray-800">
                  {selectedService.duration} mins
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Status</span>
                <span className="font-medium text-gray-800">
                  {selectedService.status}
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-blue-50 p-4">
              <p className="text-sm font-medium text-blue-700">Description</p>
              <p className="mt-2 text-sm text-gray-700">
                {selectedService.description || "No description available."}
              </p>
            </div>
          </div>
        )}
      </DetailsModal>

      {isEditModalOpen && selectedService && (
        <ServiceForm
          service={{
            serviceName: selectedService.serviceName,
            category: selectedService.category,
            price: selectedService.price,
            duration: selectedService.duration,
            description: selectedService.description,
            status: selectedService.status,
            imageUrl: selectedService.imageUrl || "",
          }}
          onClose={closeEditModal}
        />
      )}
    </div>
  );
};

export default ViewAllServicesPage;