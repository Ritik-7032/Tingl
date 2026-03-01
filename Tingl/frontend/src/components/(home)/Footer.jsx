import React from "react";

const Footer = () => {
  return (
    <footer className="bg-white border-t border-gray-200 px-6 py-8">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        
        <div className="flex items-center gap-2">
          <span className="text-xl">✨</span>
          <span className="font-semibold text-gray-800">Tingl</span>
        </div>

        <div className="flex gap-6 text-sm text-gray-600">
          <a href="#" className="hover:text-black transition">
            Privacy
          </a>
          <a href="#" className="hover:text-black transition">
            Terms
          </a>
          <a href="#" className="hover:text-black transition">
            Contact
          </a>
        </div>
        <div className="text-sm text-gray-500">
          © {new Date().getFullYear()} Tingl. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;