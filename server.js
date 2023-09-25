require('dotenv').config()


const express = require('express');
const nodemailer = require('nodemailer');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');

app.use(cors());

app.use('/img', express.static(__dirname + '/dist/img/'));
app.use('/css', express.static(__dirname + '/dist/css/'));
app.use('/js', express.static(__dirname + '/dist/js/'));
app.use('/favicon.ico', express.static(__dirname + '/dist/favicon.ico'));
app.get('/', (req, res) => res.sendFile(__dirname + '/dist/index.html'))

app.use(bodyParser.urlencoded({extended: true}))
app.use(bodyParser.json())

const transporter = nodemailer.createTransport({
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_PORT,
  secure: process.env.MAIL_SECURE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  }
});

const options = {
  rejectUnauthorized: false, 
};

app.post("/api/email", options, async (req,res) => {

  const data = {
    from: 'portfolio-contact@mail.com',
    to: 'makoto.pro100@gmail.com',
    cc: '',
    bcc: '',
    text: `名前：${req.body.name}\nメールアドレス：${req.body.email}\n内容：${req.body.message}`,
    html: `名前：${req.body.name}<br>メールアドレス：${req.body.email}<br>内容：${req.body.message}`,
    subject: 'portfolioからお問い合わせ',
  };
  
  transporter.sendMail(data, (error, info) => {
    let sendError = true;
    if(error) {
      console.log(error); // エラー情報
      res.send(sendError)
    } else {
      console.log(info);  // 送信したメールの情報
      sendError = false
      res.send(sendError)
    }
  });


});

const PORT=process.env.PORT || 32768;
app.listen(PORT, ()=>{
  console.log(`api server listening... at http://localhost:${PORT}`)
});