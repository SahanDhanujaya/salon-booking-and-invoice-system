"use client";
import InvoiceForm from "@/components/forms/InvoiceForm";
import {
  ReceiptText,
  DollarSign,
  Clock3,
  CheckCircle2,
  Plus,
  User,
  Scissors,
  CreditCard,
} from "lucide-react";
import Link from "next/link";
import { useState } from "react";

const invoices = [
  {
    invoiceNo: "INV-1001",
    customer: "Nethmi Perera",
    service: "Hair Cut & Styling",
    amount: "$25.00",
    date: "2026-04-21",
    status: "Paid",
  },
  {
    invoiceNo: "INV-1002",
    customer: "Kavindi Silva",
    service: "Hair Coloring",
    amount: "$60.00",
    date: "2026-04-21",
    status: "Pending",
  },
  {
    invoiceNo: "INV-1003",
    customer: "Sanduni Fernando",
    service: "Facial Treatment",
    amount: "$40.00",
    date: "2026-04-20",
    status: "Paid",
  },
  {
    invoiceNo: "INV-1004",
    customer: "Tharushi Jayasekara",
    service: "Bridal Package",
    amount: "$150.00",
    date: "2026-04-20",
    status: "Overdue",
  },
];

const recentActivities = [
  {
    invoiceNo: "INV-1001",
    action: "Invoice paid successfully",
    customer: "Nethmi Perera",
    time: "Today, 10:20 AM",
    status: "Paid",
  },
  {
    invoiceNo: "INV-1002",
    action: "Invoice created",
    customer: "Kavindi Silva",
    time: "Today, 12:45 PM",
    status: "Pending",
  },
  {
    invoiceNo: "INV-1003",
    action: "Payment received",
    customer: "Sanduni Fernando",
    time: "Yesterday, 5:30 PM",
    status: "Paid",
  },
  {
    invoiceNo: "INV-1004",
    action: "Payment reminder sent",
    customer: "Tharushi Jayasekara",
    time: "Yesterday, 6:10 PM",
    status: "Overdue",
  },
];

