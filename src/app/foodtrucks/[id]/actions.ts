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
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://foodtruck-finder.vercel.app";

export async function getTruckInfo(id: string) {
  const response = await fetch(`${frontEndUrl}/api/foodtrucks/${id}`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch food trucks");
  }
  return (await response.json()) as { truck: Truck };
}

export async function getTruckMenuByTruckId(id: string) {
  const response = await fetch(`${frontEndUrl}/api/items/${id}`);
  if (response.status !== 200) {
    throw new Error("Failed to truck menu");
  }
  return (await response.json()) as { menu: Item[] };
}
