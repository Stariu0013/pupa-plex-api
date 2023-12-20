const express = require("express");
const cors = require("cors");

const app = express();
const PORT = 8000 || process.env.PORT;

app.use(express.json({extended: true}));
app.use(cors());

app.use("/movies/", require("./routes/movies.route"));
app.use("/subscribe/", require("./routes/subscribe.route"));

app.listen(PORT, () => {
    console.log("App has started on port", PORT);
})