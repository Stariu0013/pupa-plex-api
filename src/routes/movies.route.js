const {Router} = require("express");
const nodemailer = require("nodemailer");
// const { google } = require("googleapis");
const { CURRENT_MOVIES, FEATURED_MOVIES} = require("../mockData/moviesMockData");
require("dotenv").config();

const router = Router();
// const oAuth2Client = new google.auth.OAuth2({
//     clientId: process.env.clientId,
//     clientSecret: process.env.clientSecret,
//     redirectUri: process.env.redirectUrl
// });
//
// oAuth2Client.setCredentials({refresh_token: process.env.refreshToken });


router.get("/all-movies/", (req, res) => {
    res.status(200).send({
        current: CURRENT_MOVIES,
        featured: FEATURED_MOVIES,
    });
});

router.get("/current-movies/", (req, res) => {
    const movieId = req.query.id;

    if (movieId) {
        const movie = CURRENT_MOVIES.find(el => el.id === Number(movieId));

        if (movie) {
            res.status(200).send(movie);
        } else {
            res.status(400).send("Movie not found");
        }
    } else {
        res.status(200).send(CURRENT_MOVIES)
    }
});

router.get("/featured-movies/", (req, res) => {
    const movieId = req.query.id;

    if (movieId) {
        const movie = FEATURED_MOVIES.find(el => el.id === Number(movieId));

        if (movie) {
            res.status(200).send(movie);
        } else {
            res.status(400).send("Movie not found");
        }
    } else {
        res.status(200).send(FEATURED_MOVIES)
    }
});
//
// router.post("/receipt", (req, res) => {
//     const {
//         name,
//         lastname,
//         email,
//         seats,
//         price,
//     } = req.body;
//
//     // const accessToken = await oAuth2Client.getAccessToken();
//     const transport = nodemailer.createTransport({
//         service: "gmail",
//         auth: {
//             type: "OAuth2",
//             user: "pupaplexcinema@gmail.com",
//             clientId: process.env.clientId,
//             clientSecret: process.env.clientSecret,
//             refreshToken: process.env.refreshToken,
//             accessToken: process.env.accessToken
//         },
//         tls: {
//             rejectUnauthorized: true,
//         }
//     });
//
//     const mailOptions = {
//         from: 'pupa-plex-cinema@gmail.com',
//         to: email,
//         subject: 'Tickets receipt',
//         text: `
//             ${name} ${lastname} ви придбали ${seats.length} на суму ${price}
//         `
//     };
//
//     transport.sendMail(mailOptions, function(error, info){
//         if (error) {
//             console.log(error);
//             res.status(400);
//         } else {
//             console.log('Email sent: ' + info.response);
//             res.status(200);
//         }
//     });
// });

module.exports = router;