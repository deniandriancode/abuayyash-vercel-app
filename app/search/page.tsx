import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Pencarian",
};

export default function Pencarian() {
  return (
      <main className="mx-auto md:container min-h-screen">
        <section className="px-2 md:max-w-[867px] my-16 md:my-24 md:mx-auto">
          <h1 className=" font-bold text-5xl md:text-6xl">Pencarian</h1>
        </section>
      </main>
  );
}

