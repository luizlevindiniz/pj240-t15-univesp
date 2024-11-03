"use client";
import Link from "next/link";
import { useState } from "react";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 shadow-lg">
      <nav className="bg-red-500 text-white p-4">
        <div className="container mx-auto relative">
          <div className="flex justify-between items-center">
            <Link href="/" className="text-2xl font-bold">
              CondoTrucks
            </Link>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex md:hidden items-center px-3 py-2 rounded text-white hover:text-gray-200"
            >
              <svg
                className={`fill-current h-4 w-4 ${isOpen ? "hidden" : "block"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
              </svg>
              <svg
                className={`fill-current h-4 w-4 ${isOpen ? "block" : "hidden"}`}
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M10 8.586L2.929 1.515 1.515 2.929 8.586 10l-7.071 7.071 1.414 1.414L10 11.414l7.071 7.071 1.414-1.414L11.414 10l7.071-7.071-1.414-1.414L10 8.586z" />
              </svg>
            </button>
            <div className="hidden md:block">
              <ul className="flex space-x-4">
                <li>
                  <Link href="/foodtrucks" className="hover:underline font-medium">
                    Trucks
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:underline font-medium">
                    Sobre nós
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:underline font-medium">
                    Contato
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Mobile menu dropdown */}
          <div className={`${isOpen ? "block" : "hidden"} md:hidden w-full mt-2`}>
            <ul className="flex flex-col space-y-3 text-right">
              <li>
                <Link
                  href="/foodtrucks"
                  className="block hover:underline font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Trucks
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="block hover:underline font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Sobre nós
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="block hover:underline font-medium"
                  onClick={() => setIsOpen(false)}
                >
                  Contato
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
}
