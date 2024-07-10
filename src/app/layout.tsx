import type { Metadata } from "next";
import { inter } from '@/config/fonts';
import { ThemeProvider } from "@/components/ui/theme-provider";
import {NextUIProvider} from "@nextui-org/react";

import "./globals.css";
import { Providers } from "@/components";

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
      <body className={inter.className}>
        <NextUIProvider>
          <Providers>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
            {children}
            </ThemeProvider>
          </Providers>
        </NextUIProvider>
      </body>
    </html>
  );
}
