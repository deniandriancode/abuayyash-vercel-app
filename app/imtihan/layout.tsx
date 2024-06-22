import type { Metadata } from "next";
import "../globals.css";
import "./imtihan_styles.css";

import Navbar from '../components/Navbar';
import Footer from "../components/Footer";

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
      <body>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

