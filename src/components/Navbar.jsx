import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-black text-teal-300 shadow-md fixed top-0 left-0 w-full z-50">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3">
        <div className="w-28 h-14 flex items-center shrink-0">
          <a href="#intro" className="block hover:opacity-80 transition">
            <img
              src="/images/logo_arena.svg"
              alt="Arena Logo"
              className="w-full h-full object-contain"
              draggable={false}
            />
          </a>
        </div>

        <nav className="hidden md:flex items-center space-x-6 text-sm uppercase font-semibold whitespace-nowrap">
          <a href="#intro" className="hover:text-teal-500 transition-all">Trang chủ</a>
          <a href="#hero" className="hover:text-teal-500 transition-all">Giới thiệu</a>
          <a href="#gallery" className="hover:text-teal-500 transition-all">Hình ảnh</a>
          <a href="#partners" className="hover:text-teal-500 transition-all">Đối tác</a>
          <a href="#details" className="hover:text-teal-500 transition-all">Chi tiết</a>
          <a href="#contact" className="hover:text-teal-500 transition-all">Liên hệ</a>
        </nav>

        <div className="md:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 rounded-md hover:bg-teal-800/20 focus:outline-none focus:ring-2 focus:ring-teal-500 transition"
          >
            {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden w-full bg-black border-t border-teal-300 px-4 py-2 space-y-1">
          {[
            ["#intro", "Trang chủ"],
            ["#hero", "Giới thiệu"],
            ["#gallery", "Hình ảnh"],
            ["#partners", "Đối tác"],
            ["#details", "Chi tiết"],
            ["#contact", "Liên hệ"],
          ].map(([href, label]) => (
            <a
              key={href}
              href={href}
              className="block text-sm py-2 hover:bg-teal-800/20 rounded transition-all"
              onClick={() => setIsOpen(false)}
            >
              {label}
            </a>
          ))}
        </div>
      )}
    </header>
  );
}
