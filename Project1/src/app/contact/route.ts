import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
  const { name, email, message } = await request.json();

  // Create a Nodemailer transporter using SMTP
  let transporter = nodemailer.createTransport({
    service: "gmail", // Use your email service (like Gmail, Outlook, etc.)
    auth: {
      user: process.env.EMAIL_USER, // Store these in .env.local
      pass: process.env.EMAIL_PASS,
    },
  });

  // Setup email data
  const mailOptions = {
    from: email, // sender address
    to: process.env.EMAIL_TO, // your email address
    subject: `Message from ${name}`,
    text: message,
    html: `<p>${message}</p>`,
  };

  try {
    // Send email
    await transporter.sendMail(mailOptions);
    return NextResponse.json({ message: "Email sent successfully!" });
  } catch (error) {
    return NextResponse.json({ message: "Failed to send email", error });
  }
}
