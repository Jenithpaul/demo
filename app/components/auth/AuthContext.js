"use client";
import React, { createContext, useContext, useState, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { getFirestore, collection, query, where, getDocs, addDoc } from 'firebase/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import app from '../../backend/firebase.config';

const AuthContext = createContext();

// List of admin emails
const ADMIN_EMAILS = [
  'jenithpaul66@gmail.com',
  'rakeshchoudhary6321@gmail.com'
];

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();
  const db = getFirestore(app);
  const auth = getAuth(app);

  // Initialize admin users in Firestore
  const initializeAdminUsers = async () => {
    try {
      const adminRef = collection(db, 'adminUsers');
      
      // Check if admin users exist
      const q = query(adminRef);
      const querySnapshot = await getDocs(q);
      
      if (querySnapshot.empty) {
        // Add admin users if none exist
        for (const email of ADMIN_EMAILS) {
          await addDoc(adminRef, { email });
        }
        console.log('Admin users initialized');
      }
    } catch (error) {
      console.error('Error initializing admin users:', error);
    }
  };

  useEffect(() => {
    // Initialize admin users on mount
    initializeAdminUsers();

    // Check if user is logged in on mount
    const unsubscribe = auth.onAuthStateChanged(async (firebaseUser) => {
      if (firebaseUser) {
        // Check if the user is an admin
        const isAdmin = await checkAdminAccess(firebaseUser.email);
        const userData = {
          uid: firebaseUser.uid,
          email: firebaseUser.email,
          displayName: firebaseUser.displayName,
          photoURL: firebaseUser.photoURL,
          role: isAdmin ? 'admin' : 'user'
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        
        // If user is not an admin, redirect to home
        if (!isAdmin) {
          router.push('/');
        }
      } else {
        setUser(null);
        localStorage.removeItem('user');
      }
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const checkAdminAccess = async (email) => {
    try {
      // First check the hardcoded list
      if (ADMIN_EMAILS.includes(email)) {
        return true;
      }

      // Then check Firestore
      const adminRef = collection(db, 'adminUsers');
      const q = query(adminRef, where('email', '==', email));
      const querySnapshot = await getDocs(q);
      return !querySnapshot.empty;
    } catch (error) {
      console.error('Error checking admin access:', error);
      return false;
    }
  };

  const login = async (email, password) => {
    try {
      const isAdmin = await checkAdminAccess(email);
      if (isAdmin) {
        const userData = {
          email,
          displayName: 'Admin User',
          role: 'admin'
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        router.push('/admin');
        return true;
      }
      return false;
    } catch (error) {
      console.error('Login error:', error);
      return false;
    }
  };

  const loginWithGoogle = async () => {
    try {
      const provider = new GoogleAuthProvider();
      const result = await signInWithPopup(auth, provider);
      const isAdmin = await checkAdminAccess(result.user.email);
      
      if (isAdmin) {
        const userData = {
          uid: result.user.uid,
          email: result.user.email,
          displayName: result.user.displayName,
          photoURL: result.user.photoURL,
          role: 'admin'
        };
        setUser(userData);
        localStorage.setItem('user', JSON.stringify(userData));
        router.push('/admin');
        return true;
      } else {
        // If not admin, sign out and show error
        await signOut(auth);
        setUser(null);
        localStorage.removeItem('user');
        return false;
      }
    } catch (error) {
      console.error('Google login error:', error);
      return false;
    }
  };

  const logout = async () => {
    try {
      await signOut(auth);
      setUser(null);
      localStorage.removeItem('user');
      router.push('/');
    } catch (error) {
      console.error('Logout error:', error);
    }
  };

  const value = {
    user,
    setUser,
    login,
    loginWithGoogle,
    logout,
    loading
  };

  return (
    <AuthContext.Provider value={value}>
      {!loading && children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
}

// Protected Route Component
export function ProtectedRoute({ children }) {
  const { user, loading } = useAuth();
  const router = useRouter();

  useEffect(() => {
    if (!loading && (!user || user.role !== 'admin')) {
      router.push('/login');
    }
  }, [user, loading, router]);

  if (loading) {
    return <div>Loading...</div>;
  }

  return user && user.role === 'admin' ? children : null;
} 