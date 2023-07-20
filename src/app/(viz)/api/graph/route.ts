import { NextRequest, NextResponse } from "next/server";
import { readFromStorageDir, writeToStorageDir } from "../utils";

export async function POST(req: NextRequest) {
  console.info("Received graph data.");
  writeToStorageDir(
    `graph.bin`,
    Buffer.from(await (await req.blob()).arrayBuffer())
  );
  return NextResponse.json({ message: "Saved data." });
}
export async function GET() {
  try {
    return new Response(readFromStorageDir("graph.bin"));
  } catch (error) {
    return new Response("Graph data not found.", {
      status: 404,
    });
  }
}
