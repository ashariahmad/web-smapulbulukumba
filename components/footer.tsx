import Link from "next/link";
import Image from "next/image";
import { schoolData } from "@/data/school-data";
import { MapPin, Phone, Mail } from "lucide-react";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-green-800 text-white">
      <div className="container mx-auto px-4 py-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center space-x-3 mb-4">
              <div className="relative w-12 h-12 p-1">
                <Image
                  src={schoolData.logo || "/placeholder.svg"}
                  alt={schoolData.name}
                  fill
                  className="object-contain"
                />
              </div>
              <div>
                <h3 className="font-bold text-lg">{schoolData.name}</h3>
                <p className="text-xs text-green-100">{schoolData.slogan}</p>
              </div>
            </div>
            <p className="text-green-100 mb-4">{schoolData.slogan}</p>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Tautan</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Beranda
                </Link>
              </li>
              <li>
                <Link
                  href="/profil-sekolah"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Profil Sekolah
                </Link>
              </li>
              <li>
                <Link
                  href="/visi-misi"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Visi & Misi
                </Link>
              </li>
              <li>
                <Link
                  href="/sejarah-sekolah"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Sejarah Sekolah
                </Link>
              </li>
              <li>
                <Link
                  href="/ekstrakulikuler"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Ekstrakulikuler
                </Link>
              </li>
              <li>
                <Link
                  href="/kontak-kami"
                  className="text-green-100 hover:text-white transition-colors"
                >
                  Kontak Kami
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-lg mb-4">Kontak</h3>
            <ul className="space-y-3">
              <li className="flex">
                <MapPin className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                <span className="text-green-100">
                  {schoolData.address}, {schoolData.district},{" "}
                  {schoolData.regency}
                </span>
              </li>
              <li className="flex">
                <Mail className="h-5 w-5 text-green-300 mr-2 flex-shrink-0" />
                <span className="text-green-100">{schoolData.email}</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-green-700 mt-8 pt-6 text-center text-green-200">
          <p>
            &copy; {currentYear} {schoolData.name}. Hak Cipta Dilindungi.
          </p>
        </div>
      </div>
    </footer>
  );
}
