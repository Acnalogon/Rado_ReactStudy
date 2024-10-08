import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Create a Nodemailer transporter using SMTP
  let transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SERVER, // SMTP server (Gmail in this case)
    port: Number(process.env.EMAIL_PORT), // Port for the SMTP
    secure: false, // True for port 465, false for other ports
    auth: {
      user: process.env.EMAIL_USER, // Gmail address
      pass: process.env.EMAIL_PASS, // Gmail App Password
    },
  });

  // Setup email data
  const mailOptions = {
    from: process.env.EMAIL_USER, // sender address (your Gmail)
    to: process.env.EMAIL_TO, // receiving email (your own or someone else's)
    subject: `Message from ${name}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Failed to send email:", error);
    return NextResponse.json({ message: "Failed to send email", error });
  }
}
