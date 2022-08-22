// Get data
// loop through the data
// Send mail
// import sendEmail from "./Email";
import { mailer } from "./mail";
import data from "./temp_data";

export const mailsToAll = async () => {
  for (let i = 0; i < data.length; i++) {
    const person = data[i];
    console.log("PERSONnnnn>>", person);
    try {
      const res = await mailer.send(
        "WelcomeEmail",
        { firstName: person.Name },
        {
          to: person.Email,
        }
      );

      console.log("RESPONE>>>", res);
    } catch (e) {
      console.log("ERRROR>>>>", e);
    }

    // sendEmail(
    //   person.Email,
    //   "Welcome to the course",
    //   "Welcome to the course",
    //   person
    // );
  }
};
