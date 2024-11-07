"use server";
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

const frontEndUrl =
  process.env.NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://find-my-truck.vercel.app";

export async function getTruckInfo(id: string) {
  const response = await fetch(`${frontEndUrl}/api/foodtrucks/${id}`);
  if (response.status === 200) {
    return (await response.json()) as { truck: Truck };
  }
  return { truck: null };
}

export async function getTruckMenuByTruckId(id: string) {
  const response = await fetch(`${frontEndUrl}/api/items/${id}`);
  if (response.status === 200) {
    return (await response.json()) as { menu: Item[] };
  }
  return { menu: null };
}
