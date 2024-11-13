import { NextRequest, NextResponse } from "next/server";
import Nodemailer from "nodemailer";
interface CloudflareTurnstileResponse {
  success: boolean;
  "error-codes": string[];
  challenge_ts: string;
  hostname: string;
}

export async function POST(req: NextRequest) {
  const { token, email, name, message1, subscribe } = await req.json();

  const turnstileRequest = await fetch(
    "https://challenges.cloudflare.com/turnstile/v0/siteverify",
    {
      method: "POST",
      body: `secret=${encodeURIComponent(process.env.TURNSTILE_SECRET_KEY!)}&response=${encodeURIComponent(token)}`,
      headers: {
        "content-type": "application/x-www-form-urlencoded",
      },
    }
  );

  const transporter = Nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.GMAIL_FROM,
      pass: process.env.GMAIL_APP_PASSWORD
    }
  })
  try {
    await transporter.sendMail({
      from: '"Hello"<hheylau@gmail.com>', // sender address
      to: `${email}`, // list of receivers
      subject: `Message from enactus`, // Subject line
      text: "Thank you for contacting us. We will contact you within 48 hours", // plain text body
      html: `<p>Thank you for contacting us. We will contact you within 48 hours</p>` // html body
    })
  } catch (err) {   console.log(err) }


}