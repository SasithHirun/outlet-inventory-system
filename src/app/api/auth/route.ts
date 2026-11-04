import { NextRequest, NextResponse } from 'next/server';

export async function POST(request: NextRequest) {
  try {
    const { pin } = await request.json();
    const systemPin = (process.env.DELIVERY_PIN || '').replace(/[^0-9a-zA-Z]/g, '');
    const userPin = String(pin || '').replace(/[^0-9a-zA-Z]/g, '');

    if (!systemPin) {
      return NextResponse.json(
        { success: false, message: 'Staff PIN is not configured on the server.' },
        { status: 500 }
      );
    }

    if (userPin && userPin === systemPin) {
      return NextResponse.json({ success: true, token: 'auth-session-valid' });
    }
    return NextResponse.json({ success: false, message: 'Invalid Staff PIN. Please try again.' }, { status: 401 });
  } catch (error) {
    return NextResponse.json({ success: false, message: 'Server error' }, { status: 500 });
  }
}
