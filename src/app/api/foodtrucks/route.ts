import { type NextRequest, NextResponse } from "next/server";
import { getAllTrucks } from "./services";

export const dynamic = "force-dynamic";
export async function GET(request: NextRequest) {
  try {
    const trucks = await getAllTrucks();

    return NextResponse.json({ trucks });
  } catch (error) {
    console.error("Internal Error:", error);
    // Handle other errors (e.g., network issues, parsing errors)
    return NextResponse.json({ error: `Internal Server Error: ${error}` }, { status: 500 });
  }
}
