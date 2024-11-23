import React, { useEffect, useRef } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

const MobileMenu = ({ isOpen, onClose }) => {
  const menuRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen, onClose]);

  const handleLinkClick = () => {
    onClose();
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          ref={menuRef}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="absolute top-16 left-0 right-0 bg-[#FCF5F5] border-b rounded-b-3xl shadow-2xl shadow-[#c87171] md:hidden"
        >
          <div className="px-4 py-2 space-y-4">
            <Link
              href="/"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={handleLinkClick}
            >
              Home
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={handleLinkClick}
            >
              Features
            </Link>
            <Link
              href="/pricings"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={handleLinkClick}
            >
              Pricing
            </Link>
            <Link
              href="#"
              className="block text-gray-700 hover:text-gray-900 py-2"
              onClick={handleLinkClick}
            >
              Solutions
            </Link>

            <hr className="border-t border-gray-200" />

            <div className="flex items-center justify-between gap-2">
              <button
                className="w-48 bg-[#F54F35] text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                onClick={handleLinkClick}
              >
                Login
              </button>
              <button
                className="w-48 bg-[#F54F35] text-white px-4 py-2 rounded-md hover:bg-red-600 transition-colors"
                onClick={handleLinkClick}
              >
                Try For Free
              </button>
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
