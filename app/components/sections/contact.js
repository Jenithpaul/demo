"use client";
import React, { useState, useCallback, useMemo } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, User, MessageSquare, AlertCircle, Zap } from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedField, setFocusedField] = useState('');
  const [errors, setErrors] = useState({});

  // Validation rules
  const validateField = useCallback((name, value) => {
    switch (name) {
      case 'name':
        return value.trim().length < 2 ? 'Name must be at least 2 characters' : '';
      case 'email':
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return !emailRegex.test(value) ? 'Please enter a valid email address' : '';
      case 'phone':
        const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
        return value && !phoneRegex.test(value) ? 'Please enter a valid phone number' : '';
      case 'message':
        return value.trim().length < 10 ? 'Message must be at least 10 characters' : '';
      default:
        return '';
    }
  }, []);

  const handleSubmit = useCallback(async (e) => {
    e.preventDefault();
    
    // Validate all fields
    const newErrors = {};
    Object.keys(formData).forEach(key => {
      const error = validateField(key, formData[key]);
      if (error) newErrors[key] = error;
    });

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      return;
    }

    setIsSubmitting(true);
    setErrors({});

    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      setIsSubmitted(true);
      setFormData({ name: '', email: '', phone: '', message: '' });
      
      // Reset success state after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (error) {
      console.error('Form submission error:', error);
      setErrors({ submit: 'Failed to send message. Please try again.' });
    } finally {
      setIsSubmitting(false);
    }
  }, [formData, validateField]);

  const handleChange = useCallback((e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  }, [errors]);

  const handleBlur = useCallback((e) => {
    const { name, value } = e.target;
    const error = validateField(name, value);
    if (error) {
      setErrors(prev => ({ ...prev, [name]: error }));
    }
    setFocusedField('');
  }, [validateField]);

  // Contact info data
  const contactInfo = useMemo(() => [
    {
      id: 'phone',
      icon: Phone,
      title: 'Call Us Now',
      primary: '+91 98765 43210',
      secondary: 'Available Mon-Sat, 9AM-7PM',
      gradient: 'from-gray-700 to-gray-800',
      href: 'tel:+919876543210'
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Email Us',
      primary: 'info@electricsolutions.com',
      secondary: "We'll respond within 24 hours",
      gradient: 'from-gray-800 to-gray-900',
      href: 'mailto:info@electricsolutions.com'
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Visit Our Store',
      primary: 'Mumbai, Maharashtra',
      secondary: 'India',
      gradient: 'from-gray-600 to-gray-700',
      href: 'https://maps.google.com/?q=Bandra+West+Mumbai+Maharashtra+India'
    },
    {
      id: 'hours',
      icon: Clock,
      title: 'Business Hours',
      primary: 'Monday - Saturday',
      secondary: '9:00 AM - 7:00 PM',
      tertiary: 'Sunday: Closed',
      gradient: 'from-gray-900 to-black'
    }
  ], []);

  const formFields = useMemo(() => [
    {
      id: 'name',
      label: 'Full Name',
      type: 'text',
      required: true,
      icon: User,
      placeholder: 'John Doe',
      focusColor: 'gray-800',
      gradient: 'from-gray-800/20 to-gray-600/20'
    },
    {
      id: 'phone',
      label: 'Phone Number',
      type: 'tel',
      required: false,
      icon: Phone,
      placeholder: '+91 98765 43210',
      focusColor: 'gray-800',
      gradient: 'from-gray-800/20 to-gray-600/20'
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      icon: Mail,
      placeholder: 'john@example.com',
      focusColor: 'gray-800',
      gradient: 'from-gray-800/20 to-gray-600/20'
    }
  ], []);

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-black via-gray-900 to-gray-800 relative overflow-hidden"
      aria-label="Contact Us"
    >
      {/* Enhanced animated background elements - Electric themed */}
      <div className="absolute inset-0 pointer-events-none">
        {/* Electric pulse effects */}
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-white/10 to-gray-300/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-gray-200/10 to-white/10 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-gray-300/20 to-white/20 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
        
        {/* Electric grid lines */}
        <div className="absolute inset-0 opacity-20">
          <div className="absolute top-0 left-1/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse"></div>
          <div className="absolute top-0 left-3/4 w-px h-full bg-gradient-to-b from-transparent via-white to-transparent animate-pulse animation-delay-700"></div>
          <div className="absolute top-1/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-pulse animation-delay-300"></div>
          <div className="absolute top-3/4 left-0 w-full h-px bg-gradient-to-r from-transparent via-white to-transparent animate-pulse animation-delay-900"></div>
        </div>

        {/* Floating electric particles */}
        <div className="absolute top-10 left-10 w-2 h-2 bg-white rounded-full animate-bounce opacity-60"></div>
        <div className="absolute top-32 right-32 w-3 h-3 bg-gray-300 rounded-full animate-bounce opacity-40 animation-delay-500"></div>
        <div className="absolute bottom-32 left-32 w-2 h-2 bg-white rounded-full animate-bounce opacity-50 animation-delay-1000"></div>
        <div className="absolute bottom-10 right-10 w-4 h-4 bg-gray-400 rounded-full animate-bounce opacity-30 animation-delay-1500"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-gray-800 to-black rounded-full mb-6">
            <Zap className="w-6 h-6 text-white animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-white via-white-200 to-white-400 bg-clip-text text-transparent">
            Let's Power Up Together
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space with cutting-edge electrical solutions? We're here to energize your vision with expert craftsmanship and innovative technology.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-white mb-2">Send us a message</h2>
                <p className="text-gray-300">We'll get back to you within 24 hours</p>
              </div>
              
              {/* Success/Error Messages */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-gray-800/50 border border-gray-600 rounded-2xl flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-gray-300" />
                  <span className="text-gray-200">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {errors.submit && (
                <div className="mb-6 p-4 bg-red-900/30 border border-red-500/50 rounded-2xl flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-400" />
                  <span className="text-red-300">{errors.submit}</span>
                </div>
              )}
              
              <div className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.slice(0, 2).map((field) => {
                    const Icon = field.icon;
                    return (
                      <div key={field.id} className="group">
                        <label 
                          htmlFor={field.id} 
                          className="block mb-3 font-semibold text-white"
                        >
                          {field.label} {field.required && <span className="text-red-400">*</span>}
                        </label>
                        <div className="relative">
                          <Icon className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-gray-200`} />
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            value={formData[field.id]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.id)}
                            onBlur={handleBlur}
                            className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 bg-black/30 text-white placeholder-gray-400 text-lg ${
                              errors[field.id] 
                                ? 'border-red-500 focus:border-red-500' 
                                : 'border-gray-600 focus:border-gray-400'
                            } focus:outline-none`}
                            placeholder={field.placeholder}
                            required={field.required}
                            aria-invalid={errors[field.id] ? 'true' : 'false'}
                            aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                          />
                          <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${field.gradient} transition-opacity duration-300 pointer-events-none ${
                            focusedField === field.id ? 'opacity-100' : 'opacity-0'
                          }`}></div>
                          {errors[field.id] && (
                            <p id={`${field.id}-error`} className="mt-2 text-sm text-red-400 flex items-center">
                              <AlertCircle className="w-4 h-4 mr-1" />
                              {errors[field.id]}
                            </p>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
                
                {/* Email field (full width) */}
                {(() => {
                  const field = formFields[2];
                  const Icon = field.icon;
                  return (
                    <div className="group">
                      <label 
                        htmlFor={field.id} 
                        className="block mb-3 font-semibold text-white"
                      >
                        {field.label} {field.required && <span className="text-red-400">*</span>}
                      </label>
                      <div className="relative">
                        <Icon className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-gray-200`} />
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={handleBlur}
                          className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 bg-black/30 text-white placeholder-gray-400 text-lg ${
                            errors[field.id] 
                              ? 'border-red-500 focus:border-red-500' 
                              : 'border-gray-600 focus:border-gray-400'
                          } focus:outline-none`}
                          placeholder={field.placeholder}
                          required={field.required}
                          aria-invalid={errors[field.id] ? 'true' : 'false'}
                          aria-describedby={errors[field.id] ? `${field.id}-error` : undefined}
                        />
                        <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${field.gradient} transition-opacity duration-300 pointer-events-none ${
                          focusedField === field.id ? 'opacity-100' : 'opacity-0'
                        }`}></div>
                        {errors[field.id] && (
                          <p id={`${field.id}-error`} className="mt-2 text-sm text-red-400 flex items-center">
                            <AlertCircle className="w-4 h-4 mr-1" />
                            {errors[field.id]}
                          </p>
                        )}
                      </div>
                    </div>
                  );
                })()}
                
                {/* Message field */}
                <div className="group">
                  <label htmlFor="message" className="block mb-3 font-semibold text-white">
                    Your Message <span className="text-red-400">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-gray-400 transition-colors duration-300 group-focus-within:text-gray-200" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={handleBlur}
                      rows="6"
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 bg-black/30 text-white placeholder-gray-400 text-lg resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-gray-600 focus:border-gray-400'
                      } focus:outline-none`}
                      placeholder="Tell us about your electrical project requirements, preferred solutions, timeline, and any specific needs..."
                      required
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-gray-800/20 to-gray-600/20 transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'message' ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-sm text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <button
                  type="button"
                  onClick={handleSubmit}
                  disabled={isSubmitted || isSubmitting}
                  className="w-full bg-gradient-to-r from-gray-800 to-black hover:from-gray-700 hover:to-gray-900 text-white font-bold px-8 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg border border-gray-600 hover:border-gray-400"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span className="text-white">Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6 animate-pulse" />
                      <span className="text-white">Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span className="text-white">Send Message</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          </div>

          {/* Enhanced Contact Info */}
          <aside className="space-y-6">
            {contactInfo.map((info) => {
              const Icon = info.icon;
              const Component = info.href ? 'a' : 'div';
              const props = info.href ? { href: info.href, target: info.href.startsWith('http') ? '_blank' : undefined, rel: info.href.startsWith('http') ? 'noopener noreferrer' : undefined } : {};
              
              return (
                <Component
                  key={info.id}
                  {...props}
                  className="block bg-white/5 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/10 hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center space-x-6">
                    <div className={`bg-gradient-to-r ${info.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-white mb-2">{info.title}</h3>
                      <p className="text-gray-300 text-lg">{info.primary}</p>
                      <p className="text-gray-400 text-sm">{info.secondary}</p>
                      {info.tertiary && (
                        <p className="text-gray-400 text-sm">{info.tertiary}</p>
                      )}
                    </div>
                  </div>
                </Component>
              );
            })}
          </aside>
        </div>

        {/* Enhanced Interactive Map Section */}
        <div className="mt-16">
          <div className="bg-white/5 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/10">
            <div className="text-center mb-8">
              <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-gray-800 to-black rounded-full mb-4">
                <MapPin className="w-6 h-6 text-white" />
              </div>
              <h2 className="text-3xl font-bold text-white mb-2">Find Us on Map</h2>
              <p className="text-gray-300">Visit our showroom in the heart of Mumbai</p>
            </div>
            <div className="w-full h-96 bg-gradient-to-br from-gray-900 to-black rounded-2xl flex items-center justify-center border-2 border-dashed border-gray-600 hover:border-gray-400 transition-colors duration-300 group cursor-pointer overflow-hidden">
              <iframe
                title="Electric Solutions Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3769.821964479836!2d72.8258333153677!3d19.05843098709959!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7c90e2e2e2e2e%3A0x123456789abcdef!2sBandra%20West%2C%20Mumbai%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1686576000000!5m2!1sen!2sin"
                width="100%"
                height="100%"
                style={{ border: 0, filter: 'invert(1) hue-rotate(180deg)' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="rounded-2xl w-full h-96 border-none"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}