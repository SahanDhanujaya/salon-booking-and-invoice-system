"use client";

import { usePathname } from "next/navigation";
import { AsideProvider } from "./AsideContext";
import DefaultHeader from "@/components/headers/DefaultHeader";
import Aside from "@/components/aside/Aside";
import DefaultFooter from "@/components/footers/DefaultFooter";

export default function LayoutWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  const isAuthPage =
    pathname === "/auth/signin" || pathname === "/auth/signup";

  if (isAuthPage) {
    return <>{children}</>;
  }

  return (
    <AsideProvider>
      <div className="min-h-screen bg-gray-50">
        <Aside />
        <div className="flex flex-col">
          <DefaultHeader />
          <main className="p-4">{children}</main>
          <DefaultFooter />
        </div>
      </div>
    </AsideProvider>
  );
}