import { readFileSync, writeFileSync } from "fs";

import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  console.info("Received graph data.");
  writeFileSync(
    `./storage/graph.bin`,
    Buffer.from(await (await req.blob()).arrayBuffer())
  );
  return NextResponse.json({ message: "Saved data." });
}
export async function GET() {
  try {
    return new Response(readFileSync("./storage/graph.bin"));
  } catch (error) {
    console.error(`Failed to decode graph data: ${JSON.stringify(error)}`);
    return new Response("Graph data not found.", {
      status: 404,
    });
  }
}
