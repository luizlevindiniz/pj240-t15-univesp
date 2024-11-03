import FoodTruckCard from "@/src/app/components/FoodTruckCard";
import { getAllTrucks } from "@/src/app/foodtrucks/actions";

export default async function Foodtrucks() {
  const { trucks } = await getAllTrucks();

  return (
    <main className="flex flex-col">
      <section className="container mx-auto px-4 py-8">
        <h1 className="text-3xl md:text-4xl font-bold mt-8 mb-12 text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(239,68,68,0.6)] ">
          O melhor do seu condomínio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {trucks ? (
            trucks.map((truck) => <FoodTruckCard key={truck.id} truck={truck} />)
          ) : (
            <div>Sem foodtrucks encontrados :C </div>
          )}
        </div>
      </section>
    </main>
  );
}
