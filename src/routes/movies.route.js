const {Router} = require("express");
const nodemailer = require("nodemailer");
const { CURRENT_MOVIES, FEATURED_MOVIES} = require("../mockData/moviesMockData");

const router = Router();

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

router.post("/receipt", (req, res) => {
    const {
        name,
        lastname,
        email,
        seats,
        price,
    } = req.body;

    console.log({
        name,
        lastname,
        email,
        seats,
        price,
    })

    const transporter = nodemailer.createTransport({
        host: 'smtp.gmail.com',
        port: 465,
        secure: true,
        auth: {
            user: 'pupaplexcinema@gmail.com',
            pass: 'ceva byhb zgsh qzne'
        },
    });

    const mailOptions = {
        from: 'pupa-plex-cinema@gmail.com',
        to: email,
        subject: 'Tickets receipt',
        text: `
            ${name} ${lastname} ви придбали ${seats.length} на суму ${price}
        `
    };

    transporter.sendMail(mailOptions, function(error, info){
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