"use client";

import { X } from "lucide-react";

type DetailsModalProps = {
  isOpen: boolean;
  title: string;
  onClose: () => void;
  children: React.ReactNode;
  maxWidthClass?: string;
};

const DetailsModal = ({
  isOpen,
  title,
  onClose,
  children,
  maxWidthClass = "max-w-lg",
}: DetailsModalProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[999] flex items-center justify-center bg-black/40 p-4 backdrop-blur-sm">
      <div
        className={`hide-scrollbar max-h-[95vh] w-full overflow-y-auto rounded-3xl bg-white shadow-2xl ${maxWidthClass}`}
      >
        <div className="sticky top-0 z-10 flex items-center justify-between border-b border-gray-200 bg-white px-6 py-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>

          <button
            type="button"
            onClick={onClose}
            className="rounded-xl p-2 text-gray-500 transition hover:bg-gray-100 hover:text-gray-700"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        <div className="p-6">{children}</div>
      </div>
    </div>
  );
};

export default DetailsModal;