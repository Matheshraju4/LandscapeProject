import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import nodemailer from "nodemailer";

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
  const { name, email, message, phonenumber } = response;
  if (response) {
    sendMail(name, email, message, phonenumber);
  }
  return NextResponse.json(response);
}

function sendMail(name: any, email: any, message: any, phonenumber: any) {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.FORMEMAIL,
      pass: process.env.FROMPASSWWORD,
    },
  });

  const mailOptions: any = {
    from: process.env.FORMEMAIL,
    to: process.env.TOEMAIL,
    subject: "New User Logged in",
    text: "That was easy!",
    html: `<h4>Name: ${name}</h4><br/><h4>Email: ${email}</h4><br/><h4>Message: ${message}</h4><br/><h4>Phone Number: ${phonenumber}</h4>`,
  };
  transporter.sendMail(mailOptions, function (error: any, info: any) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}
