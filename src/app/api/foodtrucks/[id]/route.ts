import { type NextRequest, NextResponse } from "next/server";
import { getTruckById } from "../services";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  const truck = await getTruckById(params.id);
  if (!truck) {
    return NextResponse.json({ error: "Truck not found" }, { status: 404 });
  }
  return NextResponse.json({ truck });
}
