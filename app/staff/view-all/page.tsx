"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Search,
  Users,
  UserCheck,
  UserX,
  Briefcase,
  Eye,
  Pencil,
  Mail,
  Phone,
  Clock3,
  MapPin,
  User,
  Star,
} from "lucide-react";
import DetailsModal from "@/components/common/modals/DetailsModal";
import StaffForm from "@/components/forms/StaffForm";

type Staff = {
  id: number;
  fullName: string;
  role: string;
  email: string;
  phone: string;
  shift: string;
  salary: string;
  address: string;
  joinDate: string;
  status: string;
  specialization: string;
  imageUrl?: string;
  notes?: string;
};

const staffList: Staff[] = [
  {
    id: 1,
    fullName: "Nethmi Perera",
    role: "Senior Stylist",
    email: "nethmi@example.com",
    phone: "+94 77 123 4567",
    shift: "9:00 AM - 6:00 PM",
    salary: "75000",
    address: "Colombo, Sri Lanka",
    joinDate: "2025-01-15",
    status: "Active",
    specialization: "Hair Styling, Hair Coloring",
    imageUrl: "",
    notes: "Top performer in premium services",
  },
  {
    id: 2,
    fullName: "Kavindi Silva",
    role: "Hair Color Specialist",
    email: "kavindi@example.com",
    phone: "+94 71 987 6543",
    shift: "10:00 AM - 7:00 PM",
    salary: "68000",
    address: "Gampaha, Sri Lanka",
    joinDate: "2025-03-10",
    status: "Active",
    specialization: "Hair Coloring, Balayage",
    imageUrl: "",
    notes: "Handles most coloring appointments",
  },
  {
    id: 3,
    fullName: "Sanduni Fernando",
    role: "Beautician",
    email: "sanduni@example.com",
    phone: "+94 76 456 7890",
    shift: "8:30 AM - 5:30 PM",
    salary: "62000",
    address: "Kandy, Sri Lanka",
    joinDate: "2024-11-22",
    status: "On Leave",
    specialization: "Facial Treatment, Skin Care",
    imageUrl: "",
    notes: "Currently on approved leave",
  },
  {
    id: 4,
    fullName: "Tharushi Jayasekara",
    role: "Receptionist",
    email: "tharushi@example.com",
    phone: "+94 75 222 3344",
    shift: "9:00 AM - 5:00 PM",
    salary: "50000",
    address: "Panadura, Sri Lanka",
    joinDate: "2026-01-05",
    status: "Active",
    specialization: "Booking Management, Front Desk",
    imageUrl: "",
    notes: "Strong customer communication skills",
  },
  {
    id: 5,
    fullName: "Piumi Silva",
    role: "Makeup Artist",
    email: "piumi@example.com",
    phone: "+94 74 456 1111",
    shift: "11:00 AM - 8:00 PM",
    salary: "70000",
    address: "Negombo, Sri Lanka",
    joinDate: "2025-06-18",
    status: "Inactive",
    specialization: "Bridal Makeup, Party Makeup",
    imageUrl: "",
    notes: "Available on special bookings only",
  },
];

