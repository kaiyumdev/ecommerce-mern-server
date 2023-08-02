const nodemailer = require("nodemailer");
const { smtpUsername, smtpPassword } = require("../secret");

const transporter = nodemailer.createTransport({
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: smtpUsername,
    pass: smtpPassword,
  },
});

const emailWithNodeMailer = async (emailData) => {
  const mailOptions = {
    from: smtpUsername,
    to: emailData.email,
    subject: emailData.subject,
    html: emailData.html,
  };

  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent", info.response);
  } catch (error) {
    console.error("Error occurred while sending mail", error);
    throw error;
  }
};

module.exports = emailWithNodeMailer;
