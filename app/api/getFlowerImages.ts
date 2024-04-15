// pages/api/getFlowerImages.ts

import fs from "fs";
import path from "path";
import { NextApiRequest, NextApiResponse } from "next";
import { get } from "http";
import { NextResponse } from "next/server";

export async function GET() {
  const flowerDirectory = path.join(process.cwd(), "public", "Flowers");

  try {
    const files = fs.readdirSync(flowerDirectory);
    return NextResponse.json({ FlowerFileNames: files });
  } catch (error) {
    console.error(
      "...................................................................................",
      error
    );
  }
}
