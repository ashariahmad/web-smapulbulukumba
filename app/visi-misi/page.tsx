import PageBanner from "@/components/page-banner";
import { schoolData } from "@/data/school-data";

export default function VisionMission() {
  return (
    <div>
      <PageBanner title="Visi & Misi" />

      <div className="container mx-auto py-12 px-4">
        <div className="max-w-4xl mx-auto">
          <div className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Visi</h2>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <p className="text-lg italic">{schoolData.vision}</p>
            </div>
          </div>

          <div>
            <h2 className="text-2xl font-bold mb-4">Misi</h2>
            <div className="bg-green-50 p-6 rounded-lg border border-green-200">
              <ul className="list-decimal pl-5 space-y-2">
                {schoolData.missions.map((mission, index) => (
                  <li key={index} className="text-base">
                    {mission}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
