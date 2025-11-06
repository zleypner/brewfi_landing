import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "BrewFi - Fideliza Clientes",
  description: "Únete a la revolución del café. Sistema de pagos en USDT y recompensas para cafeterías modernas.",
  keywords: ["cafetería", "USDT", "pagos digitales", "fidelización", "POS moderno", "propinas digitales", "programas de lealtad"],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
      <body className={inter.className}>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
