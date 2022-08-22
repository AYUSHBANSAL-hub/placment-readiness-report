import express from "express";
import Cors from "cors";
import data from "./temp_data.js";
import sendEmail from "./Email.js";

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(Cors());

const mailsToAll = () => {
  for (let i = 0; i < data.length; i++) {
    const person = data[i];
    console.log("PERSONnnnn>>", person);
    try {
      const res = sendEmail(person.Email, "Welcome to the family", "", person);

      console.log("RESPONE>>>", res);
    } catch (e) {
      console.log("ERRROR>>>>", e);
    }
  }
};

app.get("/sendMail", (req, res) => {
  mailsToAll();
  res.send("WOHO mail sent");
});

// Route handler for the default home page
app.get("/", (req, res) => {
  res.send("Hello World!");
});

const port = process.env.PORT || 3001;
// start the express server
app.listen(port, () => {
  // tslint:disable-next-line:no-console
  console.log(`server started at http://localhost:${port}`);
});
