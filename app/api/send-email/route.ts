import { NextRequest, NextResponse } from "next/server"
import nodemailer from "nodemailer"

export async function POST(req: NextRequest, res: NextResponse) {
  const { name, email, message, phone, serviceType, date } = await req.json()

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.EMAIL_USER as string,
      pass: process.env.EMAIL_PASS as string,
    },
  })

  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_USER,
    subject: `New message from ${name}`,
    text: `
            Name: ${name}
            Email: ${email}

            Message:
            ${message}
      `,
    html: `
    <!DOCTYPE html>
    <html lang="en">
    <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Confirmation</title>
    <style>
        body {
        font-family: Arial, sans-serif;
        background-color: #f9f9f9;
        margin: 0;
        padding: 0;
        color: #333;
        }
        .container {
        max-width: 600px;
        margin: 30px auto;
        background-color: #ffffff;
        border-radius: 8px;
        padding: 20px;
        box-shadow: 0 4px 10px rgba(0,0,0,0.05);
        }
        .header {
        text-align: center;
        margin-bottom: 20px;
        }
        .header h2 {
        color: #bfa14c; /* gold color */
        }
        .details {
        margin-top: 20px;
        }
        .details p {
        line-height: 1.5;
        margin: 5px 0;
        }
        .footer {
        margin-top: 30px;
        text-align: center;
        font-size: 0.9rem;
        color: #777;
        }
        .highlight {
        font-weight: bold;
        }
    </style>
    </head>
    <body>
        <div class="container">
            <div class="header">
                <h2>New Booking Request</h2>
                <p>A client has submitted a booking form.</p>
            </div>

            <div class="details">
                <p><span>Full Name:</span> ${name}</p>
                <p><span>Email Address:</span> ${email}</p>
                <p><span>Phone Number:</span> ${phone}</p>
                <p><span>Service Type:</span> ${serviceType}</p>
                <p><span>Preferred Date:</span> ${date}</p>
                <p><span>Additional Details:</span></p>
                <p class="highlight">${message}</p>
            </div>

            <div class="footer">
                <p>© 2025 Your Photography Studio</p>
            </div>
        </div>
    </body>
    </html>`,
  }

  const mailOptionsOthers = {
    from: process.env.EMAIL_USER,
    to: email,
    subject: `Booking Details`,
    text: `
            Name: ${name}
            Email: ${email}

            Message:
            ${message}
      `,
  }

  try {
    await transporter.sendMail(mailOptions)

    await transporter.sendMail(mailOptionsOthers)

    return Response.json({ success: true, message: "Emails sent successfully!" })
  } catch (error: any) {
    console.error("Email error:", error)

    return Response.json({ success: false, error: error?.message || "Unknown error" }, { status: 500 })
  }
}
