/** @format */

import { createTransport } from "nodemailer";

const sendEmail = async (email, subject, text, person) => {
  const person_url =
    person.Name.split(" ")[0] + "_" + person.Name.split(" ")[1];

  console.log(person_url);
  try {
    let transporter = createTransport({
      service: "gmail",
      auth: {
        user: "hiteshmarwaha24@gmail.com",
        pass: "colypbuqzlxowvic",
      },
    });

    let mailOptions = {
      from: "hiteshmarwaha24@gmail.com",
      to: email,
      subject: subject,
      text: person_url,
      html: `
      <div>
      <p>Here is the link ${person_url}</p>
      </div>
      `,
    };

    transporter.sendMail(mailOptions, (err, data) => {
      if (err) {
        console.log(err);
      }
      console.log("Email sent!!!");
    });
  } catch (error) {
    console.log("email not sent");
    console.log(error);
  }
};

export default sendEmail;
