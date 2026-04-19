import type { Metadata } from "next";
import "./globals.css";
import BackgroundMotion from "../components/BackgroundMotion";

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
