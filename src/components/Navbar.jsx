import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* Navbar cố định */}
      <header className="bg-black text-teal-50 shadow-md fixed top-0 left-0 w-full z-50 h-20">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-4 py-3 h-full">
          {/* Logo */}
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

          {/* Menu desktop */}
          <nav className="hidden md:flex items-center space-x-6 text-sm uppercase font-semibold whitespace-nowrap">
            <a href="#intro" className="hover:text-blue-500 transition-all">Trang chủ</a>
            <a href="#hero" className="hover:text-blue-500 transition-all">Giới thiệu</a>
            <a href="#gallery" className="hover:text-blue-500 transition-all">Hình ảnh</a>
            <a href="#ambassadors" className="hover:text-blue-500 transition-all">Đối tác</a>
            <a href="#details" className="hover:text-blue-600 transition-all">Chi tiết</a>
            <a href="#contact" className="hover:text-blue-500 transition-all">Liên hệ</a>
          </nav>

          {/* Nút mở menu mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-md hover:bg-teal-800/20 focus:outline-none focus:ring-2 focus:ring-teal-100 transition"
            >
              {isOpen ? <FaTimes className="text-2xl" /> : <FaBars className="text-2xl" />}
            </button>
          </div>
        </div>
      </header>

      {/* Spacer để đẩy phần dưới không bị đè */}
      <div className="h-20" />

      {/* Menu mobile (dropdown) */}
      {isOpen && (
        <div className="md:hidden w-full bg-black border-t border-teal-100 px-4 py-2 space-y-1 fixed top-20 left-0 z-40">
          {[
            ["#intro", "Trang chủ"],
            ["#hero", "Giới thiệu"],
            ["#gallery", "Hình ảnh"],
            ["#ambassadors", "Đối tác"],
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
    </>
  );
}
