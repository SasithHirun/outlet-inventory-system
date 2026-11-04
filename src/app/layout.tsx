import type { Metadata, Viewport } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Outlet Inventory Issue System - WooCommerce",
  description: "Enterprise order tracking and inventory issue management system",
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#0f172a",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-full bg-slate-950 text-slate-100">
      <body className="min-h-full flex flex-col antialiased font-sans bg-slate-950 text-slate-100">
        {children}
      </body>
    </html>
  );
}
