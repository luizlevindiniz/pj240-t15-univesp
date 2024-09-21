import FoodTruckCard from "@/app/components/FoodTruckCard";

export default function Home() {
  const foodTrucks = [
    {
      id: 1,
      name: "Taco Fiesta",
      cuisine: "Mexican",
      openingHours: "11:00 AM - 8:00 PM",
    },
    {
      id: 2,
      name: "Burger Bliss",
      cuisine: "American",
      openingHours: "12:00 PM - 9:00 PM",
    },
    {
      id: 3,
      name: "Sushi Roll",
      cuisine: "Japanese",
      openingHours: "11:30 AM - 7:30 PM",
    },
  ];

  return (
    <main className="flex flex-col">
      <section className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mt-8 mb-12 text-center text-white drop-shadow-[0_1.2px_1.2px_rgba(239,68,68,0.6)] ">
          O melhor do seu condomínio
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodTrucks.map((truck) => (
            <FoodTruckCard key={truck.id} truck={truck} />
          ))}
        </div>
      </section>
    </main>
  );
}
