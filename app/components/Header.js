import React from "react";

export default function Header() {
  return (
    <header className="bg-black dark:bg-brand-dark shadow sticky top-0 z-50">
      {/* Top bar: Logo, Search, User, Cart */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-4 md:px-8">
        {/* Logo */}
        <div className="flex items-center space-x-2">
          <img
            src="/images/plywood.png"
            alt="Prime Woods & Ply Logo"
            className="h-10 w-10 object-contain"
          />
          <span className="font-heading text-xl font-bold text-brand-walnut dark:text-brand-sand">
            Prime Woods & Ply
          </span>
        </div>
        {/* Search Bar */}
        <form className="flex-1 mx-4 max-w-xl hidden md:flex">
          <input
            type="text"
            placeholder="Search products, brands & more"
            className="w-full px-4 py-2 rounded-l bg-brand-beige dark:bg-brand-darkbrown text-brand-walnut dark:text-brand-sand border border-brand-brown focus:outline-none"
          />
          <button
            type="submit"
            className="px-4 py-2 bg-brand-brown text-white rounded-r hover:bg-brand-walnut transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
              />
            </svg>
          </button>
        </form>
        {/* User & Cart */}
        <div className="flex items-center space-x-4">
          <button
            aria-label="Login / Signup"
            className="hover:text-brand-brown transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z"
              />
            </svg>
          </button>
          <button
            aria-label="Cart"
            className="relative hover:text-brand-brown transition-colors"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={2}
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2 9m13-9l2 9m-5-9V6a2 2 0 10-4 0v3"
              />
            </svg>
            <span className="absolute -top-1 -right-2 bg-brand-brown text-xs text-white rounded-full px-1.5 py-0.5">
              0
            </span>
          </button>
        </div>
      </div>
      {/* Navigation Bar */}
      <nav className="bg-brand-walnut dark:bg-brand-darkbrown text-white">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-center md:justify-between items-center px-4 md:px-8">
          <a
            href="#"
            className="py-3 px-4 font-semibold hover:bg-brand-brown/80 transition-colors"
          >
            Home
          </a>
          <a
            href="#about"
            className="py-3 px-4 font-semibold hover:bg-brand-brown/80 transition-colors"
          >
            About Us
          </a>
          <a
            href="#services"
            className="py-3 px-4 font-semibold hover:bg-brand-brown/80 transition-colors"
          >
            Services
          </a>
          <a
            href="#contact"
            className="py-3 px-4 font-semibold hover:bg-brand-brown/80 transition-colors"
          >
            Contact
          </a>
          <a
            href="#"
            className="py-3 px-4 font-semibold hover:bg-brand-brown/80 transition-colors"
          >
            Request For Quotation
          </a>
        </div>
      </nav>
    </header>
  );
}
