import { type NextRequest, NextResponse } from "next/server";
import { getTruckById } from "../services";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const truck = await getTruckById(params.id);

    if (!truck) {
      return NextResponse.json({ error: "Truck not found" }, { status: 404 });
    }

    return NextResponse.json({ truck });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json({ error: `Internal Server Error: ${error}` }, { status: 500 });
  }
}
