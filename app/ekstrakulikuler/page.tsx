import PageBanner from "@/components/page-banner";
import { extracurricularData } from "@/data/extracurricular-data";
import ExtracurricularCard from "@/components/extracurricular-card";

export default function Extracurricular() {
  return (
    <div>
      <PageBanner title="Ekstrakulikuler" />

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold mb-6 text-center">
            Kegiatan Ekstrakulikuler
          </h2>
          <p className="text-center mb-10 max-w-3xl mx-auto">
            SMAN 10 Bulukumba menyediakan berbagai kegiatan ekstrakulikuler
            untuk mengembangkan bakat dan minat siswa di luar kegiatan akademik.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {extracurricularData.map((item, index) => (
              <ExtracurricularCard
                key={index}
                name={item.name}
                description={item.description}
                image={item.image}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
