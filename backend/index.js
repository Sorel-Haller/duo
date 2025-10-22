const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");
require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.post("/send-email", async (req, res) => {
  const { fullName, email, companyName, budget, projectDetails } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: email,
      to: process.env.EMAIL_USER,
      subject: `New Inquiry from ${fullName}`,
      text: `
Name: ${fullName}
Email: ${email}
Company: ${companyName}
Budget: ${budget}

Project Details:
${projectDetails}
      `,
    };

    await transporter.sendMail(mailOptions);
    res.status(200).send({ message: "Email sent successfully" });
  } catch (err) {
    console.error("Error sending email:", err);
    res.status(500).send({ message: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`Backend running on http://localhost:${PORT}`);
});
