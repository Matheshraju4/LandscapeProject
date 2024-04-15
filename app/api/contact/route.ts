import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
export async function POST(req: NextRequest) {
  const body = await req.json();
  const response = await prisma.user.create({
    data: {
      name: body.name,
      email: body.email,
      message: body.message,
      phonenumber: body.phonenumber,
    },
  });
  return NextResponse.json(response); // Return the response;
}
