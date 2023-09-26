import { createTransport } from "nodemailer";

export const sendEmail = async (to, subject, text) => {
  const transporter = createTransport(
    {
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
          user: "0bd8e03296bac1",
          pass: "********fd3c"
        }
      }
 );

  await transporter.sendMail({
    to,
    subject,
    text,
  });
};