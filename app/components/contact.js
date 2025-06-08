import React from "react";

export default function Contact() {
  return (
    <section id="contact" className="py-16 bg-brand-beige dark:bg-brand-dark text-brand-walnut dark:text-brand-sand">
      <div className="container mx-auto px-4 max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-center">Contact Us</h2>
        <form className="bg-black dark:bg-brand-darkbrown rounded-lg shadow p-6 mb-8">
          <div className="mb-4">
            <label htmlFor="name" className="block mb-1 font-semibold">Name</label>
            <input type="text" id="name" name="name" className="w-full px-3 py-2 rounded border border-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-brown dark:bg-brand-dark dark:text-brand-sand" placeholder="Your Name" required />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block mb-1 font-semibold">Email</label>
            <input type="email" id="email" name="email" className="w-full px-3 py-2 rounded border border-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-brown dark:bg-brand-dark dark:text-brand-sand" placeholder="you@email.com" required />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block mb-1 font-semibold">Message</label>
            <textarea id="message" name="message" rows="4" className="w-full px-3 py-2 rounded border border-brand-brown focus:outline-none focus:ring-2 focus:ring-brand-brown dark:bg-brand-dark dark:text-brand-sand" placeholder="How can we help you?" required></textarea>
          </div>
          <button type="submit" className="bg-black text-white font-semibold px-6 py-2 rounded hover:bg-brand-walnut transition-colors duration-300">
            Send Message
          </button>
        </form>
        <div className="w-full h-48 bg-brand-brown/10 dark:bg-brand-darkbrown/40 rounded flex items-center justify-center text-brand-brown dark:text-brand-sand text-sm">
          {/* Google Map Placeholder */}
          Google Map will appear here
        </div>
      </div>
    </section>
  );
}
