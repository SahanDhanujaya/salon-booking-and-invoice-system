"use client";

import { createContext, useContext, useState } from "react";

type AsideContextType = {
  isAsideOpen: boolean;
  toggleAside: () => void;
  closeAside: () => void;
};

const AsideContext = createContext<AsideContextType | undefined>(undefined);

export const AsideProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);

  const toggleAside = () => setIsAsideOpen((prev) => !prev);
  const closeAside = () => setIsAsideOpen(false);

  return (
    <AsideContext.Provider value={{ isAsideOpen, toggleAside, closeAside }}>
      {children}
    </AsideContext.Provider>
  );
};

export const useAside = () => {
  const context = useContext(AsideContext);

  if (!context) {
    throw new Error("useAside must be used inside AsideProvider");
  }

  return context;
};