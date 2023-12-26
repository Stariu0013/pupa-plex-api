const express = require("express");
const cors = require("cors");

const index = express();
const PORT = 8000 || process.env.PORT;

index.use(express.json({extended: true}));
index.use(cors());

index.use("/movies/", require("./routes/movies.route"));
index.use("/subscribe/", require("./routes/subscribe.route"));

index.listen(PORT, () => {
    console.log("App has started on port", PORT);
})