import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import BackgroundMotion from "../components/BackgroundMotion";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
   title: {
    default: "José Peña",
    template: "%s | José Peña",
  },
  description: "Ingeniero en Sistemas · Desarrollo Web · Software",
  icons: {
    icon: "/favicon.ico",
  },
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es">
        <body className="relative bg-black text-white">
      <BackgroundMotion />
      {children}
    </body>
    </html>
  );
}
