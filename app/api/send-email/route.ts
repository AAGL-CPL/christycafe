import { NextResponse } from 'next/server'

export async function POST(request: Request) {
  try {
    const { name, email, subject, message } = await request.json()

    const SENDGRID_API_KEY = process.env.EMAIL_SERVICE_API_KEY
    const TO_EMAIL = process.env.TO_EMAIL || 'your-email@example.com' // Replace with your email

    if (!SENDGRID_API_KEY) {
      return NextResponse.json(
        { error: 'SendGrid API key is missing' },
        { status: 500 }
      )
    }

    const response = await fetch('https://api.sendgrid.com/v3/mail/send', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${SENDGRID_API_KEY}`,
      },
      body: JSON.stringify({
        personalizations: [
          {
            to: [{ email: TO_EMAIL }],
            subject: `Contact Form: ${subject}`,
          },
        ],
        from: { email: 'noreply@yourdomain.com', name: 'Contact Form' }, // Replace with your verified sender
        reply_to: { email, name },
        content: [
          {
            type: 'text/plain',
            value: `
              Name: ${name}
              Email: ${email}
              Subject: ${subject}
              Message: ${message}
            `,
          },
        ],
      }),
    })

    if (!response.ok) {
      const error = await response.json()
      throw new Error(error.message || 'Failed to send email')
    }

    return NextResponse.json({ message: 'Email sent successfully' })
  } catch (error) {
    console.error('Error sending email:', error)
    return NextResponse.json(
      { error: error instanceof Error ? error.message : 'Failed to send email' },
      { status: 500 }
    )
  }
} 