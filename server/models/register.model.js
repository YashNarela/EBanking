const mongoose = require("mongoose");

const nodemailer = require("nodemailer");

const schema = new mongoose.Schema(
  {
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
      require: true,
    },

    date: {
      type: String,
      require: true,
    },
    address: {
      type: String,
      require: true,
    },
    govid: {
      type: String,
      require: true,
    },
    frstname: {
      type: String,
      require: true,
    },

    lastname: {
      type: String,
      require: true,
    },
    gender: {
      type: String,
      require: true,
    },

    img: [Object],
  },
  { timestamps: true }
);

schema.post("save", async (doc) => {
  console.log(doc);

  let transporter = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
  });

  let info = await transporter.sendMail({
    from: `yashnarela01@gmail.com`,
    to: doc.email,
    subject: " account Created in Liberty Bank Successfully ",

    html: `<h2> Dear ${doc.lastname} Registered Successfully  </h2>

          <h1> Have A Nice Day </h1>
       
        <p>for any Query contact YashNarela : 9179794884</p>
      `,
  });

  console.log("Info ", info);
});

module.exports = mongoose.model("register", schema);
