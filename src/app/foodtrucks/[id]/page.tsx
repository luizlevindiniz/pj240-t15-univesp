import FoodTruckDetails from "@/src/app/components/FoodTruckDetails";
import MissingFoodTruck from "@/src/app/components/MissingFoodTruck";
import { getTruckInfo, getTruckMenuByTruckId } from "./actions";

export default async function TruckPage({ params }: Readonly<{ params: { id: string } }>) {
  const { truck } = await getTruckInfo(params.id);

  if (!truck) {
    return <MissingFoodTruck message="Esse foodtruck nao existe ou não está cadastrado." />;
  }

  const { menu } = await getTruckMenuByTruckId(truck.id);

  if (!menu) {
    return <MissingFoodTruck message="Esse foodtruck nao existe ou não está cadastrado." />;
  }

  return <FoodTruckDetails truck={truck} menu={menu} />;
}
