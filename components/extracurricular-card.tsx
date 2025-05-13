import Image from "next/image";
import Link from "next/link";

interface ExtracurricularCardProps {
  name: string;
  description: string;
  image: string;
}

export default function ExtracurricularCard({
  name,
  description,
  image,
}: ExtracurricularCardProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:scale-[1.02]">
      <div className="relative aspect-square">
        <Image
          src={image || "/placeholder.svg"}
          alt={name}
          fill
          className="object-contain"
        />
      </div>

      <div className="p-5">
        <h3 className="text-xl font-bold mb-2 text-center">{name}</h3>
        <p className="text-gray-600 mb-4 line-clamp-3 text-center">
          {description}
        </p>
      </div>
    </div>
  );
}
