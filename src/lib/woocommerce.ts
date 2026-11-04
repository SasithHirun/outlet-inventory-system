import { InventoryOrder } from '../types/order';

const WP_URL = (process.env.WORDPRESS_URL || '').replace(/[\r\n]/g, '').replace(/\/$/, '').trim();
const CONSUMER_KEY = (process.env.WC_CONSUMER_KEY || '').replace(/[\r\n]/g, '').trim();
const CONSUMER_SECRET = (process.env.WC_CONSUMER_SECRET || '').replace(/[\r\n]/g, '').trim();

export const isWooCommerceConfigured = (): boolean => {
  return Boolean(
    WP_URL &&
    CONSUMER_KEY &&
    CONSUMER_SECRET &&
    !WP_URL.includes('your-store.com')
  );
};

// Sri Lankan mock inventory orders with tracking numbers
const MOCK_ORDERS: InventoryOrder[] = [
  {
    id: 1045,
    orderNumber: "1045",
    status: "processing",
    createdAt: "2026-11-03T08:30:00Z",
    dateOnly: "2026-11-03",
    monthYear: "2026-11",
    customerName: "Kamal Perera",
    phone: "0771234567",
    email: "kamal.perera@gmail.com",
    trackingNumber: "KMB-984210",
    billingAddress: {
      street: "No. 45, Temple Road",
      city: "Colombo 03",
      state: "Western Province",
      postcode: "00300",
      fullAddress: "No. 45, Temple Road, Colombo 03, Western Province, 00300"
    },
    shippingAddress: {
      street: "No. 45, Temple Road",
      city: "Colombo 03",
      state: "Western Province",
      postcode: "00300",
      fullAddress: "No. 45, Temple Road, Colombo 03, Western Province, 00300"
    },
    paymentMethod: "cod",
    paymentMethodTitle: "Cash on Delivery",
    isCOD: true,
    totalAmount: 4850,
    currency: "Rs.",
    items: [
      { id: 101, name: "Premium Oud Perfume 50ml", sku: "OUD-PERF-50", quantity: 1, price: 3500, total: "3500" },
      { id: 102, name: "Organic Scented Candle - Jasmine", sku: "CNDL-JAS-01", quantity: 1, price: 1350, total: "1350" }
    ],
    customerNote: "Please issue fresh stock from shelf B-12."
  },
  {
    id: 1046,
    orderNumber: "1046",
    status: "processing",
    createdAt: "2026-11-02T14:15:00Z",
    dateOnly: "2026-11-02",
    monthYear: "2026-11",
    customerName: "Nimali Silva",
    phone: "0719876543",
    email: "nimali.silva@yahoo.com",
    trackingNumber: "",
    billingAddress: {
      street: "12/A, Galle Road",
      city: "Dehiwala",
      state: "Western Province",
      postcode: "10350",
      fullAddress: "12/A, Galle Road, Dehiwala, Western Province, 10350"
    },
    shippingAddress: {
      street: "12/A, Galle Road",
      city: "Dehiwala",
      state: "Western Province",
      postcode: "10350",
      fullAddress: "12/A, Galle Road, Dehiwala, Western Province, 10350"
    },
    paymentMethod: "bacs",
    paymentMethodTitle: "Direct Bank Transfer (Paid)",
    isCOD: false,
    totalAmount: 14500,
    currency: "Rs.",
    items: [
      { id: 103, name: "Luxury Oud Wood Chips 100g", sku: "OUD-CHIP-100", quantity: 2, price: 6900, total: "13800" },
      { id: 104, name: "Charcoal Burner Premium", sku: "ACC-BURN-01", quantity: 1, price: 700, total: "700" }
    ],
    customerNote: "Customer requested gift packing before dispatch."
  },
  {
    id: 1047,
    orderNumber: "1047",
    status: "completed",
    createdAt: "2026-10-28T11:45:00Z",
    dateOnly: "2026-10-28",
    monthYear: "2026-10",
    customerName: "Dilshan Fernando",
    phone: "0765554321",
    email: "dilshan.f@hotmail.com",
    trackingNumber: "PRN-54123",
    billingAddress: {
      street: "88, Kandy Road",
      city: "Kiribathgoda",
      state: "Western Province",
      postcode: "11600",
      fullAddress: "88, Kandy Road, Kiribathgoda, Western Province, 11600"
    },
    shippingAddress: {
      street: "88, Kandy Road",
      city: "Kiribathgoda",
      state: "Western Province",
      postcode: "11600",
      fullAddress: "88, Kandy Road, Kiribathgoda, Western Province, 11600"
    },
    paymentMethod: "cod",
    paymentMethodTitle: "Cash on Delivery",
    isCOD: true,
    totalAmount: 3200,
    currency: "Rs.",
    items: [
      { id: 105, name: "Pure Oud Incense Cones (Pack of 20)", sku: "INC-CONE-20", quantity: 2, price: 1600, total: "3200" }
    ],
    customerNote: "Inventory already issued and dispatched."
  },
  {
    id: 1048,
    orderNumber: "1048",
    status: "on-hold",
    createdAt: "2026-10-20T16:20:00Z",
    dateOnly: "2026-10-20",
    monthYear: "2026-10",
    customerName: "Anura Bandara",
    phone: "0751122334",
    email: "anura.b@gmail.com",
    trackingNumber: "",
    billingAddress: {
      street: "54, Lake Drive",
      city: "Kandy",
      state: "Central Province",
      postcode: "20000",
      fullAddress: "54, Lake Drive, Kandy, Central Province, 20000"
    },
    shippingAddress: {
      street: "54, Lake Drive",
      city: "Kandy",
      state: "Central Province",
      postcode: "20000",
      fullAddress: "54, Lake Drive, Kandy, Central Province, 20000"
    },
    paymentMethod: "cheque",
    paymentMethodTitle: "Bank Deposit / Pending Verification",
    isCOD: false,
    totalAmount: 9500,
    currency: "Rs.",
    items: [
      { id: 106, name: "Oud Essential Oil 10ml", sku: "OIL-OUD-10", quantity: 1, price: 9500, total: "9500" }
    ],
    customerNote: "Awaiting payment verification before issuing stock."
  }
];

let demoOrdersState = [...MOCK_ORDERS];

export async function fetchWooCommerceOrders(status?: string): Promise<{
  orders: InventoryOrder[];
  isDemo: boolean;
}> {
  if (!isWooCommerceConfigured()) {
    let filtered = [...demoOrdersState];
    if (status && status !== 'all') {
      filtered = filtered.filter(o => o.status === status);
    }
    return { orders: filtered, isDemo: true };
  }

  const authHeader = 'Basic ' + Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
  let endpoint = `${WP_URL}/wp-json/wc/v3/orders?per_page=100&orderby=date&order=desc`;
  if (status && status !== 'all') {
    endpoint += `&status=${status}`;
  }

  try {
    const res = await fetch(endpoint, {
      headers: {
        Authorization: authHeader,
        'Content-Type': 'application/json',
      },
      cache: 'no-store'
    });

    if (!res.ok) {
      const errorText = await res.text();
      console.error(`WooCommerce API Error (${res.status}):`, errorText);
      throw new Error(`Failed to fetch orders from WooCommerce: ${res.statusText}`);
    }

    const rawOrders = await res.json();

    const formattedOrders: InventoryOrder[] = rawOrders.map((o: any) => {
      const isCodPayment = 
        (o.payment_method || '').toLowerCase().includes('cod') ||
        (o.payment_method_title || '').toLowerCase().includes('cash on delivery') ||
        (o.payment_method_title || '').toLowerCase().includes('cod');

      const billing = o.billing || {};
      const shipping = o.shipping || {};

      const billingParts = [
        billing.address_1,
        billing.address_2,
        billing.city,
        billing.state,
        billing.postcode
      ].filter(Boolean);

      const shippingParts = [
        shipping.address_1,
        shipping.address_2,
        shipping.city,
        shipping.state,
        shipping.postcode
      ].filter(Boolean);

      const customerFullName = `${billing.first_name || ''} ${billing.last_name || ''}`.trim() ||
        `${shipping.first_name || ''} ${shipping.last_name || ''}`.trim() ||
        'Valued Customer';

      const dateStr = o.date_created || o.date_created_gmt || new Date().toISOString();
      const d = new Date(dateStr);
      const dateOnly = !isNaN(d.getTime()) ? d.toISOString().split('T')[0] : '';
      const monthYear = dateOnly ? dateOnly.substring(0, 7) : '';

      // Extract tracking number from WooCommerce order meta_data
      let trackingNumber = '';
      if (Array.isArray(o.meta_data)) {
        const trackMeta = o.meta_data.find((m: any) => 
          m.key === '_tracking_number' || 
          m.key === 'tracking_number' || 
          m.key === '_wc_shipment_tracking_number' ||
          m.key === 'waybill_number'
        );
        if (trackMeta && trackMeta.value) {
          trackingNumber = String(trackMeta.value).trim();
        }
      }

      return {
        id: o.id,
        orderNumber: String(o.number || o.id),
        status: o.status,
        createdAt: dateStr,
        dateOnly,
        monthYear,
        customerName: customerFullName,
        phone: billing.phone || shipping.phone || '',
        email: billing.email || '',
        trackingNumber: trackingNumber || '',
        billingAddress: {
          street: [billing.address_1, billing.address_2].filter(Boolean).join(', '),
          city: billing.city || '',
          state: billing.state || '',
          postcode: billing.postcode || '',
          fullAddress: billingParts.join(', ') || 'Address not provided'
        },
        shippingAddress: {
          street: [shipping.address_1, shipping.address_2].filter(Boolean).join(', '),
          city: shipping.city || '',
          state: shipping.state || '',
          postcode: shipping.postcode || '',
          fullAddress: shippingParts.length > 0 ? shippingParts.join(', ') : (billingParts.join(', ') || 'Same as billing')
        },
        paymentMethod: o.payment_method || '',
        paymentMethodTitle: o.payment_method_title || (isCodPayment ? 'Cash on Delivery' : 'Prepaid'),
        isCOD: isCodPayment,
        totalAmount: parseFloat(o.total || '0'),
        currency: o.currency_symbol || 'Rs.',
        items: (o.line_items || []).map((item: any) => ({
          id: item.id,
          name: item.name,
          sku: item.sku || '-',
          quantity: item.quantity,
          price: parseFloat(item.price || '0'),
          total: item.total
        })),
        customerNote: o.customer_note || ''
      };
    });

    return { orders: formattedOrders, isDemo: false };
  } catch (error) {
    console.error('WooCommerce fetch error:', error);
    throw error;
  }
}

export async function updateWooCommerceOrder(
  orderId: number, 
  data: { status?: string; trackingNumber?: string }
): Promise<boolean> {
  if (!isWooCommerceConfigured()) {
    demoOrdersState = demoOrdersState.map(o => {
      if (o.id === orderId) {
        return {
          ...o,
          status: data.status !== undefined ? data.status : o.status,
          trackingNumber: data.trackingNumber !== undefined ? data.trackingNumber : o.trackingNumber
        };
      }
      return o;
    });
    return true;
  }

  const authHeader = 'Basic ' + Buffer.from(`${CONSUMER_KEY}:${CONSUMER_SECRET}`).toString('base64');
  const endpoint = `${WP_URL}/wp-json/wc/v3/orders/${orderId}`;

  const payload: any = {};
  if (data.status) {
    payload.status = data.status;
  }
  if (data.trackingNumber !== undefined) {
    payload.meta_data = [
      { key: '_tracking_number', value: data.trackingNumber },
      { key: 'tracking_number', value: data.trackingNumber }
    ];
  }

  const res = await fetch(endpoint, {
    method: 'PUT',
    headers: {
      Authorization: authHeader,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(payload)
  });

  if (!res.ok) {
    const errorText = await res.text();
    console.error('Failed to update order on WooCommerce:', errorText);
    throw new Error('Failed to update order on WooCommerce');
  }

  return true;
}
