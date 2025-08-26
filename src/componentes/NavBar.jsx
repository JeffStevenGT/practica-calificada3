// src/componentes/NavBar.jsx
import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function NavBar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="bg-white shadow-md h-[7%] w-screen z-50 relative">
      <div className="mx-auto px-4 xs:px-6 lg:px-68">
        <div className="flex justify-between items-center">
          <div className="flex items-center h-10 w-40 rounded">
            <img src="/logo.png" alt="Logo" className="h-6 w-auto" />
          </div>

          <div className="hidden md:flex space-x-3">
            {["Home", "Service", "Works", "News", "Contact"].map((item) => (
              <Link
                key={item}
                to={`/${item === "Home" ? "" : item}`}
                className="text-gray-700 hover:text-blue-600 px-3 py-2 text-xs font-medium cursor-pointer"
              >
                {item}
              </Link>
            ))}
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/Login"
              className="text-[#4e92f9] hover:text-blue-600 px-3 py-2 text-xs font-bold cursor-pointer"
            >
              Login
            </Link>
            <Link
              to="/SignUp"
              className="bg-white hover:bg-blue-700 px-4 py-2 rounded-md text-xs font-bold transition duration-300 bg-gradient-to-r from-[#bf92e3] to-[#4e92f9] bg-clip-text text-transparent shadow-sm cursor-pointer"
            >
              Sign Up
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-md text-gray-700 hover:text-blue-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
            >
              <svg
                className="h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-white shadow-md z-40 flex flex-col items-center py-4 space-y-2 md:hidden">
          {["Home", "Service", "Works", "News", "Contact"].map((item) => (
            <Link
              key={item}
              to={`/${item === "Home" ? "" : item}`}
              onClick={() => setIsMobileMenuOpen(false)}
              className="text-gray-700 text-start font-medium text-sm hover:text-blue-600"
            >
              {item}
            </Link>
          ))}

          <Link
            to="/Login"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-[40%] text-center text-white bg-[#4e92f9] py-2 rounded-md text-sm font-bold hover:bg-blue-600 transition cursor-pointer"
          >
            Login
          </Link>

          <Link
            to="/SignUp"
            onClick={() => setIsMobileMenuOpen(false)}
            className="w-[40%] text-center py-2 rounded-md text-sm font-bold bg-gradient-to-r from-[#bf92e3] to-[#4e92f9] text-white hover:opacity-90 transition cursor-pointer"
          >
            Sign Up
          </Link>
        </div>
      )}
    </nav>
  );
}
