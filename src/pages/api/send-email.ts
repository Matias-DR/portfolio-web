import { createTransport } from 'nodemailer'

import type { NextApiRequest, NextApiResponse } from 'next'

const transporter = createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD,
  },
})

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { name, email, message } = req.body

  const options = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_DEST,
    subject: `PORTFOLIO WEB`,
    text: `Nombre: ${name}\nEmail: ${email}\nMensaje: ${message}`,
  }

  try {
    await transporter.sendMail(options)
    res.status(200).json({})
  } catch (error: any) {
    console.log(error)
    res.status(500).json({})
  }
}
