"use client"
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white px-4 py-4 flex justify-between items-center">
      {/* Logo */}
      <div className="text-2xl font-bold ">Datafatching ASSIGNMENT</div>

      {/* Hamburger Menu Icon */}
      <div
        className="sm:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white mb-1"></div>
        <div className="w-6 h-1 bg-white"></div>
      </div>

      
      <div className="hidden sm:flex space-x-6 text-lg font-medium">
        <a href="/" className="hover:text-blue-500 transition-colors">
          Home
        </a>
        <a
          href="/clientside"
          className="hover:text-blue-500 transition-colors"
        >
          Client-Side
        </a>
        <a
          href="/serverside"
          className="hover:text-blue-500 transition-colors"
        >
          Server-Side
        </a>
      </div>

      {/* Dropdown menu for smaller screens */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-blue-700 text-white text-lg font-medium flex flex-col items-center py-4 space-y-4 sm:hidden">
          <a
            href="/"
            className="hover:text-yellow-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Home
          </a>
          <a
            href="/clientside"
            className="hover:text-yellow-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Client-Side
          </a>
          <a
            href="/serverside"
            className="hover:text-yellow-300 transition-colors"
            onClick={() => setIsOpen(false)}
          >
            Server-Side
          </a>
        </div>
      )}
    </nav>
  );
}
