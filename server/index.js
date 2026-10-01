import express from 'express'
import cors from 'cors'
import dotenv from 'dotenv'
import { Resend } from 'resend'

dotenv.config()

const app = express()
const PORT = 5000

const resend = new Resend(process.env.RESEND_API_KEY)

app.use(
  cors({
    origin: 'http://localhost:5173',
  }),
)

app.use(express.json())

app.get('/api/health', (req, res) => {
  res.json({
    success: true,
    message: 'Vision X API is running',
  })
})

app.post('/api/contact', async (req, res) => {
  try {
    const {
      name,
      email,
      phone,
      company,
      service,
      message,
    } = req.body

    if (!name || !email || !phone || !service || !message) {
      return res.status(400).json({
        success: false,
        message: 'Please fill all required fields.',
      })
    }

    const { data, error } = await resend.emails.send({
      from: 'Vision X <hello@myvisionx.in>',
      to: ['swarnkumarmehto@gmail.com'],
      replyTo: email,
      subject: `New Project Enquiry — ${company || name}`,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #111;">
          <h2 style="margin-bottom: 24px;">
            New Project Enquiry — Vision X
          </h2>

          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Phone:</strong> ${phone}</p>
          <p><strong>Company / Brand:</strong> ${company || 'Not provided'}</p>
          <p><strong>Service:</strong> ${service}</p>

          <hr style="margin: 24px 0; border: 0; border-top: 1px solid #ddd;" />

          <p><strong>Project Details:</strong></p>

          <p style="white-space: pre-line;">
            ${message}
          </p>

          <hr style="margin: 24px 0; border: 0; border-top: 1px solid #ddd;" />

          <p style="color: #666; font-size: 13px;">
            This enquiry was submitted through the Vision X website.
          </p>
        </div>
      `,
    })

    if (error) {
      console.error('Resend error:', error)

      return res.status(500).json({
        success: false,
        message: 'Unable to send enquiry.',
      })
    }

    return res.status(200).json({
      success: true,
      message: 'Enquiry sent successfully.',
      id: data?.id,
    })
  } catch (error) {
    console.error('Server error:', error)

    return res.status(500).json({
      success: false,
      message: 'Something went wrong.',
    })
  }
})

app.listen(PORT, () => {
  console.log(`Vision X API running on http://localhost:${PORT}`)
})