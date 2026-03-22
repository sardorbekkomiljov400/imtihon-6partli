import React from "react";

interface ModalProps {
  open: boolean;
  onClose: () => void;
  title?: string;
  footer?: React.ReactNode;
  children: React.ReactNode;
}

function Modal({ open, onClose, title, footer, children }: ModalProps) {
  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      
      {/* Overlay */}
      <div
        onClick={onClose}
        className="absolute inset-0 bg-black/50 backdrop-blur-md transition"
      />

      {/* Modal */}
      <div
        className="
        relative w-full max-w-lg mx-4
        rounded-3xl
        bg-white/90 backdrop-blur-xl
        shadow-[0_25px_80px_rgba(0,0,0,0.25)]
        border border-white/40
        animate-fadeIn
      "
      >
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4 border-b border-black/5">
          <h2 className="text-lg font-semibold text-gray-800">
            {title || "Modal"}
          </h2>

          <button
            onClick={onClose}
            className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-black/5 transition"
          >
            ✕
          </button>
        </div>

        {/* Body */}
        <div className="p-6 text-gray-600 text-sm leading-relaxed">
          {children}
        </div>

        {/* Footer */}
        {footer && (
          <div className="px-6 py-4 border-t border-black/5 flex justify-end gap-3">
            {footer}
          </div>
        )}
      </div>
    </div>
  );
}

export default Modal;