const nodemailer = require("nodemailer");

exports.transporter = nodemailer.createTransport({
    host: 'smtp.gmail.com',
    port: 465,
    secure: true,
    service: "gmail",
    auth: {
      user: process.env.REACT_APP_GMAIL_ID ,
      pass: process.env.REACT_APP_GMAIL_PASSWORD ,
    },
  });