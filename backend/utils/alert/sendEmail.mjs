import nodemailer from "nodemailer";

async function sendEamil(medication) {
  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "testwebdevprod@gmail.com",
      pass: "gtfl rlji xtyo dxke ",
    },
  });

  const mailOptions = {
    from: "testwebdevprod@gmail.com",
    to: medication.email,
    subject: "Medicine Alert",
    text: `Time to take medicine ${medication.name} `,
  };
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  const mailOptions2 = {
    from: "testwebdevprod@gmail.com",
    to: medication.caretaker,
    subject: "Medicine Alert",
    text: `Time to take medicine ${medication.name} `,
  };
  transporter.sendMail(mailOptions2, (error, info) => {
    if (error) {
      console.error("Error sending email: ", error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });
}

export default sendEamil;
