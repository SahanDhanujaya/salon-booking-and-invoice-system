"use client";

import { useMemo, useState } from "react";
import { useRouter } from "next/navigation";
import {
  ArrowLeft,
  Search,
  ReceiptText,
  DollarSign,
  Clock3,
  CheckCircle2,
  Eye,
  Pencil,
  CalendarDays,
  FileText,
} from "lucide-react";
import DetailsModal from "@/components/common/modals/DetailsModal";
import InvoiceForm from "@/components/forms/InvoiceForm";

type Invoice = {
  id: number;
  invoiceNo: string;
  customerName: string;
  service: string;
  amount: string;
  invoiceDate: string;
  dueDate: string;
  paymentMethod: string;
  paymentStatus: string;
  notes?: string;
};

const invoiceList: Invoice[] = [
  {
    id: 1,
    invoiceNo: "INV-1001",
    customerName: "Nethmi Perera",
    service: "Hair Cut & Styling",
    amount: "25.00",
    invoiceDate: "2026-04-26",
    dueDate: "2026-04-26",
    paymentMethod: "Cash",
    paymentStatus: "Paid",
    notes: "Paid at counter",
  },
  {
    id: 2,
    invoiceNo: "INV-1002",
    customerName: "Kavindi Silva",
    service: "Hair Coloring",
    amount: "60.00",
    invoiceDate: "2026-04-26",
    dueDate: "2026-04-28",
    paymentMethod: "Card",
    paymentStatus: "Pending",
    notes: "Customer will pay after service",
  },
  {
    id: 3,
    invoiceNo: "INV-1003",
    customerName: "Sanduni Fernando",
    service: "Facial Treatment",
    amount: "40.00",
    invoiceDate: "2026-04-25",
    dueDate: "2026-04-25",
    paymentMethod: "Online Payment",
    paymentStatus: "Paid",
    notes: "Online transfer completed",
  },
  {
    id: 4,
    invoiceNo: "INV-1004",
    customerName: "Tharushi Jayasekara",
    service: "Bridal Package",
    amount: "150.00",
    invoiceDate: "2026-04-24",
    dueDate: "2026-04-27",
    paymentMethod: "Bank Transfer",
    paymentStatus: "Overdue",
    notes: "Reminder sent to customer",
  },
];

