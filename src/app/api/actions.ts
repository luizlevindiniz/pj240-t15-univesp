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
  if (error) throw error;

  return data as Truck[];
}

export async function getTruckMenuByTruckId(truckId: string) {
  const supabase = createClient();
  const { data, error } = await supabase
    .from("menu_items")
    .select("*")
    .eq("truck_id", truckId);
  if (error) throw error;
  return data;
}
