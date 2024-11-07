import { type NextRequest, NextResponse } from "next/server";
import { getAllTrucks } from "./services";

export async function GET(request: NextRequest) {
  const trucks = await getAllTrucks();
  return NextResponse.json({ trucks });
}
