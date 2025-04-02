const nodemailer = require("nodemailer");

require("dotenv").config();

async function MailIt(doc, pss) {
  try {
    let transporter = nodemailer.createTransport({
      host: process.env.MAIL_HOST,
      auth: {
        user: process.env.MAIL_USER,
        pass: process.env.MAIL_PASS,
      },
    });

    let info = await transporter.sendMail({
      from: `yashnarela786@gmail.com`,
      to: doc.email,
      subject: " account Created in Liberty Bank Successfully ",

      html: `<h5> Dear ${doc.frstname} Registered Successfully  </h5>

     
          <h5>  bank pin  ${pss} </h5>

       
        <p>for any Query contact YashNarela : 9179794884</p>
      `,
    });

    console.log("Info ", info);
  } catch (error) {
    console.log("Error ", error);
  }
}

module.exports = { MailIt };
