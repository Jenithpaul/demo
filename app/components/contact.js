"use client";
import React, { useState, useCallback, useMemo } from "react";
import { Phone, Mail, MapPin, Clock, Send, CheckCircle, User, MessageSquare, Sparkles, AlertCircle } from "lucide-react";

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
      gradient: 'from-green-500 to-emerald-600',
      href: 'tel:+919876543210'
    },
    {
      id: 'email',
      icon: Mail,
      title: 'Email Us',
      primary: 'info@primewoodsply.com',
      secondary: "We'll respond within 24 hours",
      gradient: 'from-blue-500 to-purple-600',
      href: 'mailto:info@primewoodsply.com'
    },
    {
      id: 'location',
      icon: MapPin,
      title: 'Visit Our Store',
      primary: 'Mumbai, Maharashtra',
      secondary: 'India',
      gradient: 'from-orange-500 to-red-600',
      href: 'https://maps.google.com'
    },
    {
      id: 'hours',
      icon: Clock,
      title: 'Business Hours',
      primary: 'Monday - Saturday',
      secondary: '9:00 AM - 7:00 PM',
      tertiary: 'Sunday: Closed',
      gradient: 'from-amber-500 to-orange-600'
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
      focusColor: 'blue-500',
      gradient: 'from-blue-500/20 to-purple-500/20'
    },
    {
      id: 'phone',
      label: 'Phone Number',
      type: 'tel',
      required: false,
      icon: Phone,
      placeholder: '+91 98765 43210',
      focusColor: 'green-500',
      gradient: 'from-green-500/20 to-teal-500/20'
    },
    {
      id: 'email',
      label: 'Email Address',
      type: 'email',
      required: true,
      icon: Mail,
      placeholder: 'john@example.com',
      focusColor: 'purple-500',
      gradient: 'from-purple-500/20 to-pink-500/20'
    }
  ], []);

  return (
    <section 
      id="contact" 
      className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 relative overflow-hidden"
      aria-label="Contact Us"
    >
      {/* Enhanced animated background elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-20 right-20 w-72 h-72 bg-gradient-to-br from-blue-400/20 to-purple-600/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-20 left-20 w-96 h-96 bg-gradient-to-br from-amber-400/20 to-orange-600/20 rounded-full blur-3xl animate-pulse animation-delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-br from-green-400/20 to-teal-600/20 rounded-full blur-3xl animate-pulse animation-delay-500"></div>
      </div>

      <div className="container mx-auto px-6 max-w-7xl relative z-10">
        {/* Enhanced Header */}
        <header className="text-center mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full mb-6">
            <Sparkles className="w-6 h-6 text-white animate-pulse" />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-slate-800 via-blue-600 to-purple-600 bg-clip-text text-transparent dark:from-white dark:via-blue-400 dark:to-purple-400">
            Let's Create Together
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-300 max-w-3xl mx-auto leading-relaxed">
            Ready to transform your space with premium wood and ply solutions? We're here to bring your vision to life with expert craftsmanship and personalized service.
          </p>
        </header>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Enhanced Contact Form */}
          <div className="lg:col-span-2">
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl shadow-2xl p-8 border border-white/20 dark:border-slate-700/50">
              <div className="mb-8">
                <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-2">Send us a message</h2>
                <p className="text-slate-600 dark:text-slate-300">We'll get back to you within 24 hours</p>
              </div>
              
              {/* Success/Error Messages */}
              {isSubmitted && (
                <div className="mb-6 p-4 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-2xl flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
                  <span className="text-green-800 dark:text-green-200">Message sent successfully! We'll get back to you soon.</span>
                </div>
              )}

              {errors.submit && (
                <div className="mb-6 p-4 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-2xl flex items-center space-x-3">
                  <AlertCircle className="w-5 h-5 text-red-600 dark:text-red-400" />
                  <span className="text-red-800 dark:text-red-200">{errors.submit}</span>
                </div>
              )}
              
              <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {formFields.slice(0, 2).map((field) => {
                    const Icon = field.icon;
                    return (
                      <div key={field.id} className="group">
                        <label 
                          htmlFor={field.id} 
                          className="block mb-3 font-semibold text-slate-800 dark:text-white"
                        >
                          {field.label} {field.required && <span className="text-red-500">*</span>}
                        </label>
                        <div className="relative">
                          <Icon className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 transition-colors duration-300 group-focus-within:text-${field.focusColor}`} />
                          <input
                            type={field.type}
                            id={field.id}
                            name={field.id}
                            value={formData[field.id]}
                            onChange={handleChange}
                            onFocus={() => setFocusedField(field.id)}
                            onBlur={handleBlur}
                            className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 bg-white/50 dark:bg-slate-700/50 dark:text-white placeholder-slate-400 text-lg ${
                              errors[field.id] 
                                ? 'border-red-500 focus:border-red-500' 
                                : `border-slate-200 dark:border-slate-600 focus:border-${field.focusColor}`
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
                            <p id={`${field.id}-error`} className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
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
                        className="block mb-3 font-semibold text-slate-800 dark:text-white"
                      >
                        {field.label} {field.required && <span className="text-red-500">*</span>}
                      </label>
                      <div className="relative">
                        <Icon className={`absolute left-4 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400 transition-colors duration-300 group-focus-within:text-${field.focusColor}`} />
                        <input
                          type={field.type}
                          id={field.id}
                          name={field.id}
                          value={formData[field.id]}
                          onChange={handleChange}
                          onFocus={() => setFocusedField(field.id)}
                          onBlur={handleBlur}
                          className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 bg-white/50 dark:bg-slate-700/50 dark:text-white placeholder-slate-400 text-lg ${
                            errors[field.id] 
                              ? 'border-red-500 focus:border-red-500' 
                              : `border-slate-200 dark:border-slate-600 focus:border-${field.focusColor}`
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
                          <p id={`${field.id}-error`} className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
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
                  <label htmlFor="message" className="block mb-3 font-semibold text-slate-800 dark:text-white">
                    Your Message <span className="text-red-500">*</span>
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-6 w-5 h-5 text-slate-400 transition-colors duration-300 group-focus-within:text-orange-500" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      onFocus={() => setFocusedField('message')}
                      onBlur={handleBlur}
                      rows="6"
                      className={`w-full pl-12 pr-4 py-4 rounded-2xl border-2 transition-all duration-300 bg-white/50 dark:bg-slate-700/50 dark:text-white placeholder-slate-400 text-lg resize-none ${
                        errors.message 
                          ? 'border-red-500 focus:border-red-500' 
                          : 'border-slate-200 dark:border-slate-600 focus:border-orange-500'
                      } focus:outline-none`}
                      placeholder="Tell us about your project requirements, preferred materials, timeline, and any specific needs..."
                      required
                      aria-invalid={errors.message ? 'true' : 'false'}
                      aria-describedby={errors.message ? 'message-error' : undefined}
                    ></textarea>
                    <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r from-orange-500/20 to-red-500/20 transition-opacity duration-300 pointer-events-none ${
                      focusedField === 'message' ? 'opacity-100' : 'opacity-0'
                    }`}></div>
                    {errors.message && (
                      <p id="message-error" className="mt-2 text-sm text-red-600 dark:text-red-400 flex items-center">
                        <AlertCircle className="w-4 h-4 mr-1" />
                        {errors.message}
                      </p>
                    )}
                  </div>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitted || isSubmitting}
                  className="w-full bg-gradient-to-r from-blue-600 via-purple-600 to-blue-700 hover:from-blue-700 hover:via-purple-700 hover:to-blue-800 text-white font-bold px-8 py-5 rounded-2xl transition-all duration-300 transform hover:scale-105 hover:shadow-2xl flex items-center justify-center space-x-3 disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none text-lg"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : isSubmitted ? (
                    <>
                      <CheckCircle className="w-6 h-6 animate-pulse" />
                      <span>Message Sent Successfully!</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-6 h-6" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
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
                  className="block bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50 hover:shadow-3xl transition-all duration-300 hover:scale-105 group"
                >
                  <div className="flex items-center space-x-6">
                    <div className={`bg-gradient-to-r ${info.gradient} p-4 rounded-2xl shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                      <Icon className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-slate-800 dark:text-white mb-2">{info.title}</h3>
                      <p className="text-slate-600 dark:text-slate-300 text-lg">{info.primary}</p>
                      <p className="text-slate-500 dark:text-slate-400 text-sm">{info.secondary}</p>
                      {info.tertiary && (
                        <p className="text-slate-500 dark:text-slate-400 text-sm">{info.tertiary}</p>
                      )}
                    </div>
                  </div>
                </Component>
              );
            })}

            {/* Enhanced Map Placeholder */}
            <div className="bg-white/80 dark:bg-slate-800/80 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border border-white/20 dark:border-slate-700/50">
              <div className="w-full h-64 bg-gradient-to-br from-slate-100 to-slate-200 dark:from-slate-700 dark:to-slate-600 rounded-2xl flex items-center justify-center border-2 border-dashed border-slate-300 dark:border-slate-500 hover:border-blue-400 dark:hover:border-blue-500 transition-colors duration-300 group cursor-pointer">
                <div className="text-center">
                  <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-4 rounded-2xl mb-4 inline-block group-hover:scale-110 transition-transform duration-300">
                    <MapPin className="w-12 h-12 text-white" />
                  </div>
                  <p className="font-bold text-slate-800 dark:text-white text-lg">Interactive Location Map</p>
                  <p className="text-slate-600 dark:text-slate-300">Google Maps integration</p>
                  <p className="text-slate-500 dark:text-slate-400 text-sm mt-2">Click to view directions</p>
                </div>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </section>
  );
}