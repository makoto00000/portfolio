require('dotenv').config()

const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS
  }
});

const data = {
  from: 'portfolio-contact@mail.com',
  to: 'makoto.pro100@gmail.com',
  cc: '',
  bcc: '',
  text: "テキストメール本文\nテキストメール本文\nテキストメール本文",
  html: 'HTMLメール本文<br>HTMLメール本文<br>HTMLメール本文',
  subject: 'メール件名',
};

exports.sendMail = transporter.sendMail(data, (error, info) => {

  if(error) {

    console.log(error); // エラー情報

  } else {

    console.log(info);  // 送信したメールの情報

  }

});