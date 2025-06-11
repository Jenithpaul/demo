"use client";
import React, { useState, useEffect } from "react";
import { useCart } from "./CartContext";
import Link from "next/link";
import { useRouter } from "next/navigation";

const productCategories = [
  "PLYWOOD",
  "BLOCK BOARD",
  "LAMINATES",
  "VENEERS",
  "MDF",
  "PARTICLE BOARD",
  "DOORS",
  "FLUSH DOORS",
  "DECORATIVE PANELS",
  "WPC/PVC BOARDS",
  "FILM FACED SHUTTERING PLY",
  "COMMERCIAL PLY",
  "MARINE PLY",
];

function LoginRegisterModal({ open, onClose }) {
  const [activeTab, setActiveTab] = useState("login");
  const [loginData, setLoginData] = useState({ email: "", password: "" });
  const [signupData, setSignupData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />
      {/* Modal */}
      <div className="relative bg-white rounded-2xl shadow-2xl flex w-full max-w-2xl mx-auto overflow-hidden">
        {/* Left image/graphic */}
        <div className="hidden md:flex flex-col justify-center items-center bg-[#f5ede3] w-1/2 p-8">
          {/* You can use an image or SVG here */}
          <img
            src="/images/plywood.png"
            alt="Login Graphic"
            className="w-32 h-32 object-contain mb-4"
          />
        </div>
        {/* Right form */}
        <div className="flex-1 p-8 flex flex-col justify-center">
          <button
            className="absolute top-4 right-4 text-2xl text-gray-400 hover:text-gray-700"
            onClick={onClose}
            aria-label="Close"
          >
            &times;
          </button>
          <div className="mb-4 text-center">
            <div className="text-sm text-gray-600 mb-1">
              Login to your account to manage your orders
            </div>
            <div className="text-2xl font-bold text-[#2e7d32] mb-2">
              Login to Prime Woods & Ply
            </div>
          </div>
          <div className="flex justify-center mb-6">
            <button
              className={`px-4 py-2 font-semibold rounded-l ${
                activeTab === "login"
                  ? "bg-[#2e7d32] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab("login")}
            >
              Login
            </button>
            <button
              className={`px-4 py-2 font-semibold rounded-r ${
                activeTab === "signup"
                  ? "bg-[#2e7d32] text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
              onClick={() => setActiveTab("signup")}
            >
              Sign Up
            </button>
          </div>
          {activeTab === "login" ? (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Add login logic here
                onClose();
              }}
            >
              <input
                type="email"
                placeholder="Enter your email here."
                className="w-full px-4 py-3 border rounded mb-2"
                value={loginData.email}
                onChange={(e) =>
                  setLoginData({ ...loginData, email: e.target.value })
                }
                required
              />
              <input
                type="password"
                placeholder="Enter your password here."
                className="w-full px-4 py-3 border rounded mb-2"
                value={loginData.password}
                onChange={(e) =>
                  setLoginData({ ...loginData, password: e.target.value })
                }
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#2e7d32] text-white font-semibold rounded hover:bg-[#256029] transition"
              >
                Login now
              </button>
              <div className="flex justify-between mt-2 text-sm">
                <span>
                  <a href="#" className="text-gray-600 hover:underline">
                    Forgot password?
                  </a>
                </span>
                <span>
                  Not signed up yet?{" "}
                  <button
                    type="button"
                    className="text-[#2e7d32] font-semibold hover:underline"
                    onClick={() => setActiveTab("signup")}
                  >
                    Sign up now
                  </button>
                </span>
              </div>
            </form>
          ) : (
            <form
              className="space-y-4"
              onSubmit={(e) => {
                e.preventDefault();
                // Add signup logic here
                onClose();
              }}
            >
              <input
                type="email"
                placeholder="Enter your email here."
                className="w-full px-4 py-3 border rounded mb-2"
                value={signupData.email}
                onChange={(e) =>
                  setSignupData({ ...signupData, email: e.target.value })
                }
                required
              />
              <input
                type="password"
                placeholder="Create a password."
                className="w-full px-4 py-3 border rounded mb-2"
                value={signupData.password}
                onChange={(e) =>
                  setSignupData({ ...signupData, password: e.target.value })
                }
                required
              />
              <input
                type="password"
                placeholder="Confirm password."
                className="w-full px-4 py-3 border rounded mb-2"
                value={signupData.confirmPassword}
                onChange={(e) =>
                  setSignupData({
                    ...signupData,
                    confirmPassword: e.target.value,
                  })
                }
                required
              />
              <button
                type="submit"
                className="w-full py-3 bg-[#2e7d32] text-white font-semibold rounded hover:bg-[#256029] transition"
              >
                Register now
              </button>
              <div className="flex justify-between mt-2 text-sm">
                <span>
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="text-[#2e7d32] font-semibold hover:underline"
                    onClick={() => setActiveTab("login")}
                  >
                    Login
                  </button>
                </span>
              </div>
            </form>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Header() {
  const { cart } = useCart();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");
  const [productsMenuOpen, setProductsMenuOpen] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const router = useRouter();

  // Handle scroll effect
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
      router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
    }
  };

  const cartItemCount = cart.reduce((sum, item) => sum + item.qty, 0);

  return (
    <>
      <header className={`bg-[#a9744f]/95 bg-[#7b4a27]/95 backdrop-blur-md shadow-lg sticky top-0 z-50 transition-all duration-300 ${
        isScrolled ? 'shadow-xl' : 'shadow-lg'
      }`}>
        {/* Top bar: Logo, Search, User, Cart */}
        <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-4 md:px-8">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3 group">
            <div className="relative">
              <img
                src="/images/plywood.png"
                alt="Prime Woods & Ply Logo"
                className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-brand-brown/20 to-brand-walnut/20 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </div>
            <div className="hidden sm:block">
              <span className="font-heading text-2xl font-bold text-brand-walnut dark:text-brand-sand">
                Prime Woods
              </span>
              <span className="block text-sm text-brand-brown dark:text-brand-sand/70 -mt-1">
                & Ply Solutions
              </span>
            </div>
          </Link>

          {/* Search Bar */}
          <form onSubmit={handleSearch} className="flex-1 mx-6 max-w-2xl hidden lg:flex relative">
            <div className="relative w-full">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products, brands & more..."
                className="w-full px-6 py-3 rounded-full bg-gradient-to-r from-brand-beige to-brand-beige/50 dark:from-brand-darkbrown dark:to-brand-darkbrown/50 text-brand-walnut dark:text-brand-sand border-2 border-transparent focus:border-brand-brown focus:outline-none transition-all duration-300 shadow-inner"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-4 py-2 bg-gradient-to-r from-brand-brown to-brand-walnut text-white rounded-full hover:from-brand-walnut hover:to-brand-brown transition-all duration-300 shadow-lg hover:shadow-xl"
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
            </div>
          </form>

          {/* User & Cart */}
          <div className="flex items-center space-x-4">
            {/* Mobile Search Icon */}
            <button
              className="lg:hidden p-2 rounded-full hover:bg-brand-beige dark:hover:bg-brand-darkbrown transition-colors"
              aria-label="Search"
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
                  d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                />
              </svg>
            </button>

            {/* Login Button (opens modal) */}
            <button
              aria-label="Login"
              className="group flex items-center space-x-2 px-4 py-2 rounded-full bg-gradient-to-r from-[#a9744f]/10 to-[#7b4a27]/10 hover:from-[#a9744f] hover:to-[#7b4a27] text-white hover:text-black transition-all duration-300 shadow-md hover:shadow-lg"
              onClick={() => setShowLoginModal(true)}
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
                  d="M15.75 7.5a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.5 19.5a7.5 7.5 0 1115 0v.75a.75.75 0 01-.75.75h-13.5a.75.75 0 01-.75-.75v-.75z"
                />
              </svg>
              <span className="hidden sm:inline font-medium">Login</span>
            </button>

            {/* Cart */}
            <Link
              href="/cart"
              className="relative group p-2 rounded-full hover:bg-brand-beige dark:hover:bg-brand-darkbrown transition-all duration-300"
              aria-label="Cart"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="w-6 h-6 text-brand-walnut dark:text-brand-sand group-hover:text-brand-brown transition-colors"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z"
                />
              </svg>
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-gradient-to-r from-red-500 to-red-600 text-white text-xs rounded-full h-6 w-6 flex items-center justify-center font-semibold shadow-lg animate-pulse">
                  {cartItemCount > 99 ? '99+' : cartItemCount}
                </span>
              )}
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="md:hidden p-2 rounded-full hover:bg-brand-beige dark:hover:bg-brand-darkbrown transition-colors"
              aria-label="Toggle menu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className={`w-6 h-6 transition-transform duration-300 ${isMenuOpen ? 'rotate-90' : ''}`}
              >
                {isMenuOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Navigation Bar */}
        <nav className={`bg-gradient-to-r from-[#a9744f] via-[#c19a6b] to-[#a9744f] dark:from-[#7b4a27] dark:via-[#a9744f] dark:to-[#7b4a27] text-white shadow-inner ${
          isMenuOpen ? 'block' : 'hidden md:block'
        }`}>
          <div className="max-w-7xl mx-auto flex flex-col md:flex-row md:justify-center items-center px-4 md:px-8">
            <Link
              href="/"
              className="relative group py-4 px-6 font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10">Home</span>
            </Link>
            {/* Products Dropdown */}
            <div
              className="relative group"
              onMouseEnter={() => setProductsMenuOpen(true)}
              onMouseLeave={() => setProductsMenuOpen(false)}
            >
              <button
                className="py-4 px-6 font-semibold flex items-center transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
                aria-haspopup="true"
                aria-expanded={productsMenuOpen}
                type="button"
              >
                Products
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" strokeWidth={2} viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                </svg>
              </button>
              {productsMenuOpen && (
                <div className="absolute left-0 mt-1 w-64 bg-white text-brand-walnut rounded shadow-lg z-50 border border-brand-beige">
                  <ul>
                    {productCategories.map((cat) => (
                      <li key={cat}>
                        <Link
                          href={`/products?category=${encodeURIComponent(cat)}`}
                          className="block px-6 py-3 hover:bg-brand-beige hover:text-brand-brown transition-colors"
                        >
                          {cat}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
            <Link
              href="#about"
              className="relative group py-4 px-6 font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10">About Us</span>
            </Link>
            <Link
              href="#services"
              className="relative group py-4 px-6 font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10">Services</span>
            </Link>
            <Link
              href="#contact"
              className="relative group py-4 px-6 font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10">Contact</span>
            </Link>
            <Link
              href="#quote"
              className="relative group py-4 px-6 font-semibold transition-all duration-300 hover:bg-white/10 backdrop-blur-sm"
            >
              <span className="relative z-10">Get Quote</span>
            </Link>
          </div>
        </nav>

        {/* Mobile Search Bar */}
        <div className="lg:hidden border-t border-brand-beige/20 dark:border-brand-darkbrown/20">
          <form onSubmit={handleSearch} className="p-4">
            <div className="relative">
              <input
                type="text"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                placeholder="Search products..."
                className="w-full px-4 py-3 rounded-full bg-brand-beige dark:bg-brand-darkbrown text-brand-walnut dark:text-brand-sand border border-brand-brown/20 focus:border-brand-brown focus:outline-none transition-all duration-300"
              />
              <button
                type="submit"
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-3 py-1.5 bg-brand-brown text-white rounded-full hover:bg-brand-walnut transition-colors"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  strokeWidth={2}
                  stroke="currentColor"
                  className="w-4 h-4"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M21 21l-4.35-4.35M11 19a8 8 0 100-16 8 8 0 000 16z"
                  />
                </svg>
              </button>
            </div>
          </form>
        </div>
      </header>
      <LoginRegisterModal open={showLoginModal} onClose={() => setShowLoginModal(false)} />
    </>
  );
}