"use client";

import { useAside } from "@/app/provider/AsideContext";
import { MenuIcon, SearchIcon, User, LogOut, UserCircle2 } from "lucide-react";
import { useEffect, useRef, useState } from "react";
import useNavigateWithLoader from "@/hooks/useNavigateWithLoader";

const DefaultHeader = () => {
  const { toggleAside } = useAside();
  const [openProfileMenu, setOpenProfileMenu] = useState(false);
  const menuRef = useRef<HTMLDivElement | null>(null);
  const { navigate } = useNavigateWithLoader();

  const localDate = new Date().toLocaleDateString("en-US", {
    weekday: "short",
    month: "short",
    day: "numeric",
    year: "numeric",
  });

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (!menuRef.current?.contains(event.target as Node)) {
        setOpenProfileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleProfile = () => {
  setOpenProfileMenu(false);
  navigate("/profile");
};

const handleLogout = () => {
  setOpenProfileMenu(false);
  navigate("/auth/signin");
};

  return (
    <header>
      <div className="fixed flex h-16 w-full items-center justify-between border-b border-gray-200 bg-white/80 px-3 shadow-md backdrop-blur-xl sm:px-4 z-100">
        <button
          type="button"
          aria-label="Open menu"
          onClick={toggleAside}
          className="mr-2 shrink-0 rounded-md p-2 transition-transform duration-150 ease-in-out hover:scale-110 hover:bg-gray-100"
        >
          <MenuIcon className="h-5 w-5 text-gray-700" />
        </button>

        <div className="flex w-full max-w-md items-center rounded-lg border border-gray-200 bg-white px-3 py-2 lg:max-w-lg">
          <SearchIcon className="mr-2 h-4 w-4 shrink-0 text-gray-400" />
          <input
            type="search"
            placeholder="Search..."
            className="w-full bg-transparent text-sm outline-none placeholder:text-gray-400"
          />
        </div>

        <div className="flex items-center gap-2">
          <div className="ml-2 hidden shrink-0 rounded-lg bg-blue-50 px-3 py-2 text-sm font-medium text-blue-700 md:block">
            {localDate}
          </div>

          <div className="relative" ref={menuRef}>
            <button
              type="button"
              onClick={() => setOpenProfileMenu((prev) => !prev)}
              className="rounded-full bg-gray-100 p-2 transition hover:bg-gray-200"
            >
              <User className="h-6 w-6 text-gray-700" />
            </button>

            {openProfileMenu && (
              <div className="absolute right-0 top-12 z-50 w-44 rounded-xl border border-gray-200 bg-white p-2 shadow-lg">
                <button
                  type="button"
                  onClick={handleProfile}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-gray-700 transition hover:bg-gray-100"
                >
                  <UserCircle2 className="h-4 w-4" />
                  Profile
                </button>

                <button
                  type="button"
                  onClick={handleLogout}
                  className="flex w-full items-center gap-2 rounded-lg px-3 py-2 text-sm text-red-600 transition hover:bg-red-50"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </div>
      </div>
    </header>
  );
};

export default DefaultHeader;
