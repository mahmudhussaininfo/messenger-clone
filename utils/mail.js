import nodemailer from "nodemailer";

export const sendMail = ({ from, sub, data }) => {
  //create transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "mahmudhussain504@gmail.com",
      pass: "xdmvorkywjrkzdrw",
    },
  });

  //send mail with transport object
  transporter.sendMail({
    from: from,
    to: "mahmudhussain504@gmail.com",
    subject: sub,
    html: data,
  });
};
