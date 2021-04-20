const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");
const { google } = require("googleapis");

const CLIENT_ID = '1093868991042-0bb5dkbe69bcl7q5m1vcsmuc7p802l22.apps.googleusercontent.com';
const CLIENT_SECRET = 'GX3O4rtMgbHzlCKsPnQ_K1fU';
const REDIRECT_URI = 'https://developers.google.com/oauthplayground';
const REFRESH_TOKEN = '1//04S5kdpIYxSuDCgYIARAAGAQSNwF-L9IrRDQ3dIAIPd6NSGxoab1oMZGZTH448sOWcSuv9Z3-HvPvS34V6Uai_k1_5e4wQeX04Tk';

const oAuth2Client = new google.auth.OAuth2(CLIENT_ID, CLIENT_SECRET, REDIRECT_URI);
oAuth2Client.setCredentials({ refresh_token: REFRESH_TOKEN });

const details = require("./details.json");

const app = express();
app.use(cors({ origin: "*" }));
app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
        res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
        return res.status(200).json({});
    }
    next();
});


app.post('/sendmail/', (req, res) => {
    console.log('Email request has come...');
    // let user = {
    //     name: req.body.name,
    //     email: req.body.email,
    //     message: req.body.message
    // };
    let user = req.body;

    console.log(user);
    sendMail(user => {
        console.log(`The email has been sent from user`);
        res.send(user);
        console.log(user);
    });
});

async function sendMail(user) {
    try {
        const accessToken = await oAuth2Client.getAccessToken();

        const transport = nodemailer.createTransport({
            service: 'gmail',
            auth: {
                type: 'OAuth2',
                user: 'extensiontlhareseng@gmail.com',
                clientId: CLIENT_ID,
                clientSecret: CLIENT_SECRET,
                refreshToken: REFRESH_TOKEN,
                accessToken: accessToken
            }
        });

        const mailOptions = {
            from: `${user.name} <mogomotsikoki@gmail.com>`,
            to: 'extensiontlhareseng@gmail.com',
            Subject: 'Hello Extension',
            text: 'I would like to discuss apotential partnership with you.',
            html: '<h3>I would like to discuss apotential partnership with you.</h3>'
        }

        const result = await transport.sendMail(mailOptions);
        return result;

    } catch (error) {
        return error;
    }
}

app.listen(3000, () => {
    console.log("The server started on port 3000 !!!!!!");
});
