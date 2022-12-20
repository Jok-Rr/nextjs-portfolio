export default async function nodeMailer(req, res) {
  require("dotenv").config();
  let nodemailer = require("nodemailer");
  const transporter = nodemailer.createTransport({
    port: 465,
    host: "smtp.gmail.com",
    auth: {
      user: process.env.email,
      pass: process.env.password,
    },
    secure: true,
  });
  const mailData = {
    from: "tom.bost.pro@gmail.com",
    to: "tom.bost.pro@gmail.com",
    subject: `Nouveau message du formulaire de contact de ${req.body.email}`,
    html: `
    <div><strong>Name:</strong> ${req.body.fullName}</div>
    <br/>
    <div><strong>Name:</strong> ${req.body.subject}</div>
    <br/>
    <div><strong>Email:</strong> ${req.body.email}</div>
    <br/>
    <div><strong>Message:</strong> ${req.body.message}</div>`,
  };

  await new Promise((resolve, reject) => {
    transporter.sendMail(mailData, function (err, info) {
      if (err) {
        console.log(err);
        reject(err);
      } else {
        console.log(info);
        resolve(info);
      }
    });
  });
  res.status(200).json({ status: "OK" });
}
