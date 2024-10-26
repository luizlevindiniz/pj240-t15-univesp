import { createClient } from "@/src/app/utils/supabase/server";

type Item = {
  id: string;
  truck_id: string;
  meal_name: string;
  price: string;
  description: string;
  image_url: string;
};
export async function getTruckMenuByTruckId(truckId: string) {
  const supabase = createClient();
  const { data, error } = await supabase.from("menu_items").select("*").eq("truck_id", truckId);
  if (error) throw error;
  return data as Item[];
}
