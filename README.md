# Outlet Inventory Issue System - WooCommerce 📦💻

A powerful, laptop-friendly enterprise **Inventory Issue & Order Fulfillment System** built with **Next.js**, **React**, and **Tailwind CSS**, designed specifically for outlet staff to review incoming orders, check product line-items, and issue stock.

---

## 🌟 Key Features

1. **Laptop & Desktop Friendly Full-Width Dashboard:**
   - Wide-screen data table showing Order #, Date, Customer Details, Delivery Location, Product line-items, Payment type, Total Amount, and Status.

2. **🔍 "View Details" Modal (Complete Order Inspection):**
   - Click the **"View Details"** button on any order to view:
     - **Order Number & Exact Date/Time**
     - **Customer Name**
     - **Contact Number** (with direct click-to-call)
     - **Email Address** (with direct click-to-email)
     - **Full Shipping / Delivery Address & Billing Address**
     - **Payment Method** (Cash on Delivery vs Prepaid card/bank)
     - **Full Ordered Products Breakdown Table**:
       - Product Name
       - SKU / Item Code
       - Quantity to Issue (boldly highlighted for warehouse pickers)
       - Unit Price & Line Total
     - **Customer Special Notes / Delivery Instructions**
     - **Quick Actions:** "Issue Stock & Mark Completed" or "Print Packing Slip".

3. **📅 Comprehensive Filters & Instant Search:**
   - **Search Box:** Instant live search by Customer Name, Order Number, Phone, or Delivery City.
   - **Date Filter:** Pick any specific date (YYYY-MM-DD).
   - **Month Filter:** Select any month from the dropdown (e.g. November 2026, October 2026, etc.).
   - **Status Tabs:** Filter by "All Orders", "Ready to Issue (Processing)", "Issued (Completed)", "On Hold", or "Cancelled".
   - **Reset Filters:** One-click clear button to restore full view.

4. **⚡ One-Click Stock Issue:**
   - Quick **"Issue Stock"** button on every row or inside the detail modal that automatically updates the WooCommerce order status to `completed` in real-time.

5. **🖨️ Printable Packing / Issue Slip:**
   - Print a clean receipt/packing slip directly from the browser to hand over with the issued products.

6. **🔒 Staff Access PIN Protection:**
   - Simple, fast numeric PIN login to keep unauthorized persons out. The PIN is configured with the `DELIVERY_PIN` environment variable.

---

## 🚀 How to Run the System

### Option 1: One-Click Startup (Easiest)
Simply double-click the file:
👉 `delivery-boy-app/start_inventory_system.bat`

### Option 2: Terminal / PowerShell
```powershell
cd C:\Users\HP\Documents\antigravity\sharp-galileo\delivery-boy-app
npm run dev
```

Then open in your browser on your laptop:
👉 **`http://localhost:3000`**
- **Staff Access PIN:** the value of the `DELIVERY_PIN` environment variable (set it in `.env.local` for local development)
