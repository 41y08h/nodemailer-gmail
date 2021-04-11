require("dotenv/config");
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.GMAIL,
    pass: process.env.PASS,
  },
});

transporter
  .sendMail({
    to: "mtierapqptvlupktsu@twzhhq.online", // get a temp mail from https://10minutemail.com/
    from: process.env.GMAIL,
    subject: "Hello from NODE",
    html: "<h1>This is rendered as &lt;h1/&gt; tag in mail</h1>",
  })
  .then(() => console.log("Mail sent successfully"))
  .catch((err) => console.log(err.message));
