require("dotenv").config();
require("./config/database").connect();
const express = require("express");
const bodyParser = require('body-parser');

const app = express();

app.use(express.json());

app.use(bodyParser.urlencoded({
  extended: true
}));

const { SENDGRID_API_KEY } = process.env;
const sgMail = require('@sendgrid/mail');
sgMail.setApiKey(SENDGRID_API_KEY)

app.get("/sendmail/:emplacement/:email", async (req, res) => {

  try {

    const msg = {
      to: req.params.email, // Change to your recipient
      from: 'alexandre.jallan@viacesi.fr', // Change to your verified sender
      subject: 'Confirmation de la réservation',
      text: 'and easy to do anywhere, even with Node.js',
      html: '<strong>pour retrouver votre mobile home, cliquez sur ce lien : <a href="http://localhost:3000/location#'+req.params.emplacement+'">http://localhost:3000/location#'+req.params.emplacement+'</a></strong>',
    }

    sgMail
      .send(msg)
      .then((response) => {
        console.log(response[0].statusCode)
        console.log(response[0].headers)
      })
      .catch((error) => {
        console.error(error)
      })

  } catch (err) {
    console.log(err);
  }
});


module.exports = app;