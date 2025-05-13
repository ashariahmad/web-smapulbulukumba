import PageBanner from "@/components/page-banner";
import { schoolData } from "@/data/school-data";
import Image from "next/image";

export default function SchoolProfile() {
  return (
    <div>
      <PageBanner title="Profil Sekolah" />

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <Image
            src={schoolData.logo}
            alt={schoolData.name}
            width={300}
            height={300}
            className="mx-auto mb-6"
          />

          <div className="grid md:grid-cols-2 gap-4">
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-2">Informasi Umum</h3>
              <div className="grid gap-4">
                <div>
                  <p className="font-medium">Nama Sekolah:</p>
                  <p>{schoolData.name}</p>
                </div>
                <div>
                  <p className="font-medium">NPSN:</p>
                  <p>{schoolData.npsn}</p>
                </div>
                <div>
                  <p className="font-medium">NSS:</p>
                  <p>{schoolData.nss}</p>
                </div>
                <div>
                  <p className="font-medium">Status:</p>
                  <p>{schoolData.status}</p>
                </div>
                <div>
                  <p className="font-medium">Akreditasi:</p>
                  <p>{schoolData.accreditation}</p>
                </div>
                <div>
                  <p className="font-medium">Alamat:</p>
                  <p>{schoolData.address}</p>
                </div>
                <div>
                  <p className="font-medium">Kecamatan:</p>
                  <p>{schoolData.district}</p>
                </div>
                <div>
                  <p className="font-medium">Kabupaten:</p>
                  <p>{schoolData.regency}</p>
                </div>
                <div>
                  <p className="font-medium">Provinsi:</p>
                  <p>{schoolData.province}</p>
                </div>
                <div>
                  <p className="font-medium">Kode Pos:</p>
                  <p>{schoolData.postalCode}</p>
                </div>
                <div>
                  <p className="font-medium">Email:</p>
                  <p>{schoolData.email}</p>
                </div>
              </div>
            </div>

            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <h3 className="text-xl font-semibold mb-2">Fasilitas</h3>
              <ul className="list-disc pl-5 space-y-1">
                {schoolData.facilities.map((facility, index) => (
                  <li key={index}>{facility}</li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
