"use server";
import { createClient } from "@/src/app/utils/supabase/server";

type Truck = {
  id: string;
  name: string;
  description: string;
  image_url: string;
  cuisine: string;
  start_hour: string;
  end_hour: string;
};

export async function getAllTrucks() {
  const supabase = createClient();
  const { data, error } = await supabase.from("trucks").select("*");
  if (error) {
    console.log("Error fetching trucks:", error);
    return [];
  }

  return data as Truck[];
}

export async function getTruckById(truckId: string) {
  const supabase = createClient();
  try {
    const { data, error } = await supabase.from("trucks").select("*").eq("id", truckId).single();
    if (error) {
      console.log("Error fetching trucks:", error);
      return null;
    }
    return data as Truck;
  } catch (e) {
    console.log(e);
    return null;
  }
}
