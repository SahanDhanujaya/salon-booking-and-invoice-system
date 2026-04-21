"use client";

import { useAside } from "@/app/provider/AsideContext";
import { MenuIcon, SearchIcon, User } from "lucide-react";

const DefaultHeader = () => {
  const { toggleAside } = useAside();

  const localDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  return (
    <header className="flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/80 px-3 shadow-md backdrop-blur-xl sm:px-4 fixed">
      <button
        type="button"
        aria-label="Open menu"
        onClick={toggleAside}
        className="mr-2 shrink-0 rounded-md p-2 transition-transform duration-150 ease-in-out hover:scale-110 hover:bg-gray-100"
      >
        <MenuIcon className="h-5 w-5 text-gray-700" />
      </button>

      <div className="flex items-center rounded-lg border border-gray-200 bg-white px-3 py-2 w-full max-w-md lg:max-w-lg">
        <SearchIcon className="mr-2 h-4 w-4 shrink-0 text-gray-400" />
        <input
          type="search"
          placeholder="Search..."
          className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
        />
      </div>
      <div className="flex items-center gap-1   ">
        <div className="ml-2 hidden shrink-0 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 md:block">
          {localDate}
        </div>
        <div className="rounded-full bg-gray-100 p-2">
          <User className="h-6 w-6 text-gray-700" />
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;
