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
        user: "ayush@acciojob.com",
        pass: "govinda@ayush",
      },
    });

    let mailOptions = {
      from: "ayush@acciojob.com",
      to: email,
      subject: `AccioJob: Here is your Placement Report ${person.Name}`,
      text: person_url,
      html: `
      <div>
        Hey <b>${person.Name}</b>!<br/><br/>
        Are you ready for your placements? Let’s find out!<br/>
        <p><b>Here is the link: </b>https://placment-readiness-report.vercel.app/${person_url}</p>

        Check the attached placement readiness report link to find your areas of expertise and where you need to improve.<br/><br/>
        Buckle up for your college placements!!<br/><br/>
        <i>If you want to be an SDE in a top tech company, but don’t know where to start. AccioJob is the right place for you.</i><br/><br/>
        <i>AccioJob is an IIT Delhi alumni-led company that provides six month Pay after Placement Full Stack Web Dev course. During the course, candidates are trained on Data Structures and Algorithms, Full Stack Web Development and backend web development. Their students are already working at Amazon, Walmart, VISA, BharatPe, Paytm, ThoughtWorks and 190+ more companies.</i><br/><br/>
        <p>www.acciojob.com<br/><i>10th Floor, Paras Trinity, Sector 63, Gurgaon</i></p>
        
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
