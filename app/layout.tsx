import Footer from "@/components/common/footer";
import { Header } from "@/components/common/header";
import { Toaster } from "@/components/ui/toaster";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./styles/globals.css";
import { MSWComponent } from "@/components/common/MSWComponent";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Good public validator",
    default: "Good public validator",
  },
  description: "",
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
    <html lang="en">
      <body className={`${inter.className}`}>
        <Header />
        <MSWComponent />
        {children}

        <Toaster />
        <Footer />
      </body>
    </html>
  );
}
