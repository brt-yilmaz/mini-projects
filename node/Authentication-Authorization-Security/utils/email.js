const nodemailer = require("nodemailer");

const sendEmail = async (options, res) => {
  try {
    // 1) Create a transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST,
      port: process.env.EMAIL_PORT,
      auth: {
        user: process.env.EMAIL_USERNAME,
        pass: process.env.EMAIL_PASSWORD,
      },
    });

    // 2) Define the email options
    const mailOptions = {
      from: process.env.EMAIL_FROM,
      to: options.email,
      subject: options.subject,
      text: options.message,
    };

    // 3) Actually send the email
    await transporter.sendMail(mailOptions);
  } catch (err) {
    return res.status(500).json({
      status: "fail",
      message: err,
    });
  }

  res.status(200).json({
    status: "success",
    message: "Email sent",
  });
};

module.exports = sendEmail;
