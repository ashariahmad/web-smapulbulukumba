import Image from "next/image";

interface PrincipalGreetingProps {
  name: string;
  messages: string[];
  image: string;
}

export function PrincipalGreeting({
  name,
  messages,
  image,
}: PrincipalGreetingProps) {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden">
      <div className="p-6 md:p-8">
        <h2 className="text-2xl md:text-3xl font-bold text-center mb-8">
          Sambutan Kepala Sekolah
        </h2>

        <div>
          <Image
            src={image || "/placeholder.svg"}
            alt={name}
            width={300}
            height={300}
            className="object-contain shadow-md mb-8 mx-auto rounded-2xl"
          />

          <div className="md:w-2/3 mx-auto">
            <div className="prose max-w-none">
              {messages.map((message, index) => (
                <p className="text-lg mb-6 text-justify" key={index}>
                  {message}
                </p>
              ))}

              <div className="text-right">
                <p className="font-semibold text-lg">{name}</p>
                <p>Kepala SMAN 10 Bulukumba</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