const InvoicePage = () => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  if (isFormOpen) {
    return (
      <InvoiceForm onClose={() => setIsFormOpen(false)} />
    );
  }
  return (
    <div className="min-h-screen bg-gray-50 p-4 md:p-6 mt-8">
      <div className="mb-6">
        <h1 className="text-3xl font-bold text-gray-800">Invoices</h1>
        <p className="mt-2 text-sm text-gray-500">
          Manage salon invoices, payments, due amounts, and billing activity.
        </p>
      </div>

      <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 xl:grid-cols-4">
        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Total Invoices</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">128</h2>
            </div>
            <div className="rounded-xl bg-blue-100 p-3 text-blue-600">
              <ReceiptText className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Paid Amount</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">$8,450</h2>
            </div>
            <div className="rounded-xl bg-green-100 p-3 text-green-600">
              <DollarSign className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Pending Payments</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">14</h2>
            </div>
            <div className="rounded-xl bg-yellow-100 p-3 text-yellow-600">
              <Clock3 className="h-5 w-5" />
            </div>
          </div>
        </div>

        <div className="rounded-2xl bg-white p-5 shadow-sm">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm text-gray-500">Collected Today</p>
              <h2 className="mt-2 text-2xl font-bold text-gray-800">$620</h2>
            </div>
            <div className="rounded-xl bg-purple-100 p-3 text-purple-600">
              <CheckCircle2 className="h-5 w-5" />
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
        <div className="xl:col-span-2 rounded-2xl bg-white p-5 shadow-sm h-fit">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">Invoice Records</h2>
            <button
              className="flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
              onClick={() => setIsFormOpen(true)}
            >
              <Plus className="h-4 w-4" />
              New Invoice
            </button>
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
                </tr>
              </thead>
              <tbody>
                {invoices.map((invoice) => (
                  <tr
                    key={invoice.invoiceNo}
                    className="border-b last:border-b-0"
                  >
                    <td className="px-3 py-4 font-medium text-gray-800">
                      {invoice.invoiceNo}
                    </td>
                    <td className="px-3 py-4 text-gray-700">
                      {invoice.customer}
                    </td>
                    <td className="px-3 py-4 text-gray-600">
                      {invoice.service}
                    </td>
                    <td className="px-3 py-4 font-medium text-gray-800">
                      {invoice.amount}
                    </td>
                    <td className="px-3 py-4 text-gray-600">{invoice.date}</td>
                    <td className="px-3 py-4">
                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          invoice.status === "Paid"
                            ? "bg-green-100 text-green-600"
                            : invoice.status === "Pending"
                            ? "bg-yellow-100 text-yellow-700"
                            : "bg-red-100 text-red-600"
                        }`}
                      >
                        {invoice.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="text-center">
            <Link href="/invoices/view-all" className="text-blue-600 hover:underline text-sm mt-4 inline-block">
              View All Invoices
            </Link>
          </div>
        </div>

        <div className="space-y-6">
          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Create Invoice
            </h2>

            <form className="space-y-4">
              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Customer Name
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5">
                  <User className="h-4 w-4 text-gray-400" />
                  <input
                    type="text"
                    placeholder="Enter customer name"
                    className="w-full bg-transparent text-sm outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Service
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5">
                  <Scissors className="h-4 w-4 text-gray-400" />
                  <select className="w-full bg-transparent text-sm outline-none">
                    <option>Hair Cut & Styling</option>
                    <option>Hair Coloring</option>
                    <option>Facial Treatment</option>
                    <option>Bridal Package</option>
                    <option>Manicure & Pedicure</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Amount
                </label>
                <input
                  type="text"
                  placeholder="$0.00"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Payment Method
                </label>
                <div className="flex items-center gap-2 rounded-xl border border-gray-200 px-3 py-2.5">
                  <CreditCard className="h-4 w-4 text-gray-400" />
                  <select className="w-full bg-transparent text-sm outline-none">
                    <option>Cash</option>
                    <option>Card</option>
                    <option>Online Payment</option>
                  </select>
                </div>
              </div>

              <div>
                <label className="mb-2 block text-sm font-medium text-gray-600">
                  Invoice Date
                </label>
                <input
                  type="date"
                  className="w-full rounded-xl border border-gray-200 px-4 py-2.5 text-sm outline-none focus:border-blue-500"
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl bg-blue-600 py-3 text-sm font-medium text-white hover:bg-blue-700"
              >
                Generate Invoice
              </button>
            </form>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <h2 className="mb-4 text-xl font-bold text-gray-800">
              Payment Summary
            </h2>

            <div className="space-y-4 text-sm text-gray-600">
              <div className="flex items-center justify-between">
                <span>Paid Invoices</span>
                <span className="font-semibold text-gray-800">102</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Pending Invoices</span>
                <span className="font-semibold text-gray-800">14</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Overdue Invoices</span>
                <span className="font-semibold text-gray-800">12</span>
              </div>
              <div className="flex items-center justify-between">
                <span>Most Used Method</span>
                <span className="font-semibold text-gray-800">Card</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="mt-6 rounded-2xl bg-white p-5 shadow-sm">
        <h2 className="mb-4 text-xl font-bold text-gray-800">
          Recent Invoice Activity
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full text-left text-sm">
            <thead>
              <tr className="border-b text-gray-500">
                <th className="px-3 py-3 font-medium">Invoice No</th>
                <th className="px-3 py-3 font-medium">Customer</th>
                <th className="px-3 py-3 font-medium">Activity</th>
                <th className="px-3 py-3 font-medium">Time</th>
                <th className="px-3 py-3 font-medium">Status</th>
              </tr>
            </thead>
            <tbody>
              {recentActivities.map((activity) => (
                <tr
                  key={activity.invoiceNo}
                  className="border-b last:border-b-0"
                >
                  <td className="px-3 py-4 font-medium text-gray-800">
                    {activity.invoiceNo}
                  </td>
                  <td className="px-3 py-4 text-gray-700">
                    {activity.customer}
                  </td>
                  <td className="px-3 py-4 text-gray-600">
                    {activity.action}
                  </td>
                  <td className="px-3 py-4 text-gray-600">{activity.time}</td>
                  <td className="px-3 py-4">
                    <span
                      className={`rounded-full px-3 py-1 text-xs font-medium ${
                        activity.status === "Paid"
                          ? "bg-green-100 text-green-600"
                          : activity.status === "Pending"
                          ? "bg-yellow-100 text-yellow-700"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {activity.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default InvoicePage;