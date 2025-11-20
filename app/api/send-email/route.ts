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
    html: `
    <!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Booking Confirmation</title>
  <meta name="viewport" content="width=device-width,initial-scale=1">
  <style>
    @media only screen and (max-width:600px) {
      .container{width:100% !important;padding:12px !important;}
      .hero{padding:18px !important;}
      .two-col{display:block !important;width:100% !important;}
      .btn{width:100% !important;display:block !important;}
      .small{font-size:14px !important;}
    }
  </style>
</head>
<body style="margin:0;padding:0;background-color:#f7f5f0;font-family:Helvetica,Arial,sans-serif;color:#333333;">

  <div style="display:none;max-height:0;overflow:hidden;color:#fff;opacity:0;">
    Your booking is confirmed — Booking ref: {booking_ref}
  </div>

  <table role="presentation" width="100%" cellpadding="0" cellspacing="0" style="background-color:#f7f5f0;">
    <tr>
      <td align="center" style="padding:24px;">
        
        <table role="presentation" class="container" width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:10px;border:2px solid #CDA434;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">

          <!-- Header -->
          <tr>
            <td style="padding:20px 24px;border-bottom:1px solid #E8D8A8;background-color:#faf7ef;">
              <table width="100%">
                <tr>
                  <td align="left">
                    <img src="{company_logo_url}" alt="logo" width="140" style="display:block;">
                  </td>
                  <td align="right" style="font-size:14px;color:#CDA434;font-weight:600;text-transform:uppercase;">
                    Booking Confirmed
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Hero -->
          <tr>
            <td class="hero" style="padding:28px 24px;">
              <h1 style="margin:0;font-size:24px;color:#111827;font-weight:600;">Hi ${name},</h1>
              <p style="margin-top:8px;font-size:15px;color:#6b7280;">Your booking has been successfully confirmed. Below are your details.</p>
            </td>
          </tr>

          <!-- Details Card -->
          <tr>
            <td style="padding:0 24px 24px;">
              <table width="100%" cellpadding="0" cellspacing="0" style="border:1px solid #E8D8A8;border-radius:8px;">
                <tr><td style="padding:16px;">
                  
                  <table width="100%" cellpadding="0" cellspacing="0">
                    <tr>
                      <td style="font-size:14px;color:#6b7280;">Booking Reference</td>
                      <td align="right" style="font-size:16px;font-weight:600;color:#111827;">{booking_ref}</td>
                    </tr>
                    <tr>
                      <td style="font-size:14px;color:#6b7280;padding-top:8px;">Service</td>
                      <td align="right" style="font-size:16px;color:#111827;padding-top:8px;">${serviceType}</td>
                    </tr>
                    <tr>
                      <td style="font-size:14px;color:#6b7280;padding-top:8px;">Date & Time</td>
                      <td align="right" style="font-size:16px;color:#111827;padding-top:8px;">${date} at {{start_time}}</td>
                    </tr>
                  </table>

                </td></tr>
              </table>
            </td>
          </tr>

          <!-- Button -->
          <tr>
            <td align="center" style="padding:0 24px 32px;">
              <a href="{{manage_booking_url}}" style="background-color:#CDA434;color:#ffffff;text-decoration:none;padding:14px 28px;border-radius:6px;font-weight:bold;display:inline-block;">
                Manage Booking
              </a>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="padding:24px;background-color:#faf7ef;border-top:1px solid #E8D8A8;">
              <p style="margin:0;font-size:13px;color:#6b7280;line-height:20px;">
                <strong style="color:#111827;">{{company_name}}</strong><br>
                {{company_address}}<br>
                Need help? Email us at 
                <a href="mailto:{{support_email}}" style="color:#CDA434;text-decoration:none;">{{support_email}}</a>.
              </p>
            </td>
          </tr>

        </table>

        <p style="font-size:12px;color:#9ca3af;margin-top:10px;">
          © {{year}} {{company_name}} — All Rights Reserved
        </p>

      </td>
    </tr>
  </table>

</body>
</html>

    `
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
