import { readFileSync, writeFileSync } from "fs";
import { NextResponse } from "next/server";

export async function POST(req: Request) {
  console.info("Received typeError data.");
  writeFileSync(
    `./storage/typeErrors.bin`,
    Buffer.from(await (await req.blob()).arrayBuffer())
  );
  return NextResponse.json({ message: "Saved data." });
}

export async function GET() {
  try {
    return new Response(readFileSync("./storage/typeErrors.bin"));
  } catch (error) {
    console.error(
      `Failed to decode type information: ${JSON.stringify(error)}`
    );
    return new Response("Type information not found.", {
      status: 404,
    });
  }
}
