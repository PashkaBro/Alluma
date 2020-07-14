// const nodemailer = require("nodemailer");
// const report = require('./temp/allure-report/widgets/summary.json');

// const transporter = nodemailer.createTransport({
//     service: 'gmail',
//     auth: {
//       user: 'user',
//       pass: 'pass'
//     }
// });

// let message = {
//     from: "email from",
//     to: "email to",
//     subject: "test results",
//     html: `<div>Total: ${report.statistic.total}</div>
//     <div>Passed: ${report.statistic.passed}</div>
//     <div>Failed: ${report.statistic.total - report.statistic.passed}</div>`
// };

// transporter.sendMail(message, function(error, info){
//     if (error) {
//       console.log(error);
//     } else {
//       console.log('Email sent: ' + info.response);
//     }
//   });