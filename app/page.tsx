import "./home.css";

import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <>
      <Navbar />
      <main className="mx-auto md:container">
        <section className="hero grid justify-center md:justify-start content-center px-2 md:max-w-[867px] md:px- md:mx-auto">
          <div className="md:ps-10">
            <h1 className="hero-title text-5xl md:text-6xl font-black mb-2">Abu Ayyash</h1>
            <p className="opacity-[.74]">Ideas are cheap. Execution is expensive.</p>
          </div>
        </section>
      </main>
    </>
  );
}
