"use client";

import { useState } from "react";
import {
  ReceiptText,
  User,
  Scissors,
  DollarSign,
  CalendarDays,
  CreditCard,
  FileText,
  Hash,
  X,
} from "lucide-react";
import { toast } from "react-toastify";
import { InvoiceFormData } from "@/types/invoice";

interface InvoiceFormProps {
  invoice?: InvoiceFormData;
  onClose: () => void;
}

const InvoiceForm = ({ invoice, onClose }: InvoiceFormProps) => {
  const [formData, setFormData] = useState<InvoiceFormData>({
    invoiceNo: invoice?.invoiceNo || "",
    customerName: invoice?.customerName || "",
    service: invoice?.service || "",
    amount: invoice?.amount || "",
    invoiceDate: invoice?.invoiceDate || "",
    dueDate: invoice?.dueDate || "",
    paymentMethod: invoice?.paymentMethod || "Cash",
    paymentStatus: invoice?.paymentStatus || "Pending",
    notes: invoice?.notes || "",
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
      invoiceNo: "",
      customerName: "",
      service: "",
      amount: "",
      invoiceDate: "",
      dueDate: "",
      paymentMethod: "Cash",
      paymentStatus: "Pending",
      notes: "",
    });
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!formData.invoiceNo.trim()) {
      toast.error("Invoice number is required");
      return;
    }

    if (!formData.customerName.trim()) {
      toast.error("Customer name is required");
      return;
    }

    if (!formData.service.trim()) {
      toast.error("Service is required");
      return;
    }

    if (!formData.amount || Number(formData.amount) <= 0) {
      toast.error("Enter a valid amount");
      return;
    }

    if (!formData.invoiceDate) {
      toast.error("Invoice date is required");
      return;
    }

    setLoading(true);

    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      toast.success(
        invoice ? "Invoice updated successfully!" : "Invoice created successfully!"
      );

      handleReset();
      onClose();
    } catch (error) {
      console.error(error);
      toast.error("Failed to save invoice");
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
              {invoice ? "Edit Invoice" : "Create Invoice"}
            </h2>
            <p className="text-sm text-gray-500">
              Fill in the invoice details below
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
                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Invoice Number
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <Hash className="h-4 w-4 text-gray-400" />
                    <input
                      type="text"
                      name="invoiceNo"
                      value={formData.invoiceNo}
                      onChange={handleChange}
                      placeholder="INV-1001"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
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
                      <option value="Manicure & Pedicure">Manicure & Pedicure</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Amount
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <DollarSign className="h-4 w-4 text-gray-400" />
                    <input
                      type="number"
                      name="amount"
                      min="0"
                      step="0.01"
                      value={formData.amount}
                      onChange={handleChange}
                      placeholder="0.00"
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Invoice Date
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <CalendarDays className="h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      name="invoiceDate"
                      value={formData.invoiceDate}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Due Date
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <CalendarDays className="h-4 w-4 text-gray-400" />
                    <input
                      type="date"
                      name="dueDate"
                      value={formData.dueDate}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm outline-none"
                    />
                  </div>
                </div>

                <div>
                  <label className="mb-2 block text-sm font-medium text-gray-600">
                    Payment Method
                  </label>
                  <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-3 focus-within:border-blue-500">
                    <CreditCard className="h-4 w-4 text-gray-400" />
                    <select
                      name="paymentMethod"
                      value={formData.paymentMethod}
                      onChange={handleChange}
                      className="w-full bg-transparent text-sm outline-none"
                    >
                      <option value="Cash">Cash</option>
                      <option value="Card">Card</option>
                      <option value="Online Payment">Online Payment</option>
                      <option value="Bank Transfer">Bank Transfer</option>
                    </select>
                  </div>
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
                    <option value="Pending">Pending</option>
                    <option value="Paid">Paid</option>
                    <option value="Partial">Partial</option>
                    <option value="Overdue">Overdue</option>
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
                  {loading ? "Saving..." : invoice ? "Update Invoice" : "Create Invoice"}
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
                <div className="mb-4 flex items-center justify-center">
                  <div className="rounded-full bg-blue-100 p-4">
                    <ReceiptText className="h-8 w-8 text-blue-600" />
                  </div>
                </div>

                <h4 className="text-center text-lg font-semibold text-gray-800">
                  {formData.invoiceNo || "Invoice Number"}
                </h4>
                <p className="mt-1 text-center text-sm text-blue-600">
                  {formData.customerName || "Customer Name"}
                </p>

                <div className="mt-4 space-y-2 text-sm text-gray-600">
                  <div className="flex items-center justify-between">
                    <span>Service</span>
                    <span className="font-medium text-gray-800">
                      {formData.service || "-"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Amount</span>
                    <span className="font-medium text-gray-800">
                      {formData.amount ? `$${formData.amount}` : "$0.00"}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Payment Method</span>
                    <span className="font-medium text-gray-800">
                      {formData.paymentMethod}
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span>Status</span>
                    <span className="rounded-full bg-green-100 px-3 py-1 text-xs font-medium text-green-600">
                      {formData.paymentStatus}
                    </span>
                  </div>
                </div>

                <p className="mt-4 text-sm text-gray-500">
                  {formData.notes || "Invoice notes will appear here."}
                </p>
              </div>
            </div>

            <div className="rounded-2xl border border-gray-100 bg-gray-50 p-5">
              <h3 className="mb-4 text-lg font-semibold text-gray-800">Tips</h3>
              <ul className="space-y-3 text-sm text-gray-600">
                <li className="rounded-xl bg-white p-3">
                  Use a unique invoice number for each transaction.
                </li>
                <li className="rounded-xl bg-white p-3">
                  Always verify the amount before saving the invoice.
                </li>
                <li className="rounded-xl bg-white p-3">
                  Add notes for discounts, special charges, or payment remarks.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InvoiceForm;