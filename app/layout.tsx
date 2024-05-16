import { Inter } from "next/font/google";
import "./globals.css";
import Navigation from "./components/Layout/Navigation";
import Footer from "./components/Layout/Footer";
import { Providers } from "./lib/providers";
import { Analytics } from "@vercel/analytics/react";
import MobileNav from "./components/Layout/MobileNav";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <Providers>
          <MobileNav />
          <Navigation />
          <main>{children}</main>
          <Analytics />
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
