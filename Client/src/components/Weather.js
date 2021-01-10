import React from "react";
import { Card, CardContent, Typography } from "@material-ui/core";

function Weather(props) {
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const map = { 7: 0, 8: 1, 9: 2, 10: 3 };
    let index = props.day;
    const data = props.report;
    let icon = data.weather[0].icon;

    index = index > 6 ? map[index] : index;

    const day = days[index];

    return (
        <div className="weather">
            <Card className="card">
                <CardContent>
                    <Typography variant="h5">Day: {day}</Typography>
                    <Typography paragraph>Weather Stats: <br />
                        Temperature: <em>{data.main.temp}&#176;C</em> <br />
                        Condition: <img src={`http://openweathermap.org/img/w/${icon}.png`} alt="" />
                        <em>{data.weather[0].description}</em> <br />
                        Humidity: <em>{data.main.humidity}%</em> <br />
                        Pressure: <em>{data.main.pressure} hPa</em> <br />
                        Wind Speed: <em>{data.wind.speed} m/sec</em> <br />
                    </Typography>
                </CardContent>
            </Card>
        </div>
    )
}

export default Weather;
