import { Mailer } from "nodemailer-react";

console.log("WOHO");
const defaults = {
  from: "hiteshmarwaha24@gmail.com",
};

const transport = {
  host: "gmail.com",
  secure: true,
  auth: { user: "hiteshmarwaha24@gmail.com", pass: "colypbuqzlxowvic" },
};

export const WelcomeEmail = ({ firstName }) => ({
  subject: `👋 ${firstName}`,
  body: (
    <div>
      <p>Hello {firstName}!</p>
      <p>Hope you'll enjoy the package!</p>
    </div>
  ),
});

export const mailer = Mailer({ transport, defaults }, { WelcomeEmail });
