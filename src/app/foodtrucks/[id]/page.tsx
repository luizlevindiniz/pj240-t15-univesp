import FoodTruckDetails from "@/src/app/components/FoodTruckDetails";
import MissingFoodTruck from "@/src/app/components/MissingFoodTruck";
import { getAllTrucks } from "@/src/app/foodtrucks/actions";
import { getTruckInfo, getTruckMenuByTruckId } from "./actions";

export async function generateStaticParams() {
  const { trucks } = await getAllTrucks();
  return trucks.map((truck) => ({
    params: { id: truck.id },
  }));
}

export default async function TruckPage({ params }: Readonly<{ params: { id: string } }>) {
  const { truck } = await getTruckInfo(params.id);

  if (!truck) {
    return <MissingFoodTruck message="Esse foodtruck nao existe ou não está cadastrado." />;
  }

  const { menu } = await getTruckMenuByTruckId(truck.id);
  console.log(menu);

  return <FoodTruckDetails truck={truck} menu={menu} />;
}