const ViewAllInvoicesPage = () => {
  const router = useRouter();

  const [search, setSearch] = useState("");
  const [selectedInvoice, setSelectedInvoice] = useState<Invoice | null>(null);
  const [isViewModalOpen, setIsViewModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);

  const filteredInvoices = useMemo(() => {
    const keyword = search.toLowerCase();

    return invoiceList.filter(
      (invoice) =>
        invoice.invoiceNo.toLowerCase().includes(keyword) ||
        invoice.customerName.toLowerCase().includes(keyword) ||
        invoice.service.toLowerCase().includes(keyword) ||
        invoice.paymentStatus.toLowerCase().includes(keyword)
    );
  }, [search]);

  const handleView = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setIsViewModalOpen(true);
  };

  const handleEdit = (invoice: Invoice) => {
    setSelectedInvoice(invoice);
    setIsEditModalOpen(true);
  };

  const closeViewModal = () => {
    setIsViewModalOpen(false);
    setSelectedInvoice(null);
  };

  const closeEditModal = () => {
    setIsEditModalOpen(false);
    setSelectedInvoice(null);
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
              View All Invoices
            </h1>
            <p className="mt-2 text-sm text-gray-500">
              View and manage all salon invoices in one place.
            </p>
          </div>

          <div className="flex w-full max-w-md items-center rounded-xl border border-gray-200 bg-white px-3 py-3 shadow-sm">
            <Search className="mr-2 h-4 w-4 text-gray-400" />
            <input
              type="search"
              placeholder="Search invoice..."
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
                <p className="text-sm text-gray-500">Total Invoices</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">
                  {invoiceList.length}
                </h2>
              </div>
              <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
                <ReceiptText className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Paid</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">2</h2>
              </div>
              <div className="rounded-xl bg-green-100 p-3 text-green-600">
                <CheckCircle2 className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Pending / Overdue</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">2</h2>
              </div>
              <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
                <Clock3 className="h-5 w-5" />
              </div>
            </div>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-sm text-gray-500">Total Amount</p>
                <h2 className="mt-2 text-2xl font-bold text-gray-800">
                  $275.00
                </h2>
              </div>
              <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
                <DollarSign className="h-5 w-5" />
              </div>
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Invoice List</h2>
            <span className="rounded-full bg-blue-50 px-3 py-1 text-sm font-medium text-blue-600">
              {filteredInvoices.length} Records
            </span>
          </div>

          <div className="overflow-x-auto">
            <table className="min-w-full text-left text-sm">
              <thead>
                <tr className="border-b text-gray-500">
                  <th className="px-3 py-3 font-medium">Invoice No</th>
                  <th className="px-3 py-3 font-medium">Customer</th>
                  <th className="px-3 py-3 font-medium">Service</th>
                  <th className="px-3 py-3 font-medium">Amount</th>
                  <th className="px-3 py-3 font-medium">Date</th>
                  <th className="px-3 py-3 font-medium">Status</th>
                  <th className="px-3 py-3 font-medium">Action</th>
                </tr>
              </thead>
              <tbody>
                {filteredInvoices.map((invoice) => (
                  <tr key={invoice.id} className="border-b last:border-b-0">
                    <td className="px-3 py-4 font-semibold text-gray-800">
                      {invoice.invoiceNo}
                    </td>

                    <td className="px-3 py-4 text-gray-700">
                      {invoice.customerName}
                    </td>

                    <td className="px-3 py-4 text-gray-600">
                      {invoice.service}
                    </td>

                    <td className="px-3 py-4 font-medium text-gray-700">
                      ${invoice.amount}
                    </td>

                    <td className="px-3 py-4 text-gray-600">
                      {invoice.invoiceDate}
                    </td>

                    <td className="px-3 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          invoice.paymentStatus === "Paid"
                            ? "bg-green-100 text-green-600"
                            : invoice.paymentStatus === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : invoice.paymentStatus === "Partial"
                            ? "bg-blue-100 text-blue-600"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {invoice.paymentStatus}
                      </span>
                    </td>

                    <td className="px-3 py-4">
                      <div className="flex gap-2">
                        <button
                          onClick={() => handleView(invoice)}
                          className="inline-flex items-center gap-1 rounded-lg bg-gray-100 px-3 py-2 text-xs font-medium text-gray-700 transition hover:bg-blue-50 hover:text-blue-600"
                        >
                          <Eye className="h-3.5 w-3.5" />
                          View
                        </button>

                        <button
                          onClick={() => handleEdit(invoice)}
                          className="inline-flex items-center gap-1 rounded-lg bg-amber-50 px-3 py-2 text-xs font-medium text-amber-700 transition hover:bg-amber-100"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                          Edit
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}

                {filteredInvoices.length === 0 && (
                  <tr>
                    <td
                      colSpan={7}
                      className="px-3 py-10 text-center text-sm text-gray-500"
                    >
                      No invoices found.
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
        title="Invoice Details"
        onClose={closeViewModal}
      >
        {selectedInvoice && (
          <div>
            <div className="mb-6 flex items-center gap-4">
              <div className="flex h-16 w-16 items-center justify-center rounded-full bg-blue-100">
                <ReceiptText className="h-8 w-8 text-blue-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-800">
                  {selectedInvoice.invoiceNo}
                </h3>
                <p className="text-sm text-blue-600">
                  {selectedInvoice.customerName}
                </p>
              </div>
            </div>

            <div className="space-y-4 text-sm">
              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Service</span>
                <span className="font-medium text-gray-800">
                  {selectedInvoice.service}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Amount</span>
                <span className="font-medium text-gray-800">
                  ${selectedInvoice.amount}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="flex items-center gap-2 text-gray-500">
                  <CalendarDays className="h-4 w-4" />
                  Invoice Date
                </span>
                <span className="font-medium text-gray-800">
                  {selectedInvoice.invoiceDate}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Due Date</span>
                <span className="font-medium text-gray-800">
                  {selectedInvoice.dueDate}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Payment Method</span>
                <span className="font-medium text-gray-800">
                  {selectedInvoice.paymentMethod}
                </span>
              </div>

              <div className="flex items-center justify-between rounded-xl bg-gray-50 px-4 py-3">
                <span className="text-gray-500">Payment Status</span>
                <span className="font-medium text-gray-800">
                  {selectedInvoice.paymentStatus}
                </span>
              </div>
            </div>

            <div className="mt-5 rounded-2xl bg-blue-50 p-4">
              <p className="flex items-center gap-2 text-sm font-medium text-blue-700">
                <FileText className="h-4 w-4" />
                Notes
              </p>
              <p className="mt-2 text-sm text-gray-700">
                {selectedInvoice.notes || "No notes available."}
              </p>
            </div>
          </div>
        )}
      </DetailsModal>

      {isEditModalOpen && selectedInvoice && (
        <InvoiceForm
          invoice={{
            invoiceNo: selectedInvoice.invoiceNo,
            customerName: selectedInvoice.customerName,
            service: selectedInvoice.service,
            amount: selectedInvoice.amount,
            invoiceDate: selectedInvoice.invoiceDate,
            dueDate: selectedInvoice.dueDate,
            paymentMethod: selectedInvoice.paymentMethod,
            paymentStatus: selectedInvoice.paymentStatus,
            notes: selectedInvoice.notes || "",
          }}
          onClose={closeEditModal}
        />
      )}
    </div>
  );
};

export default ViewAllInvoicesPage;