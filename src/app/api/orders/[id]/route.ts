import { NextRequest, NextResponse } from 'next/server';
import { updateWooCommerceOrder } from '@/lib/woocommerce';

export async function PATCH(
  request: NextRequest,
  { params }: { params: Promise<{ id: string }> }
) {
  try {
    const { id } = await params;
    const orderId = parseInt(id, 10);
    if (isNaN(orderId)) {
      return NextResponse.json({ error: 'Invalid order ID' }, { status: 400 });
    }

    const body = await request.json();
    const { status, trackingNumber } = body;

    if (status === undefined && trackingNumber === undefined) {
      return NextResponse.json({ error: 'Status or Tracking Number is required' }, { status: 400 });
    }

    await updateWooCommerceOrder(orderId, { status, trackingNumber });
    return NextResponse.json({ 
      success: true, 
      message: `Order #${orderId} updated successfully` 
    });
  } catch (error: any) {
    return NextResponse.json(
      { error: error?.message || 'Failed to update order' },
      { status: 500 }
    );
  }
}
