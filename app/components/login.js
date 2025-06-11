"use client";
import React, { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginSignupPage() {
  const [activeTab, setActiveTab] = useState("login");

  // Login state
  const [loginData, setLoginData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });
  const [loginLoading, setLoginLoading] = useState(false);
  const [loginShowPassword, setLoginShowPassword] = useState(false);
  const [loginErrors, setLoginErrors] = useState({});

  // Signup state
  const [signupData, setSignupData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
    agreeToTerms: false,
    newsletter: true,
  });
  const [signupLoading, setSignupLoading] = useState(false);
  const [signupShowPassword, setSignupShowPassword] = useState(false);
  const [signupShowConfirmPassword, setSignupShowConfirmPassword] = useState(false);
  const [signupErrors, setSignupErrors] = useState({});

  const router = useRouter();

  // Login handlers
  const handleLoginInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setLoginData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (loginErrors[name]) {
      setLoginErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateLogin = () => {
    const newErrors = {};
    if (!loginData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(loginData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!loginData.password) {
      newErrors.password = 'Password is required';
    } else if (loginData.password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters';
    }
    setLoginErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    if (!validateLogin()) return;
    setLoginLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/dashboard');
    } catch (error) {
      setLoginErrors({ general: 'Login failed. Please try again.' });
    } finally {
      setLoginLoading(false);
    }
  };

  // Signup handlers
  const handleSignupInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setSignupData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
    if (signupErrors[name]) {
      setSignupErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const validateSignup = () => {
    const newErrors = {};
    if (!signupData.firstName.trim()) newErrors.firstName = 'First name is required';
    if (!signupData.lastName.trim()) newErrors.lastName = 'Last name is required';
    if (!signupData.email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(signupData.email)) {
      newErrors.email = 'Please enter a valid email';
    }
    if (!signupData.phone) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\+?[\d\s-()]{10,}$/.test(signupData.phone)) {
      newErrors.phone = 'Please enter a valid phone number';
    }
    if (!signupData.password) {
      newErrors.password = 'Password is required';
    } else if (signupData.password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    } else if (!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/.test(signupData.password)) {
      newErrors.password = 'Password must contain at least one uppercase letter, one lowercase letter, and one number';
    }
    if (!signupData.confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password';
    } else if (signupData.password !== signupData.confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    if (!signupData.agreeToTerms) {
      newErrors.agreeToTerms = 'You must agree to the terms and conditions';
    }
    setSignupErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSignupSubmit = async (e) => {
    e.preventDefault();
    if (!validateSignup()) return;
    setSignupLoading(true);
    try {
      await new Promise(resolve => setTimeout(resolve, 1000));
      router.push('/login?message=Account created successfully');
    } catch (error) {
      setSignupErrors({ general: 'Signup failed. Please try again.' });
    } finally {
      setSignupLoading(false);
    }
  };

  // Social login/signup (stub)
  const handleSocial = (provider) => {
    alert(`${provider} auth would be implemented here`);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#e7d3c2] via-white to-[#e7d3c2]/50 dark:from-[#7b4a27] dark:via-[#a9744f] dark:to-[#7b4a27] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="relative max-w-2xl w-full space-y-8">
        {/* Tabs */}
        <div className="flex justify-center mb-8">
          <button
            className={`px-6 py-3 rounded-t-lg font-semibold transition-all duration-300 ${
              activeTab === "login"
                ? "bg-[#a9744f] text-white shadow"
                : "bg-[#e7d3c2] text-[#7b4a27] hover:bg-[#c19a6b]/60"
            }`}
            onClick={() => setActiveTab("login")}
          >
            Login
          </button>
          <button
            className={`px-6 py-3 rounded-t-lg font-semibold transition-all duration-300 ${
              activeTab === "signup"
                ? "bg-[#a9744f] text-white shadow"
                : "bg-[#e7d3c2] text-[#7b4a27] hover:bg-[#c19a6b]/60"
            }`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>
        {/* Tab Content */}
        <div className="bg-white/80 dark:bg-[#a9744f]/80 backdrop-blur-md rounded-2xl shadow-2xl p-8 border border-[#e7d3c2]/20 dark:border-[#a9744f]/20">
          {activeTab === "login" ? (
            <form className="space-y-6" onSubmit={handleLoginSubmit}>
              {loginErrors.general && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {loginErrors.general}
                </div>
              )}
              {/* Email */}
              <div>
                <label htmlFor="login-email" className="block text-sm font-medium text-[#7b4a27] mb-2">
                  Email Address
                </label>
                <input
                  id="login-email"
                  name="email"
                  type="email"
                  value={loginData.email}
                  onChange={handleLoginInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-[#e7d3c2]/50 text-[#7b4a27] border-2 transition-all duration-300 focus:outline-none ${
                    loginErrors.email
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-transparent focus:border-[#a9744f]'
                  }`}
                  placeholder="Enter your email"
                />
                {loginErrors.email && <p className="mt-1 text-sm text-red-600">{loginErrors.email}</p>}
              </div>
              {/* Password */}
              <div>
                <label htmlFor="login-password" className="block text-sm font-medium text-[#7b4a27] mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    id="login-password"
                    name="password"
                    type={loginShowPassword ? "text" : "password"}
                    value={loginData.password}
                    onChange={handleLoginInputChange}
                    className={`w-full px-4 py-3 pr-12 rounded-lg bg-[#e7d3c2]/50 text-[#7b4a27] border-2 transition-all duration-300 focus:outline-none ${
                      loginErrors.password
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-transparent focus:border-[#a9744f]'
                    }`}
                    placeholder="Enter your password"
                  />
                  <button
                    type="button"
                    className="absolute inset-y-0 right-0 pr-3 flex items-center"
                    onClick={() => setLoginShowPassword(!loginShowPassword)}
                  >
                    <svg className="h-5 w-5 text-[#a9744f] hover:text-[#7b4a27] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      {loginShowPassword ? (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                      ) : (
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                      )}
                    </svg>
                  </button>
                </div>
                {loginErrors.password && <p className="mt-1 text-sm text-red-600">{loginErrors.password}</p>}
              </div>
              {/* Remember Me & Forgot Password */}
              <div className="flex items-center justify-between">
                <label className="flex items-center">
                  <input
                    name="rememberMe"
                    type="checkbox"
                    checked={loginData.rememberMe}
                    onChange={handleLoginInputChange}
                    className="h-4 w-4 text-[#a9744f] focus:ring-[#a9744f] border-[#a9744f]/30 rounded"
                  />
                  <span className="ml-2 text-sm text-[#7b4a27]">Remember me</span>
                </label>
                <Link href="/forgot-password" className="text-sm text-[#a9744f] hover:text-[#7b4a27] transition-colors">
                  Forgot password?
                </Link>
              </div>
              {/* Submit */}
              <button
                type="submit"
                disabled={loginLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-white bg-gradient-to-r from-[#a9744f] to-[#7b4a27] hover:from-[#7b4a27] hover:to-[#a9744f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a9744f] transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {loginLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Signing in...</span>
                  </div>
                ) : (
                  'Sign In'
                )}
              </button>
              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#e7d3c2]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/80 text-[#a9744f]">Or continue with</span>
                </div>
              </div>
              {/* Social Login */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSocial('google')}
                  className="flex items-center justify-center px-4 py-3 border border-[#e7d3c2]/50 rounded-lg bg-white/50 hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="ml-2 text-sm font-medium text-[#7b4a27]">Google</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSocial('apple')}
                  className="flex items-center justify-center px-4 py-3 border border-[#e7d3c2]/50 rounded-lg bg-white/50 hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="h-5 w-5 text-[#7b4a27]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="ml-2 text-sm font-medium text-[#7b4a27]">Apple</span>
                </button>
              </div>
              {/* Switch to Signup */}
              <div className="mt-6 text-center">
                <p className="text-sm text-[#a9744f]">
                  Don't have an account?{" "}
                  <button
                    type="button"
                    className="font-medium text-[#7b4a27] hover:text-[#a9744f] transition-colors underline"
                    onClick={() => setActiveTab("signup")}
                  >
                    Sign up here
                  </button>
                </p>
              </div>
            </form>
          ) : (
            <form className="space-y-6" onSubmit={handleSignupSubmit}>
              {signupErrors.general && (
                <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg text-sm">
                  {signupErrors.general}
                </div>
              )}
              {/* Name Fields */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="firstName" className="block text-sm font-medium text-[#7b4a27] mb-2">
                    First Name
                  </label>
                  <input
                    id="firstName"
                    name="firstName"
                    type="text"
                    value={signupData.firstName}
                    onChange={handleSignupInputChange}
                    className={`w-full px-4 py-3 rounded-lg bg-[#e7d3c2]/50 text-[#7b4a27] border-2 transition-all duration-300 focus:outline-none ${
                      signupErrors.firstName
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-transparent focus:border-[#a9744f]'
                    }`}
                    placeholder="Enter first name"
                  />
                  {signupErrors.firstName && <p className="mt-1 text-sm text-red-600">{signupErrors.firstName}</p>}
                </div>
                <div>
                  <label htmlFor="lastName" className="block text-sm font-medium text-[#7b4a27] mb-2">
                    Last Name
                  </label>
                  <input
                    id="lastName"
                    name="lastName"
                    type="text"
                    value={signupData.lastName}
                    onChange={handleSignupInputChange}
                    className={`w-full px-4 py-3 rounded-lg bg-[#e7d3c2]/50 text-[#7b4a27] border-2 transition-all duration-300 focus:outline-none ${
                      signupErrors.lastName
                        ? 'border-red-400 focus:border-red-500'
                        : 'border-transparent focus:border-[#a9744f]'
                    }`}
                    placeholder="Enter last name"
                  />
                  {signupErrors.lastName && <p className="mt-1 text-sm text-red-600">{signupErrors.lastName}</p>}
                </div>
              </div>
              {/* Email */}
              <div>
                <label htmlFor="signup-email" className="block text-sm font-medium text-[#7b4a27] mb-2">
                  Email Address
                </label>
                <input
                  id="signup-email"
                  name="email"
                  type="email"
                  value={signupData.email}
                  onChange={handleSignupInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-[#e7d3c2]/50 text-[#7b4a27] border-2 transition-all duration-300 focus:outline-none ${
                    signupErrors.email
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-transparent focus:border-[#a9744f]'
                  }`}
                  placeholder="Enter your email"
                />
                {signupErrors.email && <p className="mt-1 text-sm text-red-600">{signupErrors.email}</p>}
              </div>
              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-[#7b4a27] mb-2">
                  Phone Number
                </label>
                <input
                  id="phone"
                  name="phone"
                  type="tel"
                  value={signupData.phone}
                  onChange={handleSignupInputChange}
                  className={`w-full px-4 py-3 rounded-lg bg-[#e7d3c2]/50 text-[#7b4a27] border-2 transition-all duration-300 focus:outline-none ${
                    signupErrors.phone
                      ? 'border-red-400 focus:border-red-500'
                      : 'border-transparent focus:border-[#a9744f]'
                  }`}
                  placeholder="Enter your phone number"
                />
                {signupErrors.phone && <p className="mt-1 text-sm text-red-600">{signupErrors.phone}</p>}
              </div>
              {/* Passwords */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="signup-password" className="block text-sm font-medium text-[#7b4a27] mb-2">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      id="signup-password"
                      name="password"
                      type={signupShowPassword ? "text" : "password"}
                      value={signupData.password}
                      onChange={handleSignupInputChange}
                      className={`w-full px-4 py-3 pr-12 rounded-lg bg-[#e7d3c2]/50 text-[#7b4a27] border-2 transition-all duration-300 focus:outline-none ${
                        signupErrors.password
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-transparent focus:border-[#a9744f]'
                      }`}
                      placeholder="Create password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setSignupShowPassword(!signupShowPassword)}
                    >
                      <svg className="h-5 w-5 text-[#a9744f] hover:text-[#7b4a27] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {signupShowPassword ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        )}
                      </svg>
                    </button>
                  </div>
                  {signupErrors.password && <p className="mt-1 text-sm text-red-600">{signupErrors.password}</p>}
                </div>
                <div>
                  <label htmlFor="confirmPassword" className="block text-sm font-medium text-[#7b4a27] mb-2">
                    Confirm Password
                  </label>
                  <div className="relative">
                    <input
                      id="confirmPassword"
                      name="confirmPassword"
                      type={signupShowConfirmPassword ? "text" : "password"}
                      value={signupData.confirmPassword}
                      onChange={handleSignupInputChange}
                      className={`w-full px-4 py-3 pr-12 rounded-lg bg-[#e7d3c2]/50 text-[#7b4a27] border-2 transition-all duration-300 focus:outline-none ${
                        signupErrors.confirmPassword
                          ? 'border-red-400 focus:border-red-500'
                          : 'border-transparent focus:border-[#a9744f]'
                      }`}
                      placeholder="Confirm password"
                    />
                    <button
                      type="button"
                      className="absolute inset-y-0 right-0 pr-3 flex items-center"
                      onClick={() => setSignupShowConfirmPassword(!signupShowConfirmPassword)}
                    >
                      <svg className="h-5 w-5 text-[#a9744f] hover:text-[#7b4a27] transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {signupShowConfirmPassword ? (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13.875 18.825A10.05 10.05 0 0112 19c-4.478 0-8.268-2.943-9.543-7a9.97 9.97 0 011.563-3.029m5.858.908a3 3 0 114.243 4.243M9.878 9.878l4.242 4.242M9.878 9.878L3 3m6.878 6.878L21 21" />
                        ) : (
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268-2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                        )}
                      </svg>
                    </button>
                  </div>
                  {signupErrors.confirmPassword && <p className="mt-1 text-sm text-red-600">{signupErrors.confirmPassword}</p>}
                </div>
              </div>
              {/* Checkboxes */}
              <div className="space-y-4">
                <label className="flex items-start">
                  <input
                    name="agreeToTerms"
                    type="checkbox"
                    checked={signupData.agreeToTerms}
                    onChange={handleSignupInputChange}
                    className="h-4 w-4 text-[#a9744f] focus:ring-[#a9744f] border-[#a9744f]/30 rounded mt-1"
                  />
                  <span className="ml-3 text-sm text-[#7b4a27]">
                    I agree to the{' '}
                    <Link href="/terms" className="text-[#a9744f] hover:text-[#7b4a27] transition-colors underline">
                      Terms and Conditions
                    </Link>{' '}
                    and{' '}
                    <Link href="/privacy" className="text-[#a9744f] hover:text-[#7b4a27] transition-colors underline">
                      Privacy Policy
                    </Link>
                  </span>
                </label>
                {signupErrors.agreeToTerms && <p className="text-sm text-red-600">{signupErrors.agreeToTerms}</p>}
                <label className="flex items-center">
                  <input
                    name="newsletter"
                    type="checkbox"
                    checked={signupData.newsletter}
                    onChange={handleSignupInputChange}
                    className="h-4 w-4 text-[#a9744f] focus:ring-[#a9744f] border-[#a9744f]/30 rounded"
                  />
                  <span className="ml-3 text-sm text-[#7b4a27]">
                    Subscribe to our newsletter for updates and offers
                  </span>
                </label>
              </div>
              {/* Submit */}
              <button
                type="submit"
                disabled={signupLoading}
                className="w-full flex justify-center py-3 px-4 border border-transparent rounded-lg shadow-lg text-white bg-gradient-to-r from-[#a9744f] to-[#7b4a27] hover:from-[#7b4a27] hover:to-[#a9744f] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-[#a9744f] transition-all duration-300 transform hover:scale-[1.02] disabled:opacity-50 disabled:cursor-not-allowed disabled:transform-none"
              >
                {signupLoading ? (
                  <div className="flex items-center space-x-2">
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                    <span>Creating Account...</span>
                  </div>
                ) : (
                  'Create Account'
                )}
              </button>
              {/* Divider */}
              <div className="relative my-6">
                <div className="absolute inset-0 flex items-center">
                  <div className="w-full border-t border-[#e7d3c2]"></div>
                </div>
                <div className="relative flex justify-center text-sm">
                  <span className="px-4 bg-white/80 text-[#a9744f]">Or sign up with</span>
                </div>
              </div>
              {/* Social Signup */}
              <div className="grid grid-cols-2 gap-3">
                <button
                  type="button"
                  onClick={() => handleSocial('google')}
                  className="flex items-center justify-center px-4 py-3 border border-[#e7d3c2]/50 rounded-lg bg-white/50 hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="h-5 w-5" viewBox="0 0 24 24">
                    <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"/>
                    <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"/>
                    <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"/>
                    <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"/>
                  </svg>
                  <span className="ml-2 text-sm font-medium text-[#7b4a27]">Google</span>
                </button>
                <button
                  type="button"
                  onClick={() => handleSocial('apple')}
                  className="flex items-center justify-center px-4 py-3 border border-[#e7d3c2]/50 rounded-lg bg-white/50 hover:bg-white transition-all duration-300 transform hover:scale-105"
                >
                  <svg className="h-5 w-5 text-[#7b4a27]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
                  </svg>
                  <span className="ml-2 text-sm font-medium text-[#7b4a27]">Apple</span>
                </button>
              </div>
              {/* Switch to Login */}
              <div className="mt-6 text-center">
                <p className="text-sm text-[#a9744f]">
                  Already have an account?{" "}
                  <button
                    type="button"
                    className="font-medium text-[#7b4a27] hover:text-[#a9744f] transition-colors underline"
                    onClick={() => setActiveTab("login")}
                  >
                    Sign in here
                  </button>
                </p>
              </div>
            </form>
          )}
        </div>
        {/* Footer */}
        <div className="text-center text-xs text-[#a9744f]">
          <p>© 2025 Prime Woods & Ply Solutions. All rights reserved.</p>
          <div className="mt-2 space-x-4">
            <Link href="/privacy" className="hover:text-[#7b4a27] transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="hover:text-[#7b4a27] transition-colors">Terms of Service</Link>
          </div>
        </div>
      </div>
    </div>
  );
}