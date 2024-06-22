import { FaArrowRight } from "react-icons/fa6";

import "./home.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Link from "next/link";


export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto md:container">
        <section className="hero grid justify-center md:justify-start content-center px-2 md:max-w-[867px] md:mx-auto">
          <div className="md:ps-10">
            <h1 className="hero-title text-5xl md:text-6xl font-black mb-2">Abu Ayyash</h1>
            <p className="opacity-[.74]">Ajarkanlah ilmu secara gratis, sebagaimana engkau mendapatkannya gratis.</p>
            <Link className="mulai-belajar px-6 py-1 rounded mt-4 inline-flex justify-center items-center gap-2" href="/imtihan">Mulai belajar <FaArrowRight className="inline" /></Link>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
