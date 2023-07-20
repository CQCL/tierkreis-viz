import { NextResponse } from "next/server";
import { readFromStorageDir, writeToStorageDir } from "../utils";

export async function POST(req: Request) {
  console.info("Received typeError data.");
  writeToStorageDir(
    `typeErrors.bin`,
    Buffer.from(await (await req.blob()).arrayBuffer())
  );
  return NextResponse.json({ message: "Saved data." });
}

export async function GET() {
  try {
    return new Response(readFromStorageDir("typeErrors.bin"));
  } catch (error) {
    return new Response("Type information not found.", {
      status: 404,
    });
  }
}
