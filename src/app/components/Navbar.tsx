import Link from "next/link";

export default function Navbar() {
  return (
    <header className="sticky top-0 z-50">
      <nav className="bg-red-500 text-white p-4">
        <div className="container mx-auto flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold">
            CondoTrucks
          </Link>
          <ul className="flex space-x-4">
            <li>
              <Link href="/" className="hover:underline">
                Trucks
              </Link>
            </li>
            <li>
              <Link href="/about" className="hover:underline">
                Sobre nós
              </Link>
            </li>
            <li>
              <Link href="/contact" className="hover:underline">
                Contato
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </header>
  );
}
