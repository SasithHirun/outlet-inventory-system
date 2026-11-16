import { InventoryOrder } from './order';

export interface CustomerProfile {
  id: string;
  name: string;
  phone: string;
  email: string;
  city: string;
  fullAddress: string;
  totalOrders: number;
  totalSpent: number;
  averageOrderValue: number;
  firstOrderDate: string;
  lastOrderDate: string;
  isRepeatCustomer: boolean;
  isVIP: boolean;
  orders: InventoryOrder[];
}
