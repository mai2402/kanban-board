import React from "react";
import { MdClose } from "react-icons/md";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  children: React.ReactNode;
  title?: string;
}

function Modal({ isOpen, onClose, children, title }:ModalProps){
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50 rounded-2xl">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-1/2 my-4">
        <div className="flex justify-between items-center border-b pb-2">
          <h2 className="text-lg font-bold">{title}</h2>
          <button
            onClick={onClose}
            className="text-gray-500 hover:text-black focus:outline-none"
          >
           <MdClose size={24} className="text-gray-600 hover:text-red-500" />
          </button>
        </div>
        <div className="mt-4">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
