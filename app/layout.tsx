import type { Metadata } from "next";
import "./globals.css";
import "./home.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata: Metadata = {
  title: {
    template: "%s | Abu Ayyash",
    default: "Abu Ayyash"
  },
  description: "Platform belajar online bagi peserta didik Ansharussunnah.",
};

export default function RootLayout({ children, }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
