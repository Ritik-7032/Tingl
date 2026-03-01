import React, { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";
import { Link } from "react-router";
const Header = () => {
  
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
       
        <div className="flex items-center gap-2 cursor-pointer">
            <img
    src="/tingl.png"
    alt="Tingl Logo"
    className="w-12 h-15 object-contain"
  />
        </div>

       <div className="flex flex-col sm:flex-row items-center gap-4">

 
  <Link
    to="/login"
    className="px-6 py-2 font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition"
  >
    Login →
  </Link>

  <Link
    to="/signup"
    className="px-6 py-2 font-semibold text-white bg-yellow-600 rounded-lg hover:bg-gray-800 transition"
  >
     Get Started →
  </Link>

</div>

        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      
      {mobileOpen && (
        <div className="md:hidden px-6 pb-4 space-y-4 bg-white border-t border-gray-200">
          <a href="#" className="block text-gray-700">Blog</a>
          <a href="#" className="block text-gray-700">Documentation</a>
          <a href="#" className="block text-gray-700">Help Center</a>

          <button className="w-full px-4 py-2 bg-yellow-400 rounded-lg font-semibold">
            Sign Up Free
          </button>
          <button className="w-full px-4 py-2 bg-black text-white rounded-lg font-semibold">
            Login
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;