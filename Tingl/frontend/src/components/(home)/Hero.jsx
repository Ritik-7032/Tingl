import React from "react";
import { Link } from "react-router-dom"; // ✅ FIXED

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-gray-50 to-white flex items-center px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">

        <div className="space-y-8 text-center lg:text-left">
          
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight text-black">
            Speak Like <br className="hidden sm:block" />
            Nobody's Listening
          </h1>

          <p className="text-base sm:text-lg text-gray-600 leading-relaxed max-w-md mx-auto lg:mx-0">
            Tingl is a modern messaging app that helps you connect instantly.
            Simple, secure, and built for meaningful conversations.
          </p>

          <div className="flex flex-col sm:flex-row justify-center lg:justify-start gap-4">
            
            <Link
              to="/signup"
              className="px-6 py-2 font-semibold text-white bg-yellow-600 rounded-lg hover:bg-yellow-500 transition"
            >
              Get Started →
            </Link>

            <Link
              to="/login"
              className="px-6 py-2 font-semibold text-white bg-black rounded-lg hover:bg-gray-800 transition"
            >
              Login →
            </Link>

          </div>

          <div className="pt-6 border-t border-gray-200 text-sm text-gray-500">
            No downloads required. Start chatting instantly.
          </div>

        </div>

        <div className="flex justify-center lg:justify-end">
          <img
            src="/logo.png"
            alt="Tingl Logo"
            className="w-full max-w-md object-contain"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;