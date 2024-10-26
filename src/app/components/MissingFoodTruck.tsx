"use client";
import Link from "next/link";

export default function MissingFoodTruck({ message = "Page not found" }) {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-800 mb-4">Opa! Ocorreu um erro.</h1>
        <p className="text-2xl text-gray-600 mb-8">{message}</p>
        <Link
          href="/"
          className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition duration-300"
        >
          Voltar ao início
        </Link>
      </div>
    </div>
  );
}
