const nodemailer = require('nodemailer')

const email = process.env.EMAIL
const password = process.env.PASSWORD

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: email,
    pass: password,
  },
})

const mailOptions = {
  from: email,
  to: email,
  subject: 'Contact Form',
  text: 'Your message has been sent',
}

const handler = async (req, res) => {
  if (req.method == 'POST') {
    const data = req.body
    if (!data) {
      return res.status(400).json({
        error: 'Please fill all fields',
      })
    }
    try {
      await transporter.sendMail({
        ...mailOptions,
        text: `Email: ${data}`,
      })
      return res.status(200).json({ success: true })
    } catch (err) {
      return res.status(400).json({
        error: 'Please fill all fields',
      })
    }
  }
  return res.status(400).json({ message: 'bad request' })
}

export default handler
