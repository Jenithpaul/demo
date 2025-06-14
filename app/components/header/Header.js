"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useCart } from "../utils/CartContext";
import { useAuth } from "../auth/AuthContext";
import ProfileDropdown from "./ProfileDropdown";
import QuotationForm from "../utils/quotation";

function Header() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [profileDropdownOpen, setProfileDropdownOpen] = useState(false);
  const [showQuotation, setShowQuotation] = useState(false);
  const { user, logout } = useAuth();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSearch = (e) => {
    e.preventDefault();
    if (searchQuery.trim()) {
      // Implement search functionality
      console.log(`Searching for: ${searchQuery}`);
    }
  };

  const cartItemCount = cart.reduce((sum, item) => sum + (item.qty || 1), 0);

  return (
    <header className={`sticky top-0 z-50 transition-all duration-500 ${
      isScrolled 
        ? 'bg-black text-white border-b border-gray-800 shadow-2xl' 
        : 'bg-black text-white shadow-xl'
    }`}>
      {/* Top bar: Logo, Search, User, Cart */}
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
        {/* Logo */}
        <Link href="/" className="flex items-center space-x-3 group">
          <div className="relative">
            <div className="absolute inset-0 bg-white/10 rounded-full blur-lg group-hover:bg-white/20 transition-all duration-300 animate-pulse"></div>
            <div className="w-12 h-12 bg-gradient-to-br from-white to-gray-300 rounded-full flex items-center justify-center transition-transform duration-500 group-hover:scale-110 group-hover:rotate-12 relative z-10">
              <svg className="w-8 h-8 text-black" fill="currentColor" viewBox="0 0 24 24">
                <path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"/>
              </svg>
            </div>
          </div>
          <div className="hidden sm:block">
            <span className="text-2xl font-bold text-white drop-shadow-lg group-hover:text-gray-200 transition-colors duration-300">
              Electric Solutions
            </span>
            <div className="flex items-center space-x-1">
              <span className="block text-sm text-gray-300 -mt-1 group-hover:text-gray-400 transition-colors duration-300">
                Power & Technology
              </span>
              <div className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></div>
            </div>
          </div>
        </Link>

        {/* Search Bar */}
        <form onSubmit={handleSearch} className="flex-1 mx-6 max-w-2xl hidden lg:flex relative group">
          <div className="relative w-full">
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search electrical products & solutions..."
              className="w-full px-6 py-3 rounded-2xl bg-white text-black border-2 border-gray-300 focus:outline-none focus:ring-2 focus:ring-white focus:border-white transition-all duration-300 shadow-inner placeholder-gray-500 hover:border-gray-400 group-hover:shadow-lg"
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-black text-white rounded-xl hover:bg-gray-800 transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 hover:scale-105"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z" />
              </svg>
            </button>
          </div>
        </form>

        {/* User, Cart, Profile */}
        <div className="flex items-center space-x-4">
          {/* Cart */}
          <Link href="/cart" className="relative group p-3 rounded-2xl bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105" aria-label="Cart">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-6 h-6 transition-colors">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13l-1.35-5.4M7 13l-1.35-5.4M17 13a2 2 0 11-4 0 2 2 0 014 0zM7 13a2 2 0 11-4 0 2 2 0 014 0z" />
            </svg>
            {cartItemCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-500 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-semibold shadow-lg animate-bounce">
                {cartItemCount > 99 ? '99+' : cartItemCount}
              </span>
            )}
          </Link>

          {/* Login/Profile Button */}
          {!user ? (
            <button
              aria-label="Login"
              className="group flex items-center space-x-2 px-4 py-3 rounded-2xl bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
              onClick={() => router.push('/login')}
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7" />
              </svg>
              <span className="hidden sm:inline font-medium">Login</span>
            </button>
          ) : (
            <div className="relative">
              <button
                aria-label="Profile"
                className="group flex items-center space-x-2 px-4 py-3 rounded-2xl bg-white text-black hover:bg-gray-100 transition-all duration-300 shadow-md hover:shadow-lg transform hover:scale-105"
                onClick={() => setProfileDropdownOpen(!profileDropdownOpen)}
              >
                <div className="w-6 h-6 bg-black rounded-full flex items-center justify-center text-white text-sm font-bold">
                  {user.displayName ? user.displayName.charAt(0).toUpperCase() : user.email.charAt(0).toUpperCase()}
                </div>
                <span className="hidden sm:inline font-medium">Profile</span>
                <svg className={`w-4 h-4 transition-transform duration-300 ${profileDropdownOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              <ProfileDropdown 
                isOpen={profileDropdownOpen} 
                onClose={() => setProfileDropdownOpen(false)}
                user={user}
                logout={logout}
              />
            </div>
          )}
        </div>
      </div>

      {/* Navigation Bar */}
      <nav className={`bg-gray-900 text-white shadow-inner border-t border-gray-700 ${isMenuOpen ? 'block' : 'hidden md:block'}`}>
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center items-center px-4 md:px-8">
          <Link href="/" className="relative group py-4 px-6 font-semibold transition-all duration-300 hover:bg-white/10 rounded-lg transform hover:scale-105">
            <span className="relative z-10 group-hover:text-gray-200">Home</span>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </Link>
          <Link href="/about" className="relative group py-4 px-6 font-semibold transition-all duration-300 hover:bg-white/10 rounded-lg transform hover:scale-105">
            <span className="relative z-10 group-hover:text-gray-200">About Us</span>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </Link>
          <Link href="/contact" className="relative group py-4 px-6 font-semibold transition-all duration-300 hover:bg-white/10 rounded-lg transform hover:scale-105">
            <span className="relative z-10 group-hover:text-gray-200">Contact Us</span>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </Link>
          <Link href="/products" className="relative group py-4 px-6 font-semibold transition-all duration-300 hover:bg-white/10 rounded-lg transform hover:scale-105">
            <span className="relative z-10 group-hover:text-gray-200">Products</span>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </Link>
          <button
            onClick={() => setShowQuotation(true)}
            className="relative group py-4 px-6 font-semibold transition-all duration-300 hover:bg-white/10 rounded-lg transform hover:scale-105"
          >
            <span className="relative z-10 group-hover:text-gray-200">Get Quotation</span>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </button>
          <Link href="/catalog" className="relative group py-4 px-6 font-semibold transition-all duration-300 hover:bg-white/10 rounded-lg transform hover:scale-105">
            <span className="relative z-10 group-hover:text-gray-200">E-Catalog</span>
            <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-white transition-all duration-300 group-hover:w-full group-hover:left-0"></div>
          </Link>
        </div>
      </nav>

      {/* Quotation Form Modal */}
      <QuotationForm
        open={showQuotation}
        onClose={() => setShowQuotation(false)}
      />
    </header>
  );
}

export default Header;