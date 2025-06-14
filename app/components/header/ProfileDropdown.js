"use client";
import React, { useRef, useEffect } from "react";
import Link from "next/link";

function ProfileDropdown({ isOpen, onClose, user, logout }) {
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        onClose();
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handleLogout = async () => {
    try {
      await logout();
      onClose();
    } catch (error) {
      console.error("Logout error:", error);
    }
  };

  const isAdmin = user?.email === 'jenithpaul66@gmail.com';

  return (
    <div 
      ref={dropdownRef}
      className="absolute right-0 top-full mt-2 w-56 bg-white border-2 border-gray-200 rounded-2xl shadow-2xl z-50 overflow-hidden animate-slideDown"
    >
      <div className="py-2">
        {user && (
          <div className="px-4 py-3 border-b border-gray-200">
            <p className="text-sm font-medium text-black">{user.displayName || user.email}</p>
            <p className="text-xs text-gray-600">{user.email}</p>
          </div>
        )}
        
        <Link 
          href="/contact"
          className="flex items-center px-4 py-3 text-black hover:bg-gray-100 transition-all duration-200 group transform hover:translate-x-1"
          onClick={onClose}
        >
          <svg className="w-5 h-5 mr-3 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
          Contact Us
        </Link>
        
        <Link 
          href="/orders"
          className="flex items-center px-4 py-3 text-black hover:bg-gray-100 transition-all duration-200 group transform hover:translate-x-1"
          onClick={onClose}
        >
          <svg className="w-5 h-5 mr-3 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
          </svg>
          Order History
        </Link>
        
        {isAdmin && (
          <Link
            href="/admin"
            className="flex items-center px-4 py-3 text-black hover:bg-gray-100 transition-all duration-200 group transform hover:translate-x-1"
            onClick={onClose}
          >
            <svg className="w-5 h-5 mr-3 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            Admin Dashboard
          </Link>
        )}
        
        <button 
          onClick={handleLogout}
          className="flex items-center w-full px-4 py-3 text-black hover:bg-gray-100 transition-all duration-200 group transform hover:translate-x-1"
        >
          <svg className="w-5 h-5 mr-3 text-gray-600 group-hover:text-black transition-colors" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
          </svg>
          Logout
        </button>
      </div>
    </div>
  );
}

export default ProfileDropdown; 