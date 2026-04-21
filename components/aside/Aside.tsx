"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BookIcon,
  LayoutDashboardIcon,
  Paperclip,
  Receipt,
  ScissorsIcon,
  User,
  Users,
  X,
} from "lucide-react";
import { useAside } from "@/app/provider/AsideContext";
import AsideFooter from "../footers/AsideFooter";

const menuItems = [
  {
    name: "Dashboard",
    href: "/dashboard",
    icon: <LayoutDashboardIcon className="h-4 w-4 mr-1" />,
  },
  {
    name: "Services",
    href: "/services",
    icon: <ScissorsIcon className="h-4 w-4 mr-1" />,
  },
  { name: "Customers", href: "/customers", icon: <User className="h-4 w-4 mr-1" /> },
  { name: "Staff", href: "/staff", icon: <Users className="h-4 w-4 mr-1" /> },
  {
    name: "Appointments",
    href: "/appointments",
    icon: <BookIcon className="h-4 w-4 mr-1" />,
  },
  { name: "Invoice", href: "/invoice", icon: <Receipt className="h-4 w-4 mr-1" /> },
  {
    name: "Reports",
    href: "/reports",
    icon: <Paperclip className="h-4 w-4 mr-1" />,
  },
];

const Aside = () => {
  const pathname = usePathname();
  const { isAsideOpen, closeAside } = useAside();

  return (
    <>
      {isAsideOpen && (
        <div className="fixed inset-0 z-40 bg-black/30" onClick={closeAside} />
      )}

      <aside
        className={`fixed left-0 top-0 z-50 h-screen w-64 bg-white shadow-xl border-r border-gray-200 transform transition-transform duration-300 ${
          isAsideOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex h-16 items-center justify-between border-b border-gray-200 px-4">
          <h1 className="text-lg font-bold text-gray-800">Saloon System</h1>
          <button
            type="button"
            onClick={closeAside}
            className="rounded-md p-2 hover:bg-gray-100"
          >
            <X className="h-5 w-5 text-gray-700 transition-transform duration-500 ease-in-out hover:rotate-180" />
          </button>
        </div>

        <nav className="space-y-2 p-4">
          {menuItems.map((item, index) => {
            const isActive = pathname === item.href;

            return (
              <div
                key={index}
                className={`flex items-center rounded-xl px-4 py-3 text-sm font-medium transition ${
                  isActive
                    ? "bg-blue-400 text-white"
                    : "text-gray-700 hover:bg-gray-100 hover:text-blue-600"
                }`}
              >
                {item.icon}
                <Link key={item.name} href={item.href} onClick={closeAside}>
                  {item.name}
                </Link>
              </div>
            );
          })}
        </nav>
        <div>
            <AsideFooter />
        </div>
      </aside>
    </>
  );
};

export default Aside;
