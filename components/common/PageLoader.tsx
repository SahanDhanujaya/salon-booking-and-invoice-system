"use client";

import { useLoader } from "@/app/provider/LoaderContext";

const PageLoader = ({children}: { children: string }) => {
  const { isLoading } = useLoader();

  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/30 backdrop-blur-sm">
      <div className="flex flex-col items-center gap-3 rounded-2xl bg-white px-6 py-5 shadow-2xl">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-blue-600 border-t-transparent" />
        <p className="text-sm font-medium text-gray-700">{children}</p>
      </div>
    </div>
  );
};

export default PageLoader;