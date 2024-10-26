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

const frontEndUrl =
  process.env.NEXT_PUBLIC_NODE_ENV === "development"
    ? "http://localhost:3000"
    : "https://foodtruck-finder.vercel.app";

export async function getAllTrucks() {
  const response = await fetch(`${frontEndUrl}/api/foodtrucks`);
  if (response.status !== 200) {
    throw new Error("Failed to fetch food trucks");
  }
  return (await response.json()) as { trucks: Truck[] };
}
