import { type NextRequest, NextResponse } from "next/server";
import { getTruckMenuByTruckId } from "./services";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest, { params }: { params: { id: string } }) {
  try {
    const menu = await getTruckMenuByTruckId(params.id);

    if (!menu) {
      return NextResponse.json({ error: "Menu not found" }, { status: 404 });
    }

    return NextResponse.json({ menu });
  } catch (error) {
    console.error("Internal Error:", error);
    return NextResponse.json({ error: `Internal Server Error: ${error}` }, { status: 500 });
  }
}
