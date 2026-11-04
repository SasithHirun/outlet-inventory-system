export interface OrderItem {
  id: number;
  name: string;
  sku?: string;
  quantity: number;
  total: string;
  price: number;
}

export interface InventoryOrder {
  id: number;
  orderNumber: string;
  status: string;
  createdAt: string; // ISO string
  dateOnly: string;  // YYYY-MM-DD
  monthYear: string; // YYYY-MM
  customerName: string;
  phone: string;
  email: string;
  trackingNumber: string; // Courier / Waybill tracking number
  billingAddress: {
    street: string;
    city: string;
    state: string;
    postcode: string;
    fullAddress: string;
  };
  shippingAddress: {
    street: string;
    city: string;
    state: string;
    postcode: string;
    fullAddress: string;
  };
  paymentMethod: string;
  paymentMethodTitle: string;
  isCOD: boolean;
  totalAmount: number;
  currency: string;
  items: OrderItem[];
  customerNote: string;
}

export type OrderFilterStatus = 'all' | 'processing' | 'completed' | 'on-hold' | 'cancelled';
