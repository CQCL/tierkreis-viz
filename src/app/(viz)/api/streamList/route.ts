import { readFileSync, writeFileSync } from "fs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.info("Received runtime data.");
  writeFileSync(
    `./storage/streamList.bin`,
    Buffer.from(await (await req.blob()).arrayBuffer())
  );
  return NextResponse.json({ message: "Saved data." });
}

export async function GET() {
  try {
    return new Response(readFileSync("./storage/streamList.bin"));
  } catch (error) {
    console.error(`Failed to decode stream list: ${JSON.stringify(error)}`);
    return new Response("Runtime information not found.", {
      status: 404,
    });
  }
}
