import { NextRequest } from "next/server";
import Nodemailer from "nodemailer";


export async function POST(req: NextRequest) {
  const { token, email, name, message1, subscribe } = await req.json();

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
      text: `Thank you for contacting us. We will contact you within 48 hours \n your detail with us:${email}, ${name}, ${message1}`, // plain text body
      html: `<p>Thank you for contacting us. We will contact you within 48 hours</p> <p>your detail with us:${email}, ${name}, ${message1}</p>` // html body
    })
  } catch (err) { console.log(err) }

  return Response.json({ message: "niced" }, { status: 200 });
}