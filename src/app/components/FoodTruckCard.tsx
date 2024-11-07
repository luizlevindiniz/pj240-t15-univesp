"use client";
import Link from "next/link";
import Image from "next/image";
type Truck = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  cuisine: string;
  start_hour: string;
  end_hour: string;
};

const formatDate = (date: string) => {
  return date.substring(0, 5);
};

export default function FoodTruckCard({ truck }: Readonly<{ truck: Truck }>) {
  return (
    <div className="w-full bg-white shadow-lg rounded-lg overflow-hidden max-w-[450px] m-auto">
      <div>
        <Image
          src={truck.image_url}
          alt={truck.name}
          width={450}
          height={200}
          className="w-full h-52 object-cover"
          priority
        />
      </div>
      <div className="p-4">
        <div className="mt-2">
          <h2 className="text-xl font-bold mb-2">{truck.name}</h2>
          <p className="text-gray-600 mb-2">
            Cozinha: <span className="capitalize">{truck.cuisine}</span>
          </p>
          <p className="text-gray-600">
            Funcionamento: {formatDate(truck.start_hour)} até {formatDate(truck.end_hour)}
          </p>
        </div>
      </div>
      <div className=" m-4">
        <Link
          href={`/foodtrucks/${truck.id}`}
          className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition duration-300"
        >
          Detalhes
        </Link>
      </div>
    </div>
  );
}
