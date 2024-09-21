import FoodTruckDetails from "@/app/components/FoodTruckDetails";
import MissingFoodTruck from "@/app/components/MissingFoodTruck";

// This would typically come from an API or database
const foodTrucks = [
  {
    id: 1,
    name: "Taco Fiesta",
    cuisine: "Mexican",
    openingHours: "11:00 AM - 8:00 PM",
    description: "Authentic Mexican street food",
    menu: ["Tacos", "Burritos", "Quesadillas"],
  },
  {
    id: 2,
    name: "Burger Bliss",
    cuisine: "American",
    openingHours: "12:00 PM - 9:00 PM",
    description: "Gourmet burgers and fries",
    menu: ["Classic Burger", "Veggie Burger", "Cheese Fries"],
  },
  {
    id: 3,
    name: "Sushi Roll",
    cuisine: "Japanese",
    openingHours: "11:30 AM - 7:30 PM",
    description: "Fresh sushi and Japanese cuisine",
    menu: ["California Roll", "Tempura Roll", "Miso Soup"],
  },
];

export async function generateMetadata({ params }: { params: { id: string } }) {
  const truck = foodTrucks.find((t) => t.id === Number.parseInt(params.id));
  return {
    title: `${truck?.name} - Food Truck Finder`,
    description: `Details for ${truck?.name}`,
  };
}

export default function Page({ params }: Readonly<{ params: { id: string } }>) {
  const truck = foodTrucks.find((t) => t.id === Number.parseInt(params.id));

  if (!truck) {
    return (
      <MissingFoodTruck message="Esse foodtruck nao existe ou não está cadastrado." />
    );
  }

  return <FoodTruckDetails truck={truck} />;
}
