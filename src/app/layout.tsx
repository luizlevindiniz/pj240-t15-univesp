import type { Metadata, Viewport } from "next";
import "./globals.css";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";

export const metadata: Metadata = {
  title: "CondoTrucks",
  description: "FoodTrucks no seu condomínio",
};

export const viewport: Viewport = {
  initialScale: 1,
  width: "device-width",
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>
        <div id="app-outlet">
          <Navbar />
          {children}
          <Footer />
        </div>
      </body>
    </html>
  );
}
