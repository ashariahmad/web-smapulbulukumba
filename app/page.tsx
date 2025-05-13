import Image from "next/image";
import { PrincipalGreeting } from "@/components/principal-greeting";
import { schoolData } from "@/data/school-data";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      {/* School Banner */}
      <div className="relative w-full h-[400px]">
        <Image
          src={schoolData.bannerImage || "/placeholder.svg"}
          alt="SMAN 10 Bulukumba"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <div className="text-center text-white p-4">
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              {schoolData.name}
            </h1>
            <p className="text-xl md:text-2xl">{schoolData.slogan}</p>
          </div>
        </div>
      </div>

      {/* Principal's Greeting */}
      <div className="container mx-auto py-12 px-4">
        <PrincipalGreeting
          name={schoolData.principal.name}
          messages={schoolData.principal.messages}
          image={schoolData.principal.image}
        />
      </div>
    </div>
  );
}
