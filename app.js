if (process.env.NODE_ENV !== "production") {
    require("dotenv").config()
}

const express = require('express');
const app = express();
const axios = require('axios');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/", (req, res) => {
    res.send("This is our backend");
})

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

const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`Server listening on port ${port}`)
})
