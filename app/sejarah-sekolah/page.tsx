import PageBanner from "@/components/page-banner";
import { schoolData } from "@/data/school-data";

export default function SchoolHistory() {
  return (
    <div>
      <PageBanner title="Sejarah Sekolah" />

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl font-bold mb-6">Sejarah SMAN 10 Bulukumba</h2>

          <div className="max-w-none bg-green-50 p-6 rounded-lg border border-green-200">
            {schoolData.history.map((paragraph, index) => (
              <p key={index} className="mb-4 leading-7">
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