const ViewAllStaffPage = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectedStaff, setSelectedStaff] = useState<Staff | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const filteredStaff = useMemo(() => {
    const keyword = search.toLowerCase();

    return staffList.filter(
      (staff) =>
        staff.fullName.toLowerCase().includes(keyword) ||
        staff.role.toLowerCase().includes(keyword) ||
        staff.email.toLowerCase().includes(keyword) ||
        staff.phone.toLowerCase().includes(keyword) ||
        staff.status.toLowerCase().includes(keyword)
    );
  }, [search]);

  const handleView = (staff: Staff) => {
    setSelectedStaff(staff);
    setIsViewModalOpen(true);
  };

  const handleEdit = (staff: Staff) => {
    setSelectedStaff(staff);
    setIsEditModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedStaff(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedStaff(null);
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
              View All Staff
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              View and manage all salon staff members in one place.
            </p>
          </div>

          <div className="flex w-full max-w-md items-center rounded-xl border border-gray-200 bg-white px-3 py-3 shadow-sm">
            <Search className="mr-2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search staff..."
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
                <p className="text-sm text-gray-500">Total Staff</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">
                  {staffList.length}
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
                <p className="text-sm text-gray-500">Active Staff</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">3</h2>
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
                <h2 className="mt-2 text-2xl font-bold text-gray-800">1</h2>
              </div>
              <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
                <Briefcase className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Inactive</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">1</h2>
              </div>
              <div className="rounded-xl bg-red-100 p-3 text-red-600">
                <UserX className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Staff List</h2>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              {filteredStaff.length} Records
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="px-3 py-3 font-medium">Staff</th>
                  <th className="px-3 py-3 font-medium">Role</th>
                  <th className="px-3 py-3 font-medium">Contact</th>
                  <th className="px-3 py-3 font-medium">Shift</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredStaff.map((staff) => (
                  <tr key={staff.id} className="border-b last:border-b-0">
                    <td className="px-3 py-4">
                      <div>
                        <p className="font-semibold text-gray-800">
                          {staff.fullName}
                        </p>
                        <p className="text-xs text-gray-500">ID: #{staff.id}</p>
                      </div>
                    </td>

                    <td className="px-3 py-4">
                      <span className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700">
                        {staff.role}
                      </span>
                    </td>

                    <td className="px-3 py-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-3.5 w-3.5" />
                          <span>{staff.email}</span>
                        </div>
                        <div className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-3.5 w-3.5" />
                          <span>{staff.phone}</span>
                        </div>
                      </div>
                    </td>

                    <td className="px-3 py-4 text-gray-600">{staff.shift}</td>

                    <td className="px-3 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          staff.status === "Active"
                            ? "bg-green-100 text-green-600"
                            : staff.status === "On Leave"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {staff.status}
                      </span>
                    </td>

                    <td className="px-3 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleView(staff)}
                          className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          View
                        </button>

                        <button
                          onClick={() => handleEdit(staff)}
                          className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700 transition hover:bg-amber-100"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredStaff.length === 0 && (
                  <tr>
                    <td
                      colSpan={6}
                      className="px-3 py-10 text-center text-sm text-gray-500"
                    >
                      No staff found.
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
        title="Staff Details"
        onClose={closeViewModal}
      >
        {selectedStaff && (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <User className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {selectedStaff.fullName}
                </h3>
                <p className="text-sm text-blue-600">{selectedStaff.role}</p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Staff ID</span>
                <span className="font-medium text-gray-800">
                  #{selectedStaff.id}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Email</span>
                <span className="font-medium text-gray-800">
                  {selectedStaff.email}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Phone</span>
                <span className="font-medium text-gray-800">
                  {selectedStaff.phone}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Shift</span>
                <span className="font-medium text-gray-800">
                  {selectedStaff.shift}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Salary</span>
                <span className="font-medium text-gray-800">
                  ${selectedStaff.salary}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Join Date</span>
                <span className="font-medium text-gray-800">
                  {selectedStaff.joinDate}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Status</span>
                <span className="font-medium text-gray-800">
                  {selectedStaff.status}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="flex items-center gap-2 text-gray-500">
                  <MapPin className="h-4 w-4" />
                  Address
                </span>
                <span className="font-medium text-gray-800">
                  {selectedStaff.address}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="flex items-center gap-2 text-gray-500">
                  <Star className="h-4 w-4" />
                  Specialization
                </span>
                <span className="font-medium text-gray-800">
                  {selectedStaff.specialization}
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-blue-50 p-4">
              <p className="text-sm font-medium text-blue-700">Notes</p>
              <p className="mt-2 text-sm text-gray-700">
                {selectedStaff.notes || "No notes available."}
              </p>
            </div>
          </div>
        )}
      </DetailsModal>

      {isEditModalOpen && selectedStaff && (
        <StaffForm
          staffData={{
            fullName: selectedStaff.fullName,
            role: selectedStaff.role,
            email: selectedStaff.email,
            phone: selectedStaff.phone,
            shift: selectedStaff.shift,
            salary: selectedStaff.salary,
            address: selectedStaff.address,
            joinDate: selectedStaff.joinDate,
            status: selectedStaff.status,
            specialization: selectedStaff.specialization,
            imageUrl: selectedStaff.imageUrl || "",
            notes: selectedStaff.notes || "",
          }}
          onClose={closeEditModal}
        />
      )}
    </div>
  );
};

export default ViewAllStaffPage;