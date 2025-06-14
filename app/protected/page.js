"use client";
import { ProtectedRoute } from '../components/utils/AuthContext';

export default function ProtectedPage() {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white shadow-xl rounded-lg p-8">
            <h1 className="text-3xl font-bold text-gray-900 mb-6">Protected Content</h1>
            <p className="text-gray-600 mb-4">
              This page is only accessible to authorized users with the email: jenithpaul66@gmail.com
            </p>
            <div className="bg-gray-50 p-6 rounded-lg">
              <h2 className="text-xl font-semibold text-gray-800 mb-4">Welcome to the Protected Area</h2>
              <p className="text-gray-600">
                You have successfully authenticated and can now access this protected content.
              </p>
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 