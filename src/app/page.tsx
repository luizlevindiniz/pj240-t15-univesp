import FoodTruckCard from "@/src/app/components/FoodTruckCard";
import axios from "axios";

type Truck = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  cuisine: string;
  start_hour: string;
  end_hour: string;
};

async function getAllTrucks() {
  const response = await axios.get(
    `${process.env.NEXT_PUBLIC_FRONTEND_URL}/api/foodtrucks`
  );
  if (response.status !== 200) {
    throw new Error("Failed to fetch food trucks");
  }
  return (await response.data) as { trucks: Truck[] };
}

export default async function Home() {
  const { trucks } = await getAllTrucks();

  return (
    <main className="flex flex-col">
      <section className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mt-8 mb-12 text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(239,68,68,0.6)] ">
          O melhor do seu condomínio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {trucks ? (
            trucks.map((truck) => (
              <FoodTruckCard key={truck.id} truck={truck} />
            ))
          ) : (
            <div>Sem foodtrucks encontrados :C </div>
          )}
        </div>
      </section>
    </main>
  );
}
