import React from "react";
import { FaFacebookF, FaInstagram, FaYoutube, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-blue-600 text-teal-400 py-10 border-t border-teal-600">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-start space-y-8 md:space-y-0 md:space-x-8">
        
        <div className="flex-1 space-y-4 text-left">
          <h2 className="text-2xl font-bold text-teal-300">
            Bảng điểm thông minh arena club
          </h2>
          <p className="text-sm text-teal-400">
            © {new Date().getFullYear()} Arena Club. All rights reserved.
          </p>

          <div className="flex space-x-6 text-xl mt-4">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
              <FaFacebookF />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
              <FaInstagram />
            </a>
            <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="hover:text-white transition-all">
              <FaYoutube />
            </a>
            <a href="mailto:contact@arenaclub.vn" className="hover:text-white transition-all">
              <FaEnvelope />
            </a>
          </div>

          <p className="text-xs text-teal-500 pt-2">Made with 💻 & ☕ in Bình Dương</p>
        </div>

        <div className="flex-1 w-full md:w-1/2">
          <iframe
            title="Arena Club Map"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3918.9942012923866!2d106.68218851474985!3d10.81705389229669!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x317528f1e6e6b6cf%3A0x61e95e2e1f0ee49a!2zQ2jhu6MgVGjhu6cgQsOhIFTDom4gUXXhuq1uLCBUaOG7pyBC4bqvYyBLaeG7h3U!5e0!3m2!1svi!2s!4v1718785032921!5m2!1svi!2s"
            width="100%"
            height="200"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="rounded-xl shadow-lg"
          ></iframe>
        </div>
      </div>
    </footer>
  );
}
