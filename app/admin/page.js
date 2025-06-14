"use client";
import React, { useState, useEffect } from 'react';
import { useAuth } from '../components/auth/AuthContext';
import { getFirestore, collection, query, orderBy, getDocs, updateDoc, doc, addDoc, deleteDoc, onSnapshot } from 'firebase/firestore';
import app from '../backend/firebase.config';
import { useRouter, useSearchParams, usePathname, useRouter as useNextRouter } from 'next/navigation';
import { getStorage, ref, uploadBytes, getDownloadURL, uploadBytesResumable } from 'firebase/storage';
import imageCompression from 'browser-image-compression';
import { ProtectedRoute } from '../components/auth/AuthContext';

export default function AdminDashboard() {
  const { user } = useAuth();
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const nextRouter = useNextRouter();
  const [activeTab, setActiveTab] = useState('orders');
  const [orders, setOrders] = useState([]);
  const [enquiries, setEnquiries] = useState([]);
  const [customerService, setCustomerService] = useState([]);
  const [orderHistory, setOrderHistory] = useState([]);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [updatingOrderIds, setUpdatingOrderIds] = useState([]);
  const [updatingServiceIds, setUpdatingServiceIds] = useState([]);
  const [newProduct, setNewProduct] = useState({
    name: '',
    category: '',
    price: '',
    originalPrice: '',
    image: '',
    description: '',
    features: [],
    specifications: {},
    inStock: true,
    rating: 0,
    reviews: 0
  });
  const [imageFile, setImageFile] = useState(null);
  const [uploadProgress, setUploadProgress] = useState(0);

  useEffect(() => {
    if (user?.role !== 'admin') {
      router.push('/');
      return;
    }
    fetchData();
    // Real-time products listener
    const db = getFirestore(app);
    const productsCol = collection(db, 'products');
    const unsubscribe = onSnapshot(productsCol, (snapshot) => {
      const productsData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
      setProducts(productsData);
    });
    return () => unsubscribe();
  }, [user, router]);

  useEffect(() => {
    // Set tab from URL on mount
    const tab = searchParams.get('tab');
    if (tab) setActiveTab(tab);
  }, []);

  const fetchData = async () => {
    const db = getFirestore(app);
    setLoading(true);

    try {
      // Fetch Orders
      const ordersQuery = query(collection(db, 'orders'), orderBy('createdAt', 'desc'));
      const ordersSnapshot = await getDocs(ordersQuery);
      const ordersData = ordersSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      }));
      setOrders(ordersData);

      // Fetch Enquiries
      const enquiriesQuery = query(collection(db, 'enquiries'), orderBy('createdAt', 'desc'));
      const enquiriesSnapshot = await getDocs(enquiriesQuery);
      const enquiriesData = enquiriesSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      }));
      setEnquiries(enquiriesData);

      // Fetch Customer Service
      const customerServiceQuery = query(collection(db, 'customerService'), orderBy('createdAt', 'desc'));
      const customerServiceSnapshot = await getDocs(customerServiceQuery);
      const customerServiceData = customerServiceSnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      }));
      setCustomerService(customerServiceData);

      // Fetch Order History (Completed Orders)
      const orderHistoryQuery = query(collection(db, 'OrderCompleted'), orderBy('createdAt', 'desc'));
      const orderHistorySnapshot = await getDocs(orderHistoryQuery);
      const orderHistoryData = orderHistorySnapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
        createdAt: doc.data().createdAt?.toDate()
      }));
      setOrderHistory(orderHistoryData);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setLoading(false);
    }
  };

  const handleCompleteOrder = async (order) => {
    setUpdatingOrderIds((ids) => [...ids, order.id]);
    setOrders((prev) => prev.map((o) => o.id === order.id ? { ...o, status: 'completed' } : o));
    try {
      const db = getFirestore(app);
      await updateDoc(doc(db, 'orders', order.id), { status: 'completed' });
      await addDoc(collection(db, 'OrderCompleted'), { ...order, orderId: order.id, status: 'completed', completedAt: new Date() });
      // Optionally, remove from orders state
      // setOrders((prev) => prev.filter((o) => o.id !== order.id));
      // Optionally, update orderHistory state
      setOrderHistory((prev) => [
        { ...order, orderId: order.id, status: 'completed', completedAt: new Date(), id: Math.random().toString(36).slice(2) },
        ...prev
      ]);
    } catch (error) {
      // Rollback UI if error
      setOrders((prev) => prev.map((o) => o.id === order.id ? { ...o, status: order.status } : o));
      alert('Failed to update order');
    } finally {
      setUpdatingOrderIds((ids) => ids.filter((id) => id !== order.id));
    }
  };

  const handleCompleteCustomerService = async (service) => {
    setUpdatingServiceIds((ids) => [...ids, service.id]);
    setCustomerService((prev) => prev.map((s) => s.id === service.id ? { ...s, status: 'resolved' } : s));
    try {
      const db = getFirestore(app);
      await updateDoc(doc(db, 'customerService', service.id), { status: 'resolved' });
    } catch (error) {
      setCustomerService((prev) => prev.map((s) => s.id === service.id ? { ...s, status: service.status } : s));
      alert('Failed to update service request');
    } finally {
      setUpdatingServiceIds((ids) => ids.filter((id) => id !== service.id));
    }
  };

  const handleToggleInStock = async (product) => {
    if (!product.id || typeof product.id !== 'string') {
      alert('Invalid product ID. Cannot toggle in-stock status.');
      return;
    }
    // Optimistically update UI
    setProducts(products.map(p => p.id === product.id ? { ...p, inStock: !p.inStock } : p));
    const db = getFirestore(app);
    const productRef = doc(db, 'products', String(product.id));
    try {
      await updateDoc(productRef, { inStock: !product.inStock });
    } catch (error) {
      // Revert if failed
      setProducts(products.map(p => p.id === product.id ? { ...p, inStock: product.inStock } : p));
      alert('Failed to update in-stock status.');
    }
  };

  const handleImageChange = (e) => {
    if (e.target.files && e.target.files[0]) {
      setImageFile(e.target.files[0]);
    }
  };

  const handleAddProduct = async (e) => {
    e.preventDefault();
    const db = getFirestore(app);
    let imageUrl = newProduct.image;
    if (imageFile) {
      // Compress image
      const compressedFile = await imageCompression(imageFile, { maxSizeMB: 1, maxWidthOrHeight: 800, useWebWorker: true });
      if (compressedFile.size > 1024 * 1024) {
        alert('Image is too large after compression. Please choose a smaller image.');
        return;
      }
      const storage = getStorage(app);
      const storageRef = ref(storage, `product-images/${Date.now()}_${compressedFile.name}`);
      const uploadTask = uploadBytesResumable(storageRef, compressedFile);
      uploadTask.on('state_changed', (snapshot) => {
        setUploadProgress((snapshot.bytesTransferred / snapshot.totalBytes) * 100);
      });
      await uploadTask;
      imageUrl = await getDownloadURL(storageRef);
      setUploadProgress(0);
    }
    await addDoc(collection(db, 'products'), { ...newProduct, image: imageUrl });
    setNewProduct({
      name: '',
      category: '',
      price: '',
      originalPrice: '',
      image: '',
      description: '',
      features: [],
      specifications: {},
      inStock: true,
      rating: 0,
      reviews: 0
    });
    setImageFile(null);
    fetchData();
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({ ...newProduct, [name]: value });
  };

  const handleDeleteProduct = async (productId) => {
    // Optimistically update UI
    const prevProducts = products;
    setProducts(products.filter(p => p.id !== productId));
    const db = getFirestore(app);
    try {
      await deleteDoc(doc(db, 'products', productId));
    } catch (error) {
      // Revert if failed
      setProducts(prevProducts);
      alert('Failed to delete product.');
    }
  };

  const handleTabChange = (tab) => {
    setActiveTab(tab);
    nextRouter.replace(`${pathname}?tab=${tab}`);
  };

  const handleStatusUpdate = async (id, newStatus) => {
    try {
      const db = getFirestore(app);
      await updateDoc(doc(db, 'enquiries', id), {
        status: newStatus,
        updatedAt: new Date()
      });
    } catch (error) {
      console.error('Error updating status:', error);
    }
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this enquiry?')) {
      try {
        const db = getFirestore(app);
        await deleteDoc(doc(db, 'enquiries', id));
      } catch (error) {
        console.error('Error deleting enquiry:', error);
      }
    }
  };

  const renderOrders = () => (
    <div className="space-y-4">
      {orders.map((order) => (
        <div key={order.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">Order #{order.id.slice(-6)}</h3>
              <p className="text-gray-600">Customer: {order.userEmail}</p>
              <p className="text-gray-600">Date: {order.createdAt?.toLocaleDateString()}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              order.status === 'completed' ? 'bg-green-100 text-green-800' :
              order.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {order.status}
            </span>
          </div>
          <div className="mt-4">
            <h4 className="font-medium mb-2">Items:</h4>
            <ul className="space-y-2">
              {order.items.map((item, index) => (
                <li key={index} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span>Qty: {item.qty}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 pt-4 border-t flex justify-between items-center">
            <p className="text-right font-semibold">Total: ₹{order.total}</p>
            {order.status !== 'completed' && (
              <button
                onClick={() => handleCompleteOrder(order)}
                className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all disabled:opacity-50"
                disabled={updatingOrderIds.includes(order.id)}
              >
                {updatingOrderIds.includes(order.id) ? 'Updating...' : 'Mark as Completed'}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderEnquiries = () => (
    <div className="space-y-4">
      {enquiries.map((enquiry) => (
        <div key={enquiry.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">Enquiry #{enquiry.id.slice(-6)}</h3>
              <p className="text-gray-600">From: {enquiry.email}</p>
              <p className="text-gray-600">Date: {enquiry.createdAt?.toLocaleDateString()}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              enquiry.status === 'resolved' ? 'bg-green-100 text-green-800' :
              enquiry.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {enquiry.status}
            </span>
          </div>
          <div className="mt-4">
            <p className="text-gray-700">{enquiry.message}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderCustomerService = () => (
    <div className="space-y-4">
      {customerService.map((service) => (
        <div key={service.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">Service Request #{service.id.slice(-6)}</h3>
              <p className="text-gray-600">From: {service.email}</p>
              <p className="text-gray-600">Date: {service.createdAt?.toLocaleDateString()}</p>
            </div>
            <span className={`px-3 py-1 rounded-full text-sm ${
              service.status === 'resolved' ? 'bg-green-100 text-green-800' :
              service.status === 'pending' ? 'bg-yellow-100 text-yellow-800' :
              'bg-gray-100 text-gray-800'
            }`}>
              {service.status}
            </span>
          </div>
          <div className="mt-4 flex justify-between items-center">
            <p className="text-gray-700">{service.message}</p>
            {service.status !== 'resolved' && (
              <button
                onClick={() => handleCompleteCustomerService(service)}
                className="ml-4 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-all disabled:opacity-50"
                disabled={updatingServiceIds.includes(service.id)}
              >
                {updatingServiceIds.includes(service.id) ? 'Updating...' : 'Completed'}
              </button>
            )}
          </div>
        </div>
      ))}
    </div>
  );

  const renderOrderHistory = () => (
    <div className="space-y-4">
      {orderHistory.map((order, idx) => (
        <div key={`${order.orderId || order.id}-${idx}-${Date.now()}`} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">Order #{order.orderId ? order.orderId.slice(-6) : order.id.slice(-6)}</h3>
              <p className="text-gray-600">Customer: {order.userEmail}</p>
              <p className="text-gray-600">Date: {order.createdAt?.toLocaleDateString()}</p>
            </div>
            <span className="px-3 py-1 rounded-full text-sm bg-green-100 text-green-800">
              completed
            </span>
          </div>
          <div className="mt-4">
            <h4 className="font-medium mb-2">Items:</h4>
            <ul className="space-y-2">
              {order.items.map((item, index) => (
                <li key={`${order.orderId || order.id}-item-${index}`} className="flex justify-between text-sm">
                  <span>{item.name}</span>
                  <span>Qty: {item.qty}</span>
                  <span>₹{item.price}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="mt-4 pt-4 border-t">
            <p className="text-right font-semibold">Total: ₹{order.total}</p>
          </div>
        </div>
      ))}
    </div>
  );

  const renderProducts = () => (
    <div className="space-y-4">
      {products.map((product) => (
        <div key={product.id} className="bg-white p-6 rounded-lg shadow-md">
          <div className="flex justify-between items-start">
            <div>
              <h3 className="text-lg font-semibold">Product #{String(product.id).slice(-6)}</h3>
              <p className="text-gray-600">Name: {product.name}</p>
              <p className="text-gray-600">Category: {product.category}</p>
              <p className="text-gray-600">Price: ₹{product.price}</p>
              <p className="text-gray-600">In Stock: {product.inStock ? 'Yes' : 'No'}</p>
            </div>
          </div>
        </div>
      ))}
    </div>
  );

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-100 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-gray-900"></div>
      </div>
    );
  }

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-10 flex flex-col sm:flex-row sm:items-center sm:justify-between">
            <h1 className="text-4xl font-bold text-gray-900 mb-4 sm:mb-0">Admin Dashboard</h1>
            <p className="text-gray-500 text-lg">Manage orders, products, and more</p>
          </div>

          <div className="mb-8">
            <div className="border-b border-gray-200">
              <nav className="-mb-px flex space-x-8">
                <button
                  onClick={() => handleTabChange('orders')}
                  className={`${
                    activeTab === 'orders'
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Orders
                </button>
                <button
                  onClick={() => handleTabChange('enquiries')}
                  className={`${
                    activeTab === 'enquiries'
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Enquiries
                </button>
                <button
                  onClick={() => handleTabChange('customerService')}
                  className={`${
                    activeTab === 'customerService'
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Customer Service
                </button>
                <button
                  onClick={() => handleTabChange('orderHistory')}
                  className={`${
                    activeTab === 'orderHistory'
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Order History
                </button>
                <button
                  onClick={() => handleTabChange('products')}
                  className={`${
                    activeTab === 'products'
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Products
                </button>
                <button
                  onClick={() => handleTabChange('addProduct')}
                  className={`${
                    activeTab === 'addProduct'
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Add Product
                </button>
                <button
                  onClick={() => handleTabChange('manageAdmins')}
                  className={`${
                    activeTab === 'manageAdmins'
                      ? 'border-gray-900 text-gray-900'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  } whitespace-nowrap py-4 px-1 border-b-2 font-medium text-sm`}
                >
                  Manage Admins
                </button>
              </nav>
            </div>
          </div>

          <div className="mt-8">
            {activeTab === 'orders' && renderOrders()}
            {activeTab === 'enquiries' && renderEnquiries()}
            {activeTab === 'customerService' && renderCustomerService()}
            {activeTab === 'orderHistory' && renderOrderHistory()}
            {activeTab === 'products' && renderProducts()}
            {activeTab === 'addProduct' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Add New Product</h2>
                <form onSubmit={handleAddProduct}>
                  <div className="mb-4">
                    <label className="block text-gray-700">Name</label>
                    <input
                      type="text"
                      name="name"
                      value={newProduct.name}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Category</label>
                    <input
                      type="text"
                      name="category"
                      value={newProduct.category}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Price</label>
                    <input
                      type="number"
                      name="price"
                      value={newProduct.price}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Original Price</label>
                    <input
                      type="number"
                      name="originalPrice"
                      value={newProduct.originalPrice}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Image</label>
                    <input
                      type="file"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full p-2 border rounded"
                    />
                    {imageFile && (
                      <img src={URL.createObjectURL(imageFile)} alt="Preview" className="w-32 h-32 object-cover mt-2 border" />
                    )}
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Or Image URL</label>
                    <input
                      type="text"
                      name="image"
                      value={newProduct.image}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                    />
                  </div>
                  <div className="mb-4">
                    <label className="block text-gray-700">Description</label>
                    <textarea
                      name="description"
                      value={newProduct.description}
                      onChange={handleInputChange}
                      className="w-full p-2 border rounded"
                      required
                    />
                  </div>
                  {uploadProgress > 0 && (
                    <div className="w-full bg-gray-200 rounded-full h-2.5 mb-4">
                      <div className="bg-green-500 h-2.5 rounded-full transition-all duration-300" style={{ width: `${uploadProgress}%` }}></div>
                    </div>
                  )}
                  <button type="submit" className="px-4 py-2 bg-green-500 text-white rounded">Add Product</button>
                </form>
              </div>
            )}
            {activeTab === 'manageAdmins' && (
              <div className="bg-white rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-4">Manage Admin Users</h2>
                <p className="text-gray-600 mb-4">
                  To manage admin users, please visit the dedicated admin management page.
                </p>
                <a
                  href="/admin/manage-admins"
                  className="inline-block px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Go to Admin Management
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </ProtectedRoute>
  );
} 