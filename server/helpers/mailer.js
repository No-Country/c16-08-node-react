import nodemailer from "nodemailer";
import User from "../Database/models/userModel.js";
import bcryptjs from "bcryptjs";

const sendEmail = async ({ email, emailType, userId }) => {
  try {
    const hashedToken = await bcryptjs.hash(userId.toString(), 10);

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

    var transporter = nodemailer.createTransport({
      host: "sandbox.smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: process.env.USER_MAILTRAP,
        pass: process.env.USER_MAILTRAP_PASSWORD,
      },
    });

    const mailOptions = {
      from: "empleosagil@gmail.com",
      to: email,
      subject:
        emailType === "VERIFY"
          ? "Verifique su correo electrónico"
          : "Restablecer contraseña",
      html: `<p>Click <a href="${
        process.env.DOMAIN
      }/verifyemail?token=${hashedToken}">here</a> to ${
        emailType === "VERIFY"
          ? "Verifique su correo electrónico"
          : "Restablecer contraseña"
      }
      o copie y pegue el siguiente enlace en su navegador. <br> ${
        process.env.DOMAIN
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
