import Link from "next/link";

export default function FoodTruckCard({ truck }: Readonly<{ truck: any }>) {
  return (
    <div className="bg-white shadow-lg rounded-lg overflow-hidden">
      <div className="p-4">
        <h2 className="text-xl font-bold mb-2">{truck.name}</h2>
        <p className="text-gray-600 mb-2">Cozinha: {truck.cuisine}</p>
        <p className="text-gray-600">Funcionamento: {truck.openingHours}</p>
      </div>
      <div className="bg-gray-100 px-4 py-2">
        <Link
          href={`/foodtruck/${truck.id}`}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Detalhes
        </Link>
      </div>
    </div>
  );
}
