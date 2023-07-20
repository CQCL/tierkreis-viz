import { NextResponse } from "next/server";
import { readFromStorageDir, writeToStorageDir } from "../utils";

export async function POST(req: Request) {
  console.info("Received runtime data.");
  writeToStorageDir(
    `streamList.bin`,
    Buffer.from(await (await req.blob()).arrayBuffer())
  );
  return NextResponse.json({ message: "Saved data." });
}

export async function GET() {
  try {
    return new Response(readFromStorageDir("streamList.bin"));
  } catch (error) {
    return new Response("Runtime information not found.", {
      status: 404,
    });
  }
}
