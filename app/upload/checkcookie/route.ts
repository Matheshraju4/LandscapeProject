"use server";
import jwt from "jsonwebtoken";
import { NextRequest, NextResponse } from "next/server";
export async function POST(req: NextRequest) {
  try {
    const token = req.cookies.get("access-token")?.value || "";
    const secret = process.env.SECRET || "";
    const jwttoken = jwt.verify(token, secret);
    if (!jwttoken) {
      return NextResponse.json({ success: false });
    }
    return NextResponse.json({
      success: true,
    });
  } catch (error) {
    console.log(error);
  }

  return NextResponse.json({ success: false });
}
