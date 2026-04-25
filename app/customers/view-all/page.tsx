"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Search,
  Users,
  UserPlus,
  Star,
  Phone,
  Mail,
  CalendarDays,
  MapPin,
  User,
  Pencil,
} from "lucide-react";
import DetailsModal from "@/components/common/modals/DetailsModal";
import CustomerForm from "@/components/forms/CustomerForm";

type Customer = {
  id: number;
  fullName: string;
  email: string;
  phone: string;
  loyaltyLevel: string;
  status: string;
  visits: number;
  joinDate: string;
  address?: string;
  preferredService?: string;
  notes?: string;
};

const customerList: Customer[] = [
  {
    id: 1,
    fullName: "Nethmi Perera",
    email: "nethmi@example.com",
    phone: "+94 77 123 4567",
    loyaltyLevel: "Gold",
    status: "Active",
    visits: 12,
    joinDate: "2026-01-12",
    address: "Colombo, Sri Lanka",
    preferredService: "Hair Coloring",
    notes: "Usually books weekend appointments",
  },
  {
    id: 2,
    fullName: "Kavindi Silva",
    email: "kavindi@example.com",
    phone: "+94 71 987 6543",
    loyaltyLevel: "Silver",
    status: "Active",
    visits: 8,
    joinDate: "2026-02-03",
    address: "Gampaha, Sri Lanka",
    preferredService: "Facial Treatment",
    notes: "Prefers evening time slots",
  },
  {
    id: 3,
    fullName: "Sanduni Fernando",
    email: "sanduni@example.com",
    phone: "+94 76 456 7890",
    loyaltyLevel: "Platinum",
    status: "VIP",
    visits: 15,
    joinDate: "2025-12-28",
    address: "Kandy, Sri Lanka",
    preferredService: "Bridal Package",
    notes: "High-value repeat customer",
  },
  {
    id: 4,
    fullName: "Tharushi Jayasekara",
    email: "tharushi@example.com",
    phone: "+94 75 222 3344",
    loyaltyLevel: "Bronze",
    status: "New",
    visits: 4,
    joinDate: "2026-03-14",
    address: "Panadura, Sri Lanka",
    preferredService: "Hair Cut & Styling",
    notes: "Recently registered",
  },
];

const ViewAllCustomersPage = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectedCustomer, setSelectedCustomer] = useState<Customer | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const filteredCustomers = useMemo(() => {
    const keyword = search.toLowerCase();

    return customerList.filter(
      (customer) =>
        customer.fullName.toLowerCase().includes(keyword) ||
        customer.email.toLowerCase().includes(keyword) ||
        customer.phone.toLowerCase().includes(keyword) ||
        customer.loyaltyLevel.toLowerCase().includes(keyword)
    );
  }, [search]);

  const handleView = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsViewModalOpen(true);
  };

  const handleEdit = (customer: Customer) => {
    setSelectedCustomer(customer);
    setIsEditModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedCustomer(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedCustomer(null);
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
              View All Customers
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              View and manage all registered salon customers in one place.
            </p>
          </div>

          <div className="flex w-full max-w-md items-center rounded-xl border border-gray-200 bg-white px-3 py-3 shadow-sm">
            <Search className="mr-2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search customer..."
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
                <p className="text-sm text-gray-500">Total Customers</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">
                  {customerList.length}
                </h2>
              </div>
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <Users className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">New Customers</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">12</h2>
              </div>
              <div className="rounded-xl bg-green-100 p-3 text-green-600">
                <UserPlus className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">VIP / Platinum</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">4</h2>
              </div>
              <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
                <Star className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Active Customers</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">20</h2>
              </div>
              <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                <CalendarDays className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Customer List</h2>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              {filteredCustomers.length} Records
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="px-3 py-3 font-medium">Customer</th>
                  <th className="px-3 py-3 font-medium">Contact</th>
                  <th className="px-3 py-3 font-medium">Loyalty</th>
                  <th className="px-3 py-3 font-medium">Visits</th>
                  <th className="px-3 py-3 font-medium">Join Date</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredCustomers.map((customer) => (
                  <tr key={customer.id} className="border-b last:border-b-0">
                    <td className="px-3 py-4">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {customer.fullName}
                        </p>
                        <p className="text-xs text-gray-500">ID: #{customer.id}</p>
                      </div>
                    </td>

                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-3.5 w-3.5" />
                          <span>{customer.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-3.5 w-3.5" />
                          <span>{customer.phone}</span>
                        </div>
                      </div>
                    </td>

                    <td className="px-3 py-4">
                      <span className="rounded-full bg-yellow-50 px-3 py-1 text-xs font-medium text-yellow-700">
                        {customer.loyaltyLevel}
                      </span>
                    </td>

                    <td className="px-3 py-4 font-medium text-gray-700">
                      {customer.visits}
                    </td>

                    <td className="px-3 py-4 text-gray-600">{customer.joinDate}</td>

                    <td className="px-3 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          customer.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : customer.status === "VIP"
                            ? "bg-purple-100 text-purple-600"
                            : customer.status === "New"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-gray-100 text-gray-600"
                        }`}
                      >
                        {customer.status}
                      </span>
                    </td>

                    <td className="px-3 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleView(customer)}
                          className="rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                          View
                        </button>

                        <button
                          onClick={() => handleEdit(customer)}
                          className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700 transition hover:bg-amber-100"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredCustomers.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-3 py-10 text-center text-sm text-gray-500"
                    >
                      No customers found.
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
        title="Customer Details"
        onClose={closeViewModal}
      >
        {selectedCustomer && (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {selectedCustomer.fullName}
                </h3>
                <p className="text-sm text-blue-600">
                  {selectedCustomer.loyaltyLevel} Member
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Customer ID</span>
                <span className="font-medium text-gray-800">
                  #{selectedCustomer.id}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Email</span>
                <span className="font-medium text-gray-800">
                  {selectedCustomer.email}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Phone</span>
                <span className="font-medium text-gray-800">
                  {selectedCustomer.phone}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Status</span>
                <span className="font-medium text-gray-800">
                  {selectedCustomer.status}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Visits</span>
                <span className="font-medium text-gray-800">
                  {selectedCustomer.visits}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Join Date</span>
                <span className="font-medium text-gray-800">
                  {selectedCustomer.joinDate}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="flex items-center gap-2 text-gray-500">
                  <MapPin className="h-4 w-4" />
                  Address
                </span>
                <span className="font-medium text-gray-800">
                  {selectedCustomer.address || "-"}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Preferred Service</span>
                <span className="font-medium text-gray-800">
                  {selectedCustomer.preferredService || "-"}
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-blue-50 p-4">
              <p className="text-sm font-medium text-blue-700">Notes</p>
              <p className="mt-2 text-sm text-gray-700">
                {selectedCustomer.notes || "No notes available."}
              </p>
            </div>
          </div>
        )}
      </DetailsModal>

      {isEditModalOpen && selectedCustomer && (
        <CustomerForm
          customer={{
            fullName: selectedCustomer.fullName,
            email: selectedCustomer.email,
            phone: selectedCustomer.phone,
            gender: "",
            dateOfBirth: "",
            address: selectedCustomer.address || "",
            joinDate: selectedCustomer.joinDate,
            loyaltyLevel: selectedCustomer.loyaltyLevel,
            status: selectedCustomer.status,
            preferredService: selectedCustomer.preferredService || "",
            imageUrl: "",
            notes: selectedCustomer.notes || "",
          }}
          onClose={closeEditModal}
        />
      )}
    </div>
  );
};

export default ViewAllCustomersPage;