import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Navigation";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Tutorial Web - Cursor, GitHub y Vercel",
  description: "Aprende a usar Cursor IDE, GitHub y Vercel paso a paso",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navigation />
        {children}
      </body>
    </html>
  );
}
