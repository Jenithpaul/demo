"use client";
import React, { useState, useEffect } from 'react';
import { useAuth } from '../../components/auth/AuthContext';
import { getFirestore, collection, addDoc, getDocs, deleteDoc, doc } from 'firebase/firestore';
import app from '../../backend/firebase.config';
import { ProtectedRoute } from '../../components/auth/AuthContext';

export default function ManageAdmins() {
  const [adminEmails, setAdminEmails] = useState([]);
  const [newEmail, setNewEmail] = useState('');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const { user } = useAuth();
  const db = getFirestore(app);

  useEffect(() => {
    fetchAdminEmails();
  }, []);

  const fetchAdminEmails = async () => {
    try {
      const adminRef = collection(db, 'adminUsers');
      const snapshot = await getDocs(adminRef);
      const emails = snapshot.docs.map(doc => ({
        id: doc.id,
        email: doc.data().email
      }));
      setAdminEmails(emails);
    } catch (error) {
      console.error('Error fetching admin emails:', error);
      setError('Failed to fetch admin emails');
    } finally {
      setLoading(false);
    }
  };

  const handleAddAdmin = async (e) => {
    e.preventDefault();
    if (!newEmail) return;

    try {
      const adminRef = collection(db, 'adminUsers');
      await addDoc(adminRef, { email: newEmail });
      setNewEmail('');
      fetchAdminEmails();
    } catch (error) {
      console.error('Error adding admin:', error);
      setError('Failed to add admin');
    }
  };

  const handleRemoveAdmin = async (adminId) => {
    if (!window.confirm('Are you sure you want to remove this admin?')) return;

    try {
      await deleteDoc(doc(db, 'adminUsers', adminId));
      fetchAdminEmails();
    } catch (error) {
      console.error('Error removing admin:', error);
      setError('Failed to remove admin');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100 py-12">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-lg shadow-lg p-6">
            <h1 className="text-3xl font-bold text-gray-900 mb-8">Manage Admin Users</h1>

            {error && (
              <div className="mb-4 p-4 bg-red-100 text-red-700 rounded-lg">
                {error}
              </div>
            )}

            <form onSubmit={handleAddAdmin} className="mb-8">
              <div className="flex gap-4">
                <input
                  type="email"
                  value={newEmail}
                  onChange={(e) => setNewEmail(e.target.value)}
                  placeholder="Enter admin email"
                  className="flex-1 p-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                  required
                />
                <button
                  type="submit"
                  className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Add Admin
                </button>
              </div>
            </form>

            <div className="space-y-4">
              <h2 className="text-xl font-semibold text-gray-900 mb-4">Current Admin Users</h2>
              {adminEmails.map((admin) => (
                <div
                  key={admin.id}
                  className="flex items-center justify-between p-4 bg-gray-50 rounded-lg"
                >
                  <span className="text-gray-700">{admin.email}</span>
                  <button
                    onClick={() => handleRemoveAdmin(admin.id)}
                    className="px-3 py-1 text-red-600 hover:text-red-800 transition-colors"
                  >
                    Remove
                  </button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 