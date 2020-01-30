const nodemailer = require("nodemailer");
const report = require('./temp/allure-report/widgets/summary.json');

const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: 'maf.club.sac@gmail.com',
      pass: 'zqrvicbxwosyyuuj'
    }
});

let message = {
    from: "maf.club.sac@gmail.com",
    to: "maf.club.sac@gmail.com",
    subject: "Autotest results",
    html: `<div>Total: ${report.statistic.total}</div>
    <div>Passed: ${report.statistic.passed}</div>
    <div>Failed: ${report.statistic.total - report.statistic.passed}</div>`
};

transporter.sendMail(message, function(error, info){
    if (error) {
      console.log(error);
    } else {
      console.log('Email sent: ' + info.response);
    }
  });