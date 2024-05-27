import type { Metadata } from "next";
import { inter } from '@/config/fonts';

import "./globals.css";

export const metadata: Metadata = {
  title: {
    template: "%s - Setting | Shop",
    default: "Inicio - Setting | Shop",
  },
  description: "Una tienda virtual de productos",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
