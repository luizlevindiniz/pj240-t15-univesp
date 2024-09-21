"use client";
import Link from "next/link";
import { useEffect, useState } from "react";

export default function NotFound() {
  const [currentPage, setCurrentPage] = useState("");

  useEffect(() => {
    setCurrentPage(window.location.pathname);
  }, []);

  return (
    <section className="w-full mt-[30vh] flex flex-col items-center justify-center gap-8 ">
      <h2 className="text-4xl font-bold">404</h2>
      <p>
        Não foi possível localizar a página <strong>{currentPage}</strong>
      </p>
      <Link href="/" className="py-2 px-3 bg-[#fd4659] rounded-lg text-white">
        Voltar ao início
      </Link>
    </section>
  );
}
