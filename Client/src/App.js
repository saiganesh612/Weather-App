import React, { useState } from "react";
import Header from "./components/Header";
import Input from "./components/Input";
import Weather from "./components/Weather";
import Footer from "./components/Footer";

function App() {
    const [json, setJson] = useState({});
    const [display, setDisplay] = useState(false);
    const day = new Date().getDay();

    const days = [];
    for (let i = 0; i < 5; i++) {
        days.push(day + i);
    }

    function setData(data) {
        setJson(data);
    }

    function setCards() {
        setDisplay(true);
    }

    return (
        <div>
            <Header />
            <Input getData={setData} getDisplay={setCards} />
            {display && <h1>5-Day ForeCast for {json.city.name}</h1>}
            {display &&
                days.map((day, index) => {
                    return <Weather key={index} day={day} report={json.list[index]} />
                })
            }
            <Footer />
        </div>
    )
}

export default App;
