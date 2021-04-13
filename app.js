if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require('express');
const app = express();
const axios = require('axios');
const path = require("path");
const rateLimit = require("express-rate-limit");

const limiter = new rateLimit({
    windowMs: 1000 * 60 * 60 * 1,
    max: 5,
    message: "To many requests from this IP"
})

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(limiter)

app.post("/weather", async (req, res) => {
    try {
        const { city } = req.body;
        const url = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${process.env.API_KEY}&cnt=5&units=metric`;
        const response = await axios.get(url);
        res.json(response.data);
    } catch (err) {
        res.status(500).send("The place your are looking was not found :(");
    }
})

// Serve static assests if in production
if (process.env.NODE_ENV === "production") {
    //Set static folder
    app.use(express.static(path.join(__dirname, "Client/build")));

    app.get("*", (req, res) => {
        res.sendFile(path.join(__dirname, "Client", "build", "index.html"))
    })
}

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
