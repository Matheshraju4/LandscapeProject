// pages/api/getFlowerImages.ts

import fs from "fs";
import path from "path";

import { NextRequest, NextResponse } from "next/server";
import { NextApiRequest } from "next";

export async function GET() {
  const flowerDirectory = path.join(process.cwd(), "public", "Flowers");
  const modelDirectory = path.join(process.cwd(), "public", "Models");
  const plantsDirectory = path.join(
    process.cwd(),
    "public",
    "Plants_and_trees"
  );
  console.log(flowerDirectory);
  try {
    const files = fs.readdirSync(flowerDirectory);
    const modelFiles = fs.readdirSync(modelDirectory);
    const plantsFiles = fs.readdirSync(plantsDirectory);
    return NextResponse.json({
      imageFileNames: files,
      modelFileNames: modelFiles,
      plantsFileNames: plantsFiles,
    });
  } catch (error) {
    console.error(
      "...................................................................................",
      error
    );
  }
}
