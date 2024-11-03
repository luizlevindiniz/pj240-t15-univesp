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
    <main className="flex flex-col">
      <section className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between my-3">
          <div className="max-w-[750px] max-h-[450px] overflow-hidden">
            <Image
              src={truck.image_url}
              alt={truck.name}
              width={750}
              height={400}
              className="rounded-lg h-full object-cover object-center w-full"
              priority
            />
          </div>
          <div className="text-center md:text-right text-red-500 ml-2">
            <h1 className="text-lg sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold my-4 ">
              {truck.name}
            </h1>
            <p className="text-base md:text-lg lg:text-xl xl:text-2xl mb-2">{truck.description}</p>
            <p className="text-lg mb-2 font-bold ">{truck.cuisine.toUpperCase()}</p>
          </div>
        </div>
        <div className="bg-[#d0ffa26c] shadow-2xl border border-red-300 rounded-lg p-6">
          <div className="flex flex-col">
            <div>
              <ul className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8 list-disc list-inside">
                {menu ? (
                  menu.map((item: Item) => (
                    <li key={item.id} className="w-full max-w-[450px] h-full m-auto">
                      <div>
                        <Image
                          src={item.image_url}
                          alt={item.meal_name}
                          width={300}
                          height={300}
                          className="w-full h-52 object-cover rounded-md"
                        />
                      </div>
                      <h3 className="text-lg font-bold my-2">{item.meal_name}</h3>
                      <div className="mb-2">
                        <p className="font-thin">R$ {item.price}</p>
                        <p className="font-style: italic">{item.description}</p>
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
      </section>
    </main>
  );
}
