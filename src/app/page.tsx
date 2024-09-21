import Head from "next/head";
import Navbar from "@/app/components/Navbar";
import Footer from "@/app/components/Footer";
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
    <div className="flex flex-col min-h-screen">
      <Head>
        <title>Food Truck Finder</title>
        <meta
          name="description"
          content="Find the best food trucks in your area"
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Navbar />

      <main className="flex-grow container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold mb-8 text-center">
          Food Truck Finder
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {foodTrucks.map((truck) => (
            <FoodTruckCard key={truck.id} truck={truck} />
          ))}
        </div>
      </main>

      <Footer />
    </div>
  );
}
