import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../globals.css";

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    template: "%s | Abu Ayyash",
    default: "Abu Ayyash"
  },
  description: "Platform belajar online bagi peserta didik Ansharussunnah.",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

