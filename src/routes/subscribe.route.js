const {Router} = require("express");
const nodemailer = require("nodemailer");
const {google} = require("googleapis");
require("dotenv").config();
const router = Router();

const oAuth2Client = new google.auth.OAuth2({
    clientId: process.env.clientId,
    clientSecret: process.env.clientSecret,
    redirectUri: process.env.redirectUrl
});

oAuth2Client.setCredentials({refresh_token: process.env.refreshToken });


router.post("/", async (req, res) => {
    const emailToSend = req.body.email;

    const accessToken = await oAuth2Client.getAccessToken();
    const transport = nodemailer.createTransport({
        service: "gmail",
        auth: {
            type: "OAuth2",
            user: "pupaplexcinema@gmail.com",
            clientId: process.env.clientId,
            clientSecret: process.env.clientSecret,
            refreshToken: process.env.refreshToken,
            accessToken
        },
        tls: {
            rejectUnauthorized: false,
        }
    });

    const mailOptions = {
        from: 'pupa-plex-cinema@gmail.com',
        to: emailToSend,
        subject: 'Pupaplex',
        text: 'Ви підписалися на новини'
    };

    transport.sendMail(mailOptions, function(error, info){
        if (error) {
            console.log(error);
            res.status(400);
        } else {
            console.log('Email sent: ' + info.response);
            res.status(200);
        }
    });
});

module.exports = router;