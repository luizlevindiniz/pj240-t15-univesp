"use client";
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

type Item = {
  id: string;
  truck_id: string;
  meal_name: string;
  price: string;
  description: string;
  image_url: string;
};

const formatDate = (date: string) => {
  return date.substring(0, 5);
};
export default function FoodTruckDetails({
  truck,
  menu,
}: Readonly<{ truck: Truck; menu: Item[] }>) {
  return (
    <main className="flex-grow container mx-auto px-4 py-8">
      <div className="flex items-center justify-between my-3">
        <Image
          src={truck.image_url}
          alt={truck.name}
          width={750}
          height={400}
          className="rounded-lg"
          priority
        />
        <div className="text-right text-red-500">
          <h1 className="text-4xl font-bold mb-4 ">{truck.name}</h1>
          <p className="text-l mb-2">{truck.description}</p>
          <p className="text-l mb-2 font-bold ">{truck.cuisine.toUpperCase()}</p>
        </div>
      </div>
      <div className="bg-white shadow-lg rounded-lg p-6">
        <div>
          <p className="text-xl font-bold mb-2">
            Funcionamento: {formatDate(truck.start_hour)} até {formatDate(truck.end_hour)}
          </p>
        </div>
        <div className="flex flex-col">
          <h2 className="text-2xl font-bold my-4">Menu</h2>
          <div>
            <ul className="flex items-center justify-between list-disc list-inside">
              {menu ? (
                menu.map((item: Item) => (
                  <li key={item.id} className="text-lg w-[400px] h-[400px]">
                    <Image
                      src={item.image_url}
                      alt={item.meal_name}
                      width={200}
                      height={200}
                      className="rounded-lg w-full h-[200px]"
                    />
                    <strong>{item.meal_name}</strong>
                    <div className="my-2">
                      <p> R$ {item.price}</p>
                      <p>{item.description}</p>
                    </div>
                  </li>
                ))
              ) : (
                <p>Menu não disponível</p>
              )}
            </ul>
          </div>
        </div>
      </div>
    </main>
  );
}
