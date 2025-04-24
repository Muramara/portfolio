import express from 'express';
import cors from 'cors';
import nodemailer from 'nodemailer';

const app = express();
app.use(cors());
app.use(express.json());

// Setup the mail transporter (example using Gmail)
const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sebastianmuramara@gmail.com',
    pass: 'omwu nxbo hxub ymxv' // NOT your Gmail password — use an App Password
  }
});

app.post('/api/message', async (req, res) => {
  const { name, email, message } = req.body;

  const mailOptions = {
    from: email,
    to: 'sebastianmuramara@gmail.com', // Your receiving email
    subject: `New Message by ${name} from Portfolio Site`,
    text: `
      Name: ${name}
      Email: ${email}
      Message:
      ${message}
    `
  };

  try {
    await transporter.sendMail(mailOptions);
    console.log('Email sent:', mailOptions);
    res.json({ success: true, message: 'Email sent successfully!' });
  } catch (err) {
    console.error('Error sending email:', err);
    res.status(500).json({ success: false, message: 'Failed to send email.' });
  }
});

app.listen(1300, () => {
  console.log('Server running on http://localhost:1300');
});
