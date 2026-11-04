'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { 
  Package, 
  CheckCircle2, 
  Clock, 
  DollarSign, 
  RefreshCw, 
  Search, 
  LogOut, 
  AlertCircle, 
  Eye, 
  Calendar, 
  X, 
  Printer, 
  Phone, 
  Mail, 
  MapPin, 
  CreditCard, 
  Layers, 
  FilterX, 
  Store, 
  FileText, 
  Truck, 
  Check, 
  Copy, 
  Edit2, 
  Save 
} from 'lucide-react';
import { InventoryOrder, OrderFilterStatus } from '@/types/order';

export default function InventoryIssueSystem() {
  // Authentication State
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [pinInput, setPinInput] = useState<string>('');
  const [pinError, setPinError] = useState<string>('');
  const [isAuthLoading, setIsAuthLoading] = useState<boolean>(false);

  // Orders State
  const [orders, setOrders] = useState<InventoryOrder[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isRefreshing, setIsRefreshing] = useState<boolean>(false);
  const [isDemoMode, setIsDemoMode] = useState<boolean>(false);
  
  // Filter & Search States
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [statusFilter, setStatusFilter] = useState<OrderFilterStatus>('all');
  const [selectedDate, setSelectedDate] = useState<string>('');     // YYYY-MM-DD
  const [selectedMonth, setSelectedMonth] = useState<string>('all'); // YYYY-MM or 'all'

  // Modal / Detail View State
  const [activeOrderModal, setActiveOrderModal] = useState<InventoryOrder | null>(null);
  const [statusUpdatingId, setStatusUpdatingId] = useState<number | null>(null);
  const [toastMessage, setToastMessage] = useState<string | null>(null);

  // Inline Tracking Number Editing State
  const [editingTrackingId, setEditingTrackingId] = useState<number | null>(null);
  const [trackingInputVal, setTrackingInputVal] = useState<string>('');
  const [isSavingTracking, setIsSavingTracking] = useState<boolean>(false);
  const [copiedTracking, setCopiedTracking] = useState<string | null>(null);

  // Modal Tracking Number State
  const [modalTrackingInput, setModalTrackingInput] = useState<string>('');

  // Check saved login session
  useEffect(() => {
    const savedAuth = localStorage.getItem('inventory_app_auth');
    if (savedAuth === 'true') {
      setIsAuthenticated(true);
    }
  }, []);

  // Fetch orders when authenticated
  useEffect(() => {
    if (isAuthenticated) {
      loadOrders();
    }
  }, [isAuthenticated]);

  // Synchronize modal tracking input whenever activeOrderModal changes
  useEffect(() => {
    if (activeOrderModal) {
      setModalTrackingInput(activeOrderModal.trackingNumber || '');
    }
  }, [activeOrderModal]);

  const showToast = (msg: string) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3500);
  };

  const handleLogin = async (e?: React.FormEvent) => {
    if (e) e.preventDefault();
    const cleanPin = String(pinInput || '').trim();
    if (!cleanPin) {
      setPinError('Please enter Staff Access PIN');
      return;
    }

    // Instant unlock for default 1234
    if (cleanPin === '1234') {
      setIsAuthenticated(true);
      localStorage.setItem('inventory_app_auth', 'true');
      setPinError('');
      return;
    }

    setIsAuthLoading(true);
    setPinError('');

    try {
      const res = await fetch('/api/auth', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ pin: cleanPin }),
      });

      const data = await res.json();
      if (res.ok && data.success) {
        setIsAuthenticated(true);
        localStorage.setItem('inventory_app_auth', 'true');
      } else {
        setPinError(data.message || 'Invalid PIN code');
        setPinInput('');
      }
    } catch (err) {
      setPinError('Connection error. Try again.');
    } finally {
      setIsAuthLoading(false);
    }
  };

  const handleLogout = () => {
    localStorage.removeItem('inventory_app_auth');
    setIsAuthenticated(false);
    setPinInput('');
  };

  const loadOrders = async () => {
    setIsRefreshing(true);
    try {
      const res = await fetch('/api/orders');
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setOrders(data.orders || []);
      setIsDemoMode(Boolean(data.isDemo));
    } catch (error) {
      console.error(error);
      showToast('Could not load orders. Check WooCommerce connection.');
    } finally {
      setIsLoading(false);
      setIsRefreshing(false);
    }
  };

  const handleUpdateStatus = async (orderId: number, newStatus: string) => {
    setStatusUpdatingId(orderId);
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ status: newStatus }),
      });

      if (!res.ok) throw new Error('Update failed');

      // Update in local state
      setOrders(prev =>
        prev.map(o => (o.id === orderId ? { ...o, status: newStatus } : o))
      );

      // If active modal is open for this order, update it too
      if (activeOrderModal && activeOrderModal.id === orderId) {
        setActiveOrderModal(prev => prev ? { ...prev, status: newStatus } : null);
      }

      showToast(`Order #${orderId} marked as ${newStatus === 'completed' ? 'Issued (Completed)' : newStatus}!`);
    } catch (err) {
      console.error(err);
      showToast(`Failed to update Order #${orderId}`);
    } finally {
      setStatusUpdatingId(null);
    }
  };

  const handleSaveTrackingNumber = async (orderId: number, trackingNumber: string) => {
    setIsSavingTracking(true);
    try {
      const res = await fetch(`/api/orders/${orderId}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ trackingNumber: trackingNumber.trim() }),
      });

      if (!res.ok) throw new Error('Tracking number save failed');

      // Update local state
      setOrders(prev =>
        prev.map(o => (o.id === orderId ? { ...o, trackingNumber: trackingNumber.trim() } : o))
      );

      if (activeOrderModal && activeOrderModal.id === orderId) {
        setActiveOrderModal(prev => prev ? { ...prev, trackingNumber: trackingNumber.trim() } : null);
      }

      setEditingTrackingId(null);
      showToast(`Tracking # saved for Order #${orderId}!`);
    } catch (err) {
      console.error(err);
      showToast(`Failed to save tracking number for Order #${orderId}`);
    } finally {
      setIsSavingTracking(false);
    }
  };

  const copyToClipboard = (text: string) => {
    if (!text) return;
    navigator.clipboard.writeText(text);
    setCopiedTracking(text);
    showToast(`Copied "${text}" to clipboard`);
    setTimeout(() => setCopiedTracking(null), 2000);
  };

  // Get list of unique available months
  const availableMonths = useMemo(() => {
    const months = new Set<string>();
    orders.forEach(o => {
      if (o.monthYear) months.add(o.monthYear);
    });
    return Array.from(months).sort().reverse();
  }, [orders]);

  // Filtering Logic
  const filteredOrders = useMemo(() => {
    return orders.filter(order => {
      // 1. Status Filter
      if (statusFilter !== 'all' && order.status.toLowerCase() !== statusFilter) {
        return false;
      }

      // 2. Specific Date Filter (YYYY-MM-DD)
      if (selectedDate && order.dateOnly !== selectedDate) {
        return false;
      }

      // 3. Month Filter (YYYY-MM)
      if (selectedMonth !== 'all' && order.monthYear !== selectedMonth) {
        return false;
      }

      // 4. Search Query
      if (searchQuery.trim()) {
        const q = searchQuery.toLowerCase().trim();
        const matchNumber = order.orderNumber.toLowerCase().includes(q);
        const matchName = order.customerName.toLowerCase().includes(q);
        const matchPhone = order.phone.includes(q);
        const matchEmail = order.email.toLowerCase().includes(q);
        const matchTracking = (order.trackingNumber || '').toLowerCase().includes(q);
        const matchAddress = order.shippingAddress.fullAddress.toLowerCase().includes(q);

        if (!matchNumber && !matchName && !matchPhone && !matchEmail && !matchTracking && !matchAddress) {
          return false;
        }
      }

      return true;
    });
  }, [orders, statusFilter, selectedDate, selectedMonth, searchQuery]);

  // High-level statistics
  const stats = useMemo(() => {
    const total = orders.length;
    const readyToIssue = orders.filter(o => o.status === 'processing').length;
    const completed = orders.filter(o => o.status === 'completed').length;
    const hasTracking = orders.filter(o => Boolean(o.trackingNumber)).length;
    const totalValue = orders.reduce((sum, o) => sum + o.totalAmount, 0);

    return { total, readyToIssue, completed, hasTracking, totalValue };
  }, [orders]);

  const clearAllFilters = () => {
    setSearchQuery('');
    setStatusFilter('all');
    setSelectedDate('');
    setSelectedMonth('all');
  };

  const handlePrintSlip = () => {
    window.print();
  };

  // ==========================================
  // 1. PIN LOGIN SCREEN (DARK SLATE THEME)
  // ==========================================
  if (!isAuthenticated) {
    return (
      <div className="flex-1 flex flex-col items-center justify-center p-6 min-h-screen bg-slate-950 text-white font-sans">
        <div className="w-full max-w-md bg-slate-900 border border-slate-800 rounded-3xl p-8 shadow-2xl">
          <div className="flex flex-col items-center mb-8 text-center">
            <div className="w-16 h-16 rounded-2xl bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center mb-4 text-indigo-400">
              <Store className="w-8 h-8" />
            </div>
            <h1 className="text-2xl font-bold tracking-tight text-white">Outlet Inventory Issue</h1>
            <p className="text-sm text-slate-400 mt-1.5">
              Enter Staff PIN to access order fulfillment & inventory issue system
            </p>
          </div>

          <form onSubmit={handleLogin} className="space-y-4">
            <div>
              <label className="block text-xs font-semibold text-slate-300 uppercase tracking-wider mb-2">
                Staff Access PIN
              </label>
              <input
                type="password"
                maxLength={8}
                value={pinInput}
                onChange={e => setPinInput(e.target.value)}
                placeholder="Enter 4-digit PIN (Default: 1234)"
                autoFocus
                className="w-full bg-slate-950 border border-slate-800 rounded-2xl px-4 py-3.5 text-center text-xl font-mono tracking-widest text-white placeholder:text-slate-600 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all"
              />
            </div>

            {pinError && (
              <div className="p-3 bg-rose-500/10 border border-rose-500/30 rounded-xl flex items-center gap-2 text-rose-400 text-xs">
                <AlertCircle className="w-4 h-4 shrink-0" />
                <span>{pinError}</span>
              </div>
            )}

            <button
              type="submit"
              disabled={isAuthLoading}
              className="w-full bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3.5 px-4 rounded-2xl text-sm transition-all shadow-lg shadow-indigo-600/25 active:scale-98"
            >
              {isAuthLoading ? 'Authenticating...' : 'Unlock Inventory System'}
            </button>
          </form>

          <p className="text-center text-xs text-slate-500 mt-6">
            Default PIN: <span className="text-indigo-400 font-mono font-semibold">1234</span>
          </p>
        </div>
      </div>
    );
  }

  // ==========================================
  // 2. MAIN DASHBOARD (PREVIOUS DARK THEME)
  // ==========================================
  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="fixed top-5 right-5 z-50 bg-emerald-500 text-slate-950 px-5 py-3 rounded-2xl font-bold text-sm shadow-2xl flex items-center gap-2 border border-emerald-400/50 animate-in fade-in slide-in-from-top-4">
          <CheckCircle2 className="w-5 h-5" />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Top Navigation Bar - Dark Slate */}
      <header className="sticky top-0 z-30 bg-slate-900/95 backdrop-blur border-b border-slate-800 px-4 sm:px-8 py-4">
        <div className="w-full max-w-[98%] 2xl:max-w-[1850px] mx-auto flex items-center justify-between">
          <div className="flex items-center gap-3.5">
            <div className="w-11 h-11 rounded-2xl bg-indigo-600 flex items-center justify-center text-white shadow-lg shadow-indigo-600/30">
              <Package className="w-6 h-6" />
            </div>
            <div>
              <div className="flex items-center gap-2.5">
                <h1 className="text-xl font-bold text-white tracking-tight">Outlet Inventory Issue System</h1>
                <span className={`text-[11px] font-bold px-2.5 py-0.5 rounded-full ${
                  isDemoMode 
                    ? 'bg-amber-500/20 text-amber-300 border border-amber-500/30' 
                    : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}>
                  {isDemoMode ? 'Demo Mode (Sample Data)' : 'WooCommerce Connected'}
                </span>
              </div>
              <p className="text-xs text-slate-400">Order fulfillments, tracking numbers & stock dispatch</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={loadOrders}
              disabled={isRefreshing}
              className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-200 text-xs font-semibold border border-slate-700/60 transition-all active:scale-95 shadow-sm"
            >
              <RefreshCw className={`w-3.5 h-3.5 ${isRefreshing ? 'animate-spin text-indigo-400' : ''}`} />
              <span>Refresh Orders</span>
            </button>
            <button
              onClick={handleLogout}
              className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-rose-500/10 text-slate-300 hover:text-rose-400 text-xs font-semibold border border-slate-700/60 transition-all active:scale-95 shadow-sm"
            >
              <LogOut className="w-3.5 h-3.5" />
              <span>Logout</span>
            </button>
          </div>
        </div>
      </header>

      {/* Main Content Area - Wide Laptop View */}
      <main className="w-full max-w-[98%] 2xl:max-w-[1850px] mx-auto p-4 sm:p-8 flex-1 flex flex-col gap-6">
        
        {/* KPI / Summary Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-slate-400 uppercase tracking-wider">All Store Orders</span>
              <Layers className="w-5 h-5 text-indigo-400" />
            </div>
            <p className="text-2xl font-bold text-white mt-2">{stats.total}</p>
            <p className="text-xs text-slate-500 mt-1">Total orders in system</p>
          </div>

          <div className="bg-slate-900 border border-indigo-500/30 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-indigo-300 uppercase tracking-wider">Ready to Issue</span>
              <Clock className="w-5 h-5 text-indigo-400" />
            </div>
            <p className="text-2xl font-bold text-indigo-400 mt-2">{stats.readyToIssue}</p>
            <p className="text-xs text-indigo-300/70 mt-1">Processing & awaiting dispatch</p>
          </div>

          <div className="bg-slate-900 border border-emerald-500/30 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-emerald-300 uppercase tracking-wider">Issued / Completed</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-400" />
            </div>
            <p className="text-2xl font-bold text-emerald-400 mt-2">{stats.completed}</p>
            <p className="text-xs text-emerald-300/70 mt-1">Successfully fulfilled</p>
          </div>

          <div className="bg-slate-900 border border-amber-500/30 rounded-2xl p-5 shadow-sm">
            <div className="flex items-center justify-between">
              <span className="text-xs font-semibold text-amber-300 uppercase tracking-wider">Tracking Assigned</span>
              <Truck className="w-5 h-5 text-amber-400" />
            </div>
            <p className="text-2xl font-bold text-amber-400 mt-2">{stats.hasTracking} / {stats.total}</p>
            <p className="text-xs text-amber-300/70 mt-1">Orders with courier waybill</p>
          </div>
        </div>

        {/* Filter & Search Bar Section */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-sm flex flex-col gap-4">
          <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4">
            
            {/* Search Input */}
            <div className="relative flex-1 min-w-[320px]">
              <Search className="w-4 h-4 absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400" />
              <input
                type="text"
                value={searchQuery}
                onChange={e => setSearchQuery(e.target.value)}
                placeholder="Search by Customer Name, Order #, Phone, Tracking #..."
                className="w-full bg-slate-950 border border-slate-800 rounded-xl pl-10 pr-10 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 transition-colors"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-slate-400 hover:text-white"
                >
                  <X className="w-4 h-4" />
                </button>
              )}
            </div>

            {/* Date and Month Filters */}
            <div className="flex flex-wrap items-center gap-3">
              {/* Specific Date Filter */}
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
                <Calendar className="w-4 h-4 text-slate-400" />
                <span className="text-xs text-slate-400 whitespace-nowrap">Date:</span>
                <input
                  type="date"
                  value={selectedDate}
                  onChange={e => setSelectedDate(e.target.value)}
                  className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer [color-scheme:dark]"
                />
                {selectedDate && (
                  <button
                    onClick={() => setSelectedDate('')}
                    title="Clear date"
                    className="text-slate-400 hover:text-white ml-1"
                  >
                    <X className="w-3.5 h-3.5" />
                  </button>
                )}
              </div>

              {/* Month Selector */}
              <div className="flex items-center gap-2 bg-slate-950 border border-slate-800 rounded-xl px-3 py-2">
                <span className="text-xs text-slate-400 whitespace-nowrap">Month:</span>
                <select
                  value={selectedMonth}
                  onChange={e => setSelectedMonth(e.target.value)}
                  className="bg-transparent text-xs text-slate-200 focus:outline-none cursor-pointer"
                >
                  <option value="all" className="bg-slate-900 text-slate-100">All Months</option>
                  {availableMonths.map(m => (
                    <option key={m} value={m} className="bg-slate-900 text-slate-100">
                      {m}
                    </option>
                  ))}
                </select>
              </div>

              {/* Reset Filters */}
              {(searchQuery || selectedDate || selectedMonth !== 'all' || statusFilter !== 'all') && (
                <button
                  onClick={clearAllFilters}
                  className="flex items-center gap-1.5 px-3 py-2 rounded-xl bg-slate-800 hover:bg-slate-750 text-slate-300 text-xs font-medium border border-slate-700/60 transition-colors"
                >
                  <FilterX className="w-3.5 h-3.5" />
                  <span>Reset Filters</span>
                </button>
              )}
            </div>
          </div>

          {/* Status Tabs */}
          <div className="flex flex-wrap items-center gap-2 pt-2 border-t border-slate-800/80">
            <span className="text-xs text-slate-400 font-semibold mr-2">Filter by Status:</span>
            {[
              { id: 'all', label: 'All Orders' },
              { id: 'processing', label: 'Ready to Issue (Processing)' },
              { id: 'completed', label: 'Issued (Completed)' },
              { id: 'on-hold', label: 'On Hold' },
              { id: 'cancelled', label: 'Cancelled' }
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setStatusFilter(tab.id as OrderFilterStatus)}
                className={`text-xs px-3.5 py-1.5 rounded-xl font-medium transition-all ${
                  statusFilter === tab.id
                    ? 'bg-indigo-600 text-white font-bold shadow-sm shadow-indigo-600/30'
                    : 'bg-slate-950 text-slate-400 hover:text-slate-200 border border-slate-800'
                }`}
              >
                {tab.label}
              </button>
            ))}
            <span className="text-xs text-slate-500 ml-auto font-mono">
              Showing {filteredOrders.length} of {orders.length} orders
            </span>
          </div>
        </div>

        {/* Laptop-Friendly Orders Table - Dark Theme */}
        <div className="bg-slate-900 border border-slate-800 rounded-2xl shadow-sm overflow-hidden flex flex-col">
          {isLoading ? (
            <div className="py-24 text-center text-slate-400 flex flex-col items-center">
              <RefreshCw className="w-8 h-8 animate-spin text-indigo-400 mb-3" />
              <p className="text-sm">Loading inventory orders from WooCommerce...</p>
            </div>
          ) : filteredOrders.length === 0 ? (
            <div className="py-24 text-center p-6 flex flex-col items-center">
              <Package className="w-12 h-12 text-slate-600 mb-3" />
              <h3 className="text-base font-bold text-slate-300">No matching orders found</h3>
              <p className="text-xs text-slate-500 mt-1 max-w-sm">
                No orders match your search criteria, selected date, or status filter. Try clearing filters.
              </p>
              <button
                onClick={clearAllFilters}
                className="mt-4 px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-semibold rounded-xl"
              >
                Clear All Filters
              </button>
            </div>
          ) : (
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-slate-800 bg-slate-950/70 text-[11px] uppercase tracking-wider text-slate-400 font-semibold">
                    <th className="py-4 px-4">Order # & Date</th>
                    <th className="py-4 px-4">Customer Details</th>
                    <th className="py-4 px-4">Delivery Address</th>
                    <th className="py-4 px-4">Products to Issue</th>
                    <th className="py-4 px-4">Tracking Number</th>
                    <th className="py-4 px-4">Payment</th>
                    <th className="py-4 px-4">Status</th>
                    <th className="py-4 px-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-800/60 text-sm">
                  {filteredOrders.map(order => {
                    const isUpdating = statusUpdatingId === order.id;
                    const isEditingTracking = editingTrackingId === order.id;

                    return (
                      <tr 
                        key={order.id} 
                        className="hover:bg-slate-800/40 transition-colors group"
                      >
                        {/* Order Number & Date */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className="font-bold text-indigo-400 text-base">
                            #{order.orderNumber}
                          </span>
                          <div className="text-xs text-slate-400 mt-0.5">
                            {order.dateOnly}
                          </div>
                          <div className="text-[11px] text-slate-500">
                            {new Date(order.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                          </div>
                        </td>

                        {/* Customer Details */}
                        <td className="py-4 px-4">
                          <div className="font-bold text-slate-100">{order.customerName}</div>
                          <div className="text-xs text-slate-400 flex items-center gap-1.5 mt-0.5">
                            <Phone className="w-3 h-3 text-slate-500 shrink-0" />
                            <span>{order.phone || 'No phone'}</span>
                          </div>
                          {order.email && (
                            <div className="text-xs text-slate-500 flex items-center gap-1.5 mt-0.5 truncate max-w-[220px]">
                              <Mail className="w-3 h-3 text-slate-500 shrink-0" />
                              <span className="truncate">{order.email}</span>
                            </div>
                          )}
                        </td>

                        {/* Delivery City & Address */}
                        <td className="py-4 px-4 max-w-[240px]">
                          <div className="font-medium text-slate-300 truncate">
                            {order.shippingAddress.city || 'Colombo'}
                          </div>
                          <div className="text-xs text-slate-400 line-clamp-2 mt-0.5" title={order.shippingAddress.fullAddress}>
                            {order.shippingAddress.fullAddress}
                          </div>
                        </td>

                        {/* Products to Issue */}
                        <td className="py-4 px-4 min-w-[200px]">
                          <div className="flex flex-col gap-1">
                            {order.items.slice(0, 2).map((item, idx) => (
                              <div key={idx} className="text-xs flex items-center gap-1.5 text-slate-300">
                                <span className="w-5 h-5 rounded-md bg-indigo-500/20 text-indigo-300 font-bold flex items-center justify-center text-[11px] shrink-0">
                                  {item.quantity}x
                                </span>
                                <span className="truncate max-w-[220px]" title={item.name}>
                                  {item.name}
                                </span>
                              </div>
                            ))}
                            {order.items.length > 2 && (
                              <span className="text-[11px] text-slate-500">
                                +{order.items.length - 2} more item(s)
                              </span>
                            )}
                          </div>
                        </td>

                        {/* Tracking Number Column */}
                        <td className="py-4 px-4 whitespace-nowrap min-w-[190px]">
                          {isEditingTracking ? (
                            <div className="flex items-center gap-1">
                              <input
                                type="text"
                                value={trackingInputVal}
                                onChange={e => setTrackingInputVal(e.target.value)}
                                placeholder="Tracking #"
                                autoFocus
                                className="w-32 bg-slate-950 border border-indigo-500 rounded-lg px-2 py-1 text-xs text-white font-mono focus:outline-none"
                              />
                              <button
                                onClick={() => handleSaveTrackingNumber(order.id, trackingInputVal)}
                                disabled={isSavingTracking}
                                className="p-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white"
                                title="Save"
                              >
                                <Save className="w-3.5 h-3.5" />
                              </button>
                              <button
                                onClick={() => setEditingTrackingId(null)}
                                className="p-1 rounded-md bg-slate-800 text-slate-400 hover:text-white"
                                title="Cancel"
                              >
                                <X className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : order.trackingNumber ? (
                            <div className="flex items-center gap-1.5">
                              <span className="inline-flex items-center gap-1 bg-indigo-500/15 border border-indigo-500/30 text-indigo-300 px-2.5 py-1 rounded-lg text-xs font-mono font-bold">
                                <Truck className="w-3 h-3 text-indigo-400 shrink-0" />
                                <span>{order.trackingNumber}</span>
                              </span>
                              <button
                                onClick={() => copyToClipboard(order.trackingNumber)}
                                className="p-1 text-slate-400 hover:text-white"
                                title="Copy tracking number"
                              >
                                {copiedTracking === order.trackingNumber ? (
                                  <Check className="w-3 h-3 text-emerald-400" />
                                ) : (
                                  <Copy className="w-3 h-3" />
                                )}
                              </button>
                              <button
                                onClick={() => {
                                  setEditingTrackingId(order.id);
                                  setTrackingInputVal(order.trackingNumber);
                                }}
                                className="p-1 text-slate-400 hover:text-white"
                                title="Edit tracking number"
                              >
                                <Edit2 className="w-3.5 h-3.5" />
                              </button>
                            </div>
                          ) : (
                            <button
                              onClick={() => {
                                setEditingTrackingId(order.id);
                                setTrackingInputVal('');
                              }}
                              className="inline-flex items-center gap-1 text-xs text-indigo-400 hover:text-indigo-300 bg-indigo-500/10 hover:bg-indigo-500/20 border border-indigo-500/20 px-2.5 py-1 rounded-lg transition-colors font-medium"
                            >
                              <Truck className="w-3.5 h-3.5" />
                              <span>+ Add Tracking</span>
                            </button>
                          )}
                        </td>

                        {/* Payment */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className={`inline-flex items-center text-xs font-semibold px-2 py-0.5 rounded-full ${
                            order.isCOD
                              ? 'bg-amber-500/15 text-amber-300 border border-amber-500/30'
                              : 'bg-emerald-500/15 text-emerald-400 border border-emerald-500/30'
                          }`}>
                            {order.isCOD ? 'COD' : 'Prepaid'}
                          </span>
                          <div className="font-bold text-slate-100 text-sm mt-1">
                            Rs. {order.totalAmount.toLocaleString()}
                          </div>
                        </td>

                        {/* Status */}
                        <td className="py-4 px-4 whitespace-nowrap">
                          <span className={`inline-flex items-center gap-1 text-xs px-2.5 py-1 rounded-full font-bold uppercase tracking-wider ${
                            order.status === 'processing'
                              ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                              : order.status === 'completed'
                              ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                              : order.status === 'on-hold'
                              ? 'bg-amber-500/20 text-amber-400 border border-amber-500/40'
                              : 'bg-slate-800 text-slate-400'
                          }`}>
                            {order.status === 'processing' ? 'Ready to Issue' : order.status === 'completed' ? 'Issued' : order.status}
                          </span>
                        </td>

                        {/* Action Buttons */}
                        <td className="py-4 px-4 text-right whitespace-nowrap">
                          <div className="flex items-center justify-end gap-2">
                            {/* View Details Button */}
                            <button
                              onClick={() => setActiveOrderModal(order)}
                              className="flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-slate-800 hover:bg-indigo-600 text-slate-200 hover:text-white text-xs font-semibold border border-slate-700/60 transition-all shadow-sm"
                              title="See complete order details"
                            >
                              <Eye className="w-3.5 h-3.5" />
                              <span>View Details</span>
                            </button>

                            {/* Quick Issue Stock Button */}
                            {order.status !== 'completed' ? (
                              <button
                                onClick={() => handleUpdateStatus(order.id, 'completed')}
                                disabled={isUpdating}
                                className="flex items-center gap-1 px-3 py-1.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white text-xs font-bold transition-all shadow-sm active:scale-95"
                                title="Mark order as Issued / Completed"
                              >
                                {isUpdating ? (
                                  <RefreshCw className="w-3 h-3 animate-spin" />
                                ) : (
                                  <CheckCircle2 className="w-3.5 h-3.5" />
                                )}
                                <span>Issue Stock</span>
                              </button>
                            ) : (
                              <span className="text-[11px] text-emerald-400 font-semibold px-2 py-1 bg-emerald-500/10 rounded-lg">
                                Issued ✓
                              </span>
                            )}
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          )}
        </div>
      </main>

      {/* ========================================================== */}
      {/* 3. ORDER MORE DETAILS MODAL                                */}
      {/* ========================================================== */}
      {activeOrderModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-in fade-in duration-150">
          <div className="bg-slate-900 border border-slate-700 rounded-3xl w-full max-w-4xl max-h-[92vh] flex flex-col shadow-2xl overflow-hidden">
            
            {/* Modal Header */}
            <div className="p-5 sm:p-6 bg-slate-850 border-b border-slate-800 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-xl bg-indigo-600/20 border border-indigo-500/30 flex items-center justify-center text-indigo-400">
                  <FileText className="w-5 h-5" />
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h2 className="text-xl font-bold text-white">
                      Order Details #{activeOrderModal.orderNumber}
                    </h2>
                    <span className={`text-xs px-2.5 py-0.5 rounded-full font-bold uppercase tracking-wider ${
                      activeOrderModal.status === 'processing'
                        ? 'bg-blue-500/20 text-blue-400 border border-blue-500/40'
                        : activeOrderModal.status === 'completed'
                        ? 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/40'
                        : 'bg-slate-800 text-slate-300'
                    }`}>
                      {activeOrderModal.status === 'processing' ? 'Ready to Issue' : activeOrderModal.status === 'completed' ? 'Issued' : activeOrderModal.status}
                    </span>
                  </div>
                  <p className="text-xs text-slate-400 mt-0.5">
                    Order Date: {new Date(activeOrderModal.createdAt).toLocaleString()}
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintSlip}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors"
                  title="Print Packing Slip"
                >
                  <Printer className="w-4 h-4" />
                </button>
                <button
                  onClick={() => setActiveOrderModal(null)}
                  className="p-2 rounded-xl bg-slate-800 hover:bg-rose-500/20 text-slate-300 hover:text-rose-400 transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 flex-1 text-sm">
              
              {/* Courier Tracking Number Box */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-indigo-500/30 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-indigo-500/15 border border-indigo-500/30 flex items-center justify-center text-indigo-400 shrink-0">
                    <Truck className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-300">
                      Courier / Waybill Tracking Number
                    </h3>
                    <p className="text-xs text-slate-400">
                      Assign dispatch tracking code for this consignment
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <input
                    type="text"
                    value={modalTrackingInput}
                    onChange={e => setModalTrackingInput(e.target.value)}
                    placeholder="Enter Tracking # (e.g. KMB-12345)"
                    className="bg-slate-900 border border-slate-700 rounded-xl px-3.5 py-2 text-xs font-mono text-white placeholder:text-slate-500 focus:outline-none focus:border-indigo-500 min-w-[200px]"
                  />
                  <button
                    onClick={() => handleSaveTrackingNumber(activeOrderModal.id, modalTrackingInput)}
                    disabled={isSavingTracking}
                    className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 text-white rounded-xl text-xs font-bold transition-all shadow-md active:scale-95"
                  >
                    {isSavingTracking ? 'Saving...' : 'Save Tracking'}
                  </button>
                </div>
              </div>

              {/* Customer & Contact Information Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Customer Contact */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-indigo-400 mb-3 flex items-center gap-1.5">
                    <Phone className="w-3.5 h-3.5" />
                    <span>Customer Information</span>
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-slate-400">Customer Name:</span>
                      <p className="font-bold text-slate-100 text-sm">{activeOrderModal.customerName}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Contact Number:</span>
                      <p className="font-semibold text-slate-200">
                        {activeOrderModal.phone ? (
                          <a href={`tel:${activeOrderModal.phone}`} className="text-indigo-400 hover:underline">
                            {activeOrderModal.phone}
                          </a>
                        ) : 'Not provided'}
                      </p>
                    </div>
                    <div>
                      <span className="text-slate-400">Email Address:</span>
                      <p className="font-semibold text-slate-200">
                        {activeOrderModal.email ? (
                          <a href={`mailto:${activeOrderModal.email}`} className="text-indigo-400 hover:underline">
                            {activeOrderModal.email}
                          </a>
                        ) : 'Not provided'}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Payment Method & Summary */}
                <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                  <h3 className="text-xs font-bold uppercase tracking-wider text-amber-400 mb-3 flex items-center gap-1.5">
                    <CreditCard className="w-3.5 h-3.5" />
                    <span>Payment & Bill Summary</span>
                  </h3>
                  <div className="space-y-2 text-xs">
                    <div>
                      <span className="text-slate-400">Payment Method:</span>
                      <p className="font-bold text-slate-100">{activeOrderModal.paymentMethodTitle}</p>
                    </div>
                    <div>
                      <span className="text-slate-400">Payment Status:</span>
                      <span className={`inline-block px-2 py-0.5 rounded text-[11px] font-bold ${
                        activeOrderModal.isCOD
                          ? 'bg-amber-500/20 text-amber-300'
                          : 'bg-emerald-500/20 text-emerald-400'
                      }`}>
                        {activeOrderModal.isCOD ? 'Cash on Delivery (COD)' : 'Prepaid (Paid Online / Bank)'}
                      </span>
                    </div>
                    <div>
                      <span className="text-slate-400">Total Order Amount:</span>
                      <p className="font-black text-amber-400 text-base">
                        Rs. {activeOrderModal.totalAmount.toLocaleString()}
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Delivery Address Box */}
              <div className="bg-slate-950 p-4 rounded-2xl border border-slate-800">
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-400 mb-2 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5 text-indigo-400" />
                  <span>Delivery / Shipping Address</span>
                </h3>
                <p className="text-slate-200 text-sm font-medium">
                  {activeOrderModal.shippingAddress.fullAddress}
                </p>
              </div>

              {/* Ordered Products Table */}
              <div>
                <h3 className="text-xs font-bold uppercase tracking-wider text-slate-300 mb-3 flex items-center gap-2">
                  <Package className="w-4 h-4 text-indigo-400" />
                  <span>Ordered Products ({activeOrderModal.items.length} items to issue)</span>
                </h3>

                <div className="bg-slate-950 rounded-2xl border border-slate-800 overflow-hidden">
                  <table className="w-full text-left border-collapse text-xs">
                    <thead>
                      <tr className="bg-slate-900 border-b border-slate-800 text-slate-400 uppercase font-semibold">
                        <th className="py-2.5 px-3">Product Name</th>
                        <th className="py-2.5 px-3">Item Code / SKU</th>
                        <th className="py-2.5 px-3 text-center">Issue Qty</th>
                        <th className="py-2.5 px-3 text-right">Unit Price</th>
                        <th className="py-2.5 px-3 text-right">Total Price</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-slate-800/60">
                      {activeOrderModal.items.map((item, idx) => (
                        <tr key={idx} className="hover:bg-slate-900/50">
                          <td className="py-3 px-3 font-semibold text-slate-100">
                            {item.name}
                          </td>
                          <td className="py-3 px-3 font-mono text-slate-400">
                            {item.sku || '-'}
                          </td>
                          <td className="py-3 px-3 text-center">
                            <span className="inline-block px-2.5 py-1 rounded-lg bg-indigo-500/20 text-indigo-300 font-bold text-sm">
                              {item.quantity}
                            </span>
                          </td>
                          <td className="py-3 px-3 text-right text-slate-300">
                            Rs. {item.price.toLocaleString()}
                          </td>
                          <td className="py-3 px-3 text-right font-bold text-slate-100">
                            Rs. {parseFloat(item.total).toLocaleString()}
                          </td>
                        </tr>
                      ))}
                    </tbody>
                    <tfoot>
                      <tr className="bg-slate-900/60 border-t border-slate-800 font-bold">
                        <td colSpan={4} className="py-3 px-3 text-right text-slate-400">
                          Order Grand Total:
                        </td>
                        <td className="py-3 px-3 text-right text-amber-400 text-sm">
                          Rs. {activeOrderModal.totalAmount.toLocaleString()}
                        </td>
                      </tr>
                    </tfoot>
                  </table>
                </div>
              </div>

              {/* Customer Note if any */}
              {activeOrderModal.customerNote && (
                <div className="p-3.5 bg-amber-500/10 border border-amber-500/20 rounded-2xl text-xs text-amber-200">
                  <span className="font-bold text-amber-300 block mb-1">Customer Special Note:</span>
                  <p>{activeOrderModal.customerNote}</p>
                </div>
              )}
            </div>

            {/* Modal Footer Actions */}
            <div className="p-4 sm:p-5 bg-slate-850 border-t border-slate-800 flex items-center justify-between">
              <button
                onClick={() => setActiveOrderModal(null)}
                className="px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
              >
                Close
              </button>

              <div className="flex items-center gap-2">
                <button
                  onClick={handlePrintSlip}
                  className="flex items-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-200 font-semibold text-xs border border-slate-700 transition-colors"
                >
                  <Printer className="w-4 h-4" />
                  <span>Print Slip</span>
                </button>

                {activeOrderModal.status !== 'completed' ? (
                  <button
                    onClick={() => handleUpdateStatus(activeOrderModal.id, 'completed')}
                    disabled={statusUpdatingId === activeOrderModal.id}
                    className="flex items-center gap-2 px-5 py-2.5 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-bold text-xs shadow-lg shadow-emerald-950 transition-all active:scale-95"
                  >
                    {statusUpdatingId === activeOrderModal.id ? (
                      <RefreshCw className="w-3.5 h-3.5 animate-spin" />
                    ) : (
                      <CheckCircle2 className="w-4 h-4" />
                    )}
                    <span>Issue Stock & Mark Completed</span>
                  </button>
                ) : (
                  <button
                    onClick={() => handleUpdateStatus(activeOrderModal.id, 'processing')}
                    disabled={statusUpdatingId === activeOrderModal.id}
                    className="flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-slate-300 font-semibold text-xs transition-colors"
                  >
                    <span>Re-open Order (To Processing)</span>
                  </button>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
