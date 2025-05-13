"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { schoolData } from "@/data/school-data";

const navLinks = [
  { name: "Beranda", href: "/" },
  { name: "Profil Sekolah", href: "/profil-sekolah" },
  { name: "Visi & Misi", href: "/visi-misi" },
  { name: "Sejarah Sekolah", href: "/sejarah-sekolah" },
  { name: "Ekstrakulikuler", href: "/ekstrakulikuler" },
  { name: "Kontak Kami", href: "/kontak-kami" },
];

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-sm sticky top-0 z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center space-x-3">
            <div className="relative w-10 h-10">
              <Image
                src={schoolData.logo || "/placeholder.svg"}
                alt={schoolData.name}
                fill
                className="object-contain"
              />
            </div>
            <div className="hidden md:block">
              <h1 className="font-bold text-lg text-green-800">
                {schoolData.name}
              </h1>
              <p className="text-xs text-gray-600">{schoolData.slogan}</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-green-600 font-medium transition-colors"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-gray-700"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation */}
      {isMenuOpen && (
        <nav className="md:hidden bg-white border-t py-3 px-4">
          <ul className="space-y-3">
            {navLinks.map((link) => (
              <li key={link.name}>
                <Link
                  href={link.href}
                  className="block text-gray-700 hover:text-green-600 font-medium transition-colors"
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      )}
    </header>
  );
}
