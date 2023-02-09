const nodemailer = require('nodemailer');

// create transporter object using Gmail
let transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'sysavanefanta49@gmail.com',
    pass: 'yourpassword'
  }
});

// setup email data
let mailOptions = {
  from: '"Fanta" <sysavanefanta49@gmail.com>',
  to: 'sososo36@gmail.com',
  subject: 'Hello Node',
  text: 'Welcome to Node Email'
};

// send email
transporter.sendMail(mailOptions, (error, info) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
