import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Imtihan",
};

export default function Page() {
  return (
      <main className="mx-auto md:container min-h-screen">
        <section className="px-4 md:max-w-[867px] my-16 md:my-24 md:mx-auto">
          <h1 className="font-bold text-5xl md:text-6xl">Imtihan</h1>
          <p className="my-4">Uji kemampuan belajar dengan latihan soal interaktif.</p>
          <p className="font-italic text-gray-700">Fitur ini sedang dalam tahap pembangunan.</p>
        </section>
      </main>
  );
}

