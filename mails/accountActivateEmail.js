import nodemailer from "nodemailer";

export const activatedEmail = async (auth, data) => {
  //create transport
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    auth: {
      user: "mahmudhussain504@gmail.com",
      pass: "kzhh cltz fjwu jrbh",
    },
  });

  //send mail with transport object
  transporter.sendMail({
    from: "Messenger Activation <mahmudhussain504@gmail.com>",
    subject: "Mail Check",
    to: auth,
    html: `<!DOCTYPE html>
    <html lang="en">
    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <title>Messenger Activation</title>
    </head>
    <body bgcolor="#0f3462" style="margin-top:20px;margin-bottom:20px">
      <!-- Main table -->
      <table border="0" align="center" cellspacing="0" cellpadding="0" bgcolor="white" width="650">
        <tr>
          <td>
            <!-- Child table -->
            <table border="0" cellspacing="0" cellpadding="0" style="color:#0f3462; font-family: sans-serif;">
              <tr>
                <td>
                  <h2 style="text-align:center; margin: 0px; padding-bottom: 25px; margin-top: 25px;">
                   Messenger Activation </h2>
                </td>
              </tr>
              <tr>
                <td>
                  <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/be/Facebook_Messenger_logo_2020.svg/1200px-Facebook_Messenger_logo_2020.svg.png" height="50px" style="display:block; margin:auto;padding-bottom: 25px; ">
                </td>
              </tr>
              <tr>
                <td style="text-align: center;">
                  <h3>Hello ${data.name}</h3>
                  <h2 style="margin: 0px;padding-bottom: 25px;font-size:22px;"> Please active your account</h2>
                  <p style=" margin: 0px 40px;padding-bottom: 25px;line-height: 2; font-size: 15px;">Click any item in your email to open
                    setting pannel on the right. You can change background colour, padding
                    and set position of the text and image.
                  </p>
                  <p style=" margin: 0px 32px;padding-bottom: 25px;line-height: 2; font-size: 15px;">To edit this text, change
                    text alignment and add links, double click to get into text edit mode. To change fonts, Use Default
                    fonts from the design tab on the right.
                  </p>
                  <h2 style="margin: 0px; padding-bottom: 25px;">Token: ${data.code}</h2>
                </td>
              </tr>
              <tr>
                <td>
                  <a href="${data.link}" type="button" style="background-color:#36b445; color:white; padding:15px 97px; outline: none; display: block; margin: auto; border-radius: 31px;
                                    font-weight: bold; margin-top: 25px; margin-bottom: 25px; border: none; text-transform:uppercase; ">Active</a>
                </td>
              </tr>
           
            </table>
            <!-- /Child table -->
          </td>
        </tr>
      </table>
      <!-- / Main table -->
    </body>
    
    </html>`,
  });
};
