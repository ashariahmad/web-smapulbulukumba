export default function PageBanner({ title }: { title: string }) {
  return (
    <div className="bg-green-700 text-white py-12">
      <div className="container mx-auto px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-bold">{title}</h1>
      </div>
    </div>
  );
}
