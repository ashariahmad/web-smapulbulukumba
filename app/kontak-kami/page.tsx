import PageBanner from "@/components/page-banner";
import { schoolData } from "@/data/school-data";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function Contact() {
  return (
    <div>
      <PageBanner title="Kontak Kami" />

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-5xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
            <div>
              <h2 className="text-2xl font-bold mb-6">Informasi Kontak</h2>

              <div className="space-y-6">
                <div className="flex items-start">
                  <MapPin className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Alamat</h3>
                    <p>{schoolData.address}</p>
                    <p>
                      {schoolData.district}, {schoolData.regency}
                    </p>
                    <p>
                      {schoolData.province}, {schoolData.postalCode}
                    </p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Mail className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Email</h3>
                    <p>{schoolData.email}</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <Clock className="h-6 w-6 text-green-600 mr-3 mt-0.5" />
                  <div>
                    <h3 className="font-semibold text-lg">Jam Operasional</h3>
                    <p>{schoolData.operationalTime}</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h2 className="text-2xl font-bold mb-6">Kirim Pesan</h2>

              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block mb-1 font-medium">
                    Nama Lengkap
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block mb-1 font-medium">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="subject" className="block mb-1 font-medium">
                    Subjek
                  </label>
                  <input
                    type="text"
                    id="subject"
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block mb-1 font-medium">
                    Pesan
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="px-6 py-2 bg-green-600 text-white font-medium rounded-md hover:bg-green-700 transition-colors"
                >
                  Kirim Pesan
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
