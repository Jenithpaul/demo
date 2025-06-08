import React from "react";

export default function Footer() {
  return (
    <footer className="bg-brand-walnut dark:bg-brand-dark text-brand-beige dark:text-brand-sand py-6 mt-12">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="mb-2 md:mb-0 text-center md:text-left">
          <span className="font-heading font-bold text-lg">Prime Woods & Ply</span>
          <span className="block text-xs mt-1">&copy; {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex space-x-4">
          {/* Placeholder social links */}
          <a href="#" aria-label="Instagram" className="hover:text-brand-brown transition-colors">Instagram</a>
          <a href="#" aria-label="Facebook" className="hover:text-brand-brown transition-colors">Facebook</a>
          <a href="#" aria-label="WhatsApp" className="hover:text-brand-brown transition-colors">WhatsApp</a>
        </div>
      </div>
    </footer>
  );
}
