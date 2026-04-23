"use client";

import { createContext, useContext, useState } from "react";

type AsideContextType = {
  isAsideOpen: boolean;
  currentTab: string;
  toggleAside: () => void;
  closeAside: () => void;
  setCurrentTabName: (tabName: string) => void;
};

const AsideContext = createContext<AsideContextType | undefined>(undefined);

export const AsideProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [isAsideOpen, setIsAsideOpen] = useState(false);
  const [currentTab, setCurrentTab] = useState("Dashboard");
  const toggleAside = () => setIsAsideOpen((prev) => !prev);
  const closeAside = () => setIsAsideOpen(false);

  const setCurrentTabName = (tabName: string) => {
    setCurrentTab(tabName);
  }

  return (
    <AsideContext.Provider value={{ isAsideOpen, currentTab, toggleAside, closeAside, setCurrentTabName }}>
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