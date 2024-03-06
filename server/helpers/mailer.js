import nodemailer from "nodemailer";
import User from "../Database/models/userModel.js";
import bcryptjs from "bcryptjs";
import { google } from "googleapis";

const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const oAuth2Client = new google.auth.OAuth2(
      process.env.CLIENT_ID,
      process.env.CLIENT_SECRET,
      process.env.REDIRECT_URL
    );
  
    oAuth2Client.setCredentials({ refresh_token: process.env.REFRESH_TOKEN });
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);
    const accessToken = await oAuth2Client.getAccessToken();

    console.log(accessToken)
    if (emailType === "VERIFY") {
      await User.findByIdAndUpdate(userId, {
        verifyToken: hashedToken,
        verifyTokenExpiry: Date.now() + 3600000,
      });
    } else if (emailType === "RESET") {
      await User.findByIdAndUpdate(userId, {
        forgotPasswordToken: hashedToken,
        forgotPasswordTokenExpiry: Date.now() + 3600000,
      });
    }

      const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
      auth: {
        type: "OAuth2",
        user: "hectorg.devp@gmail.com",
        clientId: process.env.CLIENT_ID,
        clientSecret: process.env.CLIENT_SECRET,
        refreshToken: process.env.REFRESH_TOKEN,
        accessToken: accessToken,
      },
    });

    const mailOptions = {
      from: "Empleos Agil <hectorg.devp@gmail.com>",
      to: email,
      subject:
        emailType === "VERIFY"
          ? "Verifique su correo electrónico"
          : "Restablecer contraseña",
      html: `<p>Click <a href="${
        process.env.FRONTEND_URL
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY"
          ? "Verifique su correo electrónico"
          : "Restablecer contraseña"
      }
      o copie y pegue el siguiente enlace en su navegador. <br> ${
        process.env.FRONTEND_URL
      }/verifyemail?token=${hashedToken}
              </p>`,
    };

    const mailresponse = await transporter.sendMail(mailOptions);
    return mailresponse;
  } catch (error) {
    console.log(error);
  }
};

export default sendEmail;
