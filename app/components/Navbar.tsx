"use client";
import Link from "next/link";
import { IoSearchOutline } from "react-icons/io5";
import { CgMenuRight } from "react-icons/cg";
import { FaBook } from "react-icons/fa6";

import { useState } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  function menuToggleHandler() {
    setMenuOpen(!menuOpen);
  }

  return (
    <>
      <header className="header-nav">
        <nav className="px-4 py-4 grid grid-cols-2 jutify-between items-center max-w-screen-lg mx-auto">
          <div>
            <Link className="text-xl" href="/"><FaBook /></Link>
          </div>

          <div className="md:flex justify-end items-center gap-3 hidden">
            <Link className="bg-gray-0 hover:bg-gray-100 hover:border-gray-300 border-transparent border-[1px] rounded py-1 px-2 transition-all" href="/search"><IoSearchOutline /></Link>
            <Link className="bg-gray-0 hover:bg-gray-100 hover:border-gray-300 border-transparent border-[1px] rounded py-1 px-2 transition-all" href="/artikel">Artikel</Link>
            <Link className="bg-gray-0 hover:bg-gray-100 hover:border-gray-300 border-transparent border-[1px] rounded py-1 px-2 transition-all" href="/imtihan">Imtihan</Link>
            <Link className="bg-gray-0 hover:bg-gray-100 hover:border-gray-300 border-transparent border-[1px] rounded py-1 px-2 transition-all" href="/tentang">Tentang</Link>
          </div>

          <div className="md:hidden flex justify-end items-center">
            <button onClick={menuToggleHandler}><CgMenuRight /></button>
          </div>
        </nav>
      </header>
      { menuOpen && 
      <div className="w-fit mt-2 ps-3 pe-2 py-3 absolute z-[10] right-2 flex flex-col justify-center items-end text-right gap-1 md:hidden rounded border-[1px] border-[#b5b5b5]">
        <Link className="bg-gray-0 hover:bg-gray-100 hover:border-gray-300 border-transparent border-[1px] rounded px-2 transition-all inline" href="/search"><IoSearchOutline className="inline" /></Link>
        <Link className="bg-gray-0 hover:bg-gray-100 hover:border-gray-300 border-transparent border-[1px] rounded px-2 transition-all inline" href="/artikel">Artikel</Link>
        <Link className="bg-gray-0 hover:bg-gray-100 hover:border-gray-300 border-transparent border-[1px] rounded px-2 transition-all inline" href="/imtihan">Imtihan</Link>
        <Link className="bg-gray-0 hover:bg-gray-100 hover:border-gray-300 border-transparent border-[1px] rounded px-2 transition-all inline" href="/tentang">Tentang</Link>
      </div> }
    </>
  );
}
