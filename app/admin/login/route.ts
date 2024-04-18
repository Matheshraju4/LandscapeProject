import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { cookies } from "next/headers";

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { email, password } = body;
  if (!email || !password) {
    return NextResponse.json({ message: "email and password are required" });
  } else if (email !== process.env.EMAIL || password !== process.env.PASSWORD) {
    return NextResponse.json({ success: false });
  }

  const secret = process.env.SECRET;

  const token = jwt.sign({ email }, secret || "");

  console.log(cookies().get("access-token"));

  cookies().set("access-token", token);
  return NextResponse.json({ success: true });
}
