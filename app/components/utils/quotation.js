import React, { useState } from "react";
import { getFirestore, collection, addDoc, serverTimestamp } from "firebase/firestore";
import app from "../../backend/firebase.config";

export default function QuotationForm({ open, onClose }) {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    companyName: "",
    mobile: "",
    email: "",
    phone: "",
    address1: "",
    address2: "",
    city: "",
    state: "",
    pincode: "",
    country: "",
    queryType: "General",
    message: "",
    file: null,
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const db = getFirestore(app);

  const validateForm = () => {
    const newErrors = {};
    if (!form.firstName.trim()) newErrors.firstName = "First name is required";
    if (!form.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!form.mobile.trim()) newErrors.mobile = "Mobile number is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    if (name === "file") {
      setForm((prev) => ({ ...prev, file: files[0] }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
      // Clear error when user starts typing
      if (errors[name]) {
        setErrors(prev => ({ ...prev, [name]: null }));
      }
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;
    
    setLoading(true);
    try {
      const data = { ...form, file: form.file ? form.file.name : "", createdAt: serverTimestamp() };
      await addDoc(collection(db, "enquiries"), data);
      setSuccess(true);
      setForm({
        firstName: "",
        lastName: "",
        companyName: "",
        mobile: "",
        email: "",
        phone: "",
        address1: "",
        address2: "",
        city: "",
        state: "",
        pincode: "",
        country: "",
        queryType: "General",
        message: "",
        file: null,
      });
    } catch (err) {
      alert("Failed to submit enquiry. Please try again.");
    }
    setLoading(false);
  };

  if (!open) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm overflow-auto">
      <div className="bg-gradient-to-br from-white via-gray-900 to-gray-800/90 backdrop-blur-xl rounded-3xl shadow-2xl p-8 w-full max-w-3xl border border-white/10 relative max-h-[90vh] overflow-y-auto">
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-white-400 hover:text-red-400 text-3xl font-bold transition"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-3xl font-bold text-white mb-6 text-center bg-gradient-to-r from-white via-white-200 to-white-400 bg-clip-text text-transparent">
          Get Your Quote Today
        </h2>
        {success && (
          <div className="mb-4 p-3 bg-green-900/40 border border-green-500/30 rounded-xl text-green-200 font-semibold text-center">
            Quote request submitted successfully! We'll get back to you soon.
          </div>
        )}
        <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative">
            <input
              name="firstName"
              value={form.firstName}
              onChange={handleChange}
              required
              placeholder="First Name *"
              className={`bg-black/30 text-white border-2 ${errors.firstName ? 'border-red-500' : 'border-gray-700'} rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all w-full`}
            />
            {errors.firstName && (
              <p className="text-red-500 text-sm mt-1">{errors.firstName}</p>
            )}
          </div>
          <div className="relative">
            <input
              name="lastName"
              value={form.lastName}
              onChange={handleChange}
              required
              placeholder="Last Name *"
              className={`bg-black/30 text-white border-2 ${errors.lastName ? 'border-red-500' : 'border-gray-700'} rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all w-full`}
            />
            {errors.lastName && (
              <p className="text-red-500 text-sm mt-1">{errors.lastName}</p>
            )}
          </div>
          <div className="relative">
            <input
              name="mobile"
              value={form.mobile}
              onChange={handleChange}
              required
              placeholder="Mobile Number *"
              className={`bg-black/30 text-white border-2 ${errors.mobile ? 'border-red-500' : 'border-gray-700'} rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all w-full`}
            />
            {errors.mobile && (
              <p className="text-red-500 text-sm mt-1">{errors.mobile}</p>
            )}
          </div>
          <div className="relative">
            <input
              name="email"
              value={form.email}
              onChange={handleChange}
              required
              placeholder="Email Address *"
              className={`bg-black/30 text-white border-2 ${errors.email ? 'border-red-500' : 'border-gray-700'} rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all w-full`}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">{errors.email}</p>
            )}
          </div>
          <input
            name="companyName"
            value={form.companyName}
            onChange={handleChange}
            placeholder="Company Name"
            className="bg-black/30 text-white border-2 border-gray-700 rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all"
          />
          <input
            name="phone"
            value={form.phone}
            onChange={handleChange}
            placeholder="Alternative Phone"
            className="bg-black/30 text-white border-2 border-gray-700 rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all"
          />
          <input
            name="address1"
            value={form.address1}
            onChange={handleChange}
            placeholder="Address Line 1"
            className="bg-black/30 text-white border-2 border-gray-700 rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all"
          />
          <input
            name="address2"
            value={form.address2}
            onChange={handleChange}
            placeholder="Address Line 2"
            className="bg-black/30 text-white border-2 border-gray-700 rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all"
          />
          <input
            name="city"
            value={form.city}
            onChange={handleChange}
            placeholder="City"
            className="bg-black/30 text-white border-2 border-gray-700 rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all"
          />
          <input
            name="state"
            value={form.state}
            onChange={handleChange}
            placeholder="State"
            className="bg-black/30 text-white border-2 border-gray-700 rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all"
          />
          <input
            name="pincode"
            value={form.pincode}
            onChange={handleChange}
            placeholder="Pincode"
            className="bg-black/30 text-white border-2 border-gray-700 rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all"
          />
          <input
            name="country"
            value={form.country}
            onChange={handleChange}
            placeholder="Country"
            className="bg-black/30 text-white border-2 border-gray-700 rounded-2xl px-4 py-3 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all"
          />
          <select
            name="queryType"
            value={form.queryType}
            onChange={handleChange}
            className="bg-black/30 text-white border-2 border-gray-700 rounded-2xl px-4 py-3 md:col-span-2 focus:border-gray-400 focus:outline-none transition-all"
          >
            <option value="General">General Inquiry</option>
            <option value="Quotation">Request Quote</option>
            <option value="Support">Technical Support</option>
          </select>
          <textarea
            name="message"
            value={form.message}
            onChange={handleChange}
            required
            placeholder="Please describe your requirements in detail *"
            className="bg-black/30 text-white border-2 border-gray-700 rounded-2xl px-4 py-3 md:col-span-2 placeholder-gray-400 focus:border-gray-400 focus:outline-none transition-all resize-none"
            rows={4}
          />
          <div className="md:col-span-2">
            <label className="block text-gray-300 mb-2">Attach Files (Optional)</label>
            <input
              name="file"
              type="file"
              onChange={handleChange}
              className="w-full text-white file:bg-gradient-to-r file:from-gray-800 file:to-gray-700 file:text-white file:rounded-lg file:px-4 file:py-2 file:border-0 file:mr-4"
            />
          </div>
          <button
            type="submit"
            disabled={loading}
            className="bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white font-bold rounded-2xl px-8 py-4 mt-2 md:col-span-2 transition-all duration-300 transform hover:scale-105 hover:shadow-2xl border border-gray-600 hover:border-gray-400 disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {loading ? "Submitting..." : "SUBMIT QUOTE REQUEST"}
          </button>
        </form>
      </div>
    </div>
  );
}
