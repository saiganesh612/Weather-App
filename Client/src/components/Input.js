import React, { useState } from "react";
const axios = require("axios");

function Input(props) {
    const [query, setQuery] = useState("");

    function handleChange(e) {
        setQuery(e.target.value);
    }

    const handleSubmit = async e => {
        e.preventDefault();
        if (query.length !== 0) {
            try {
                const q = { city: query };
                const response = await axios.post("/weather", q);
                props.getData(response.data);
                props.getDisplay();
            } catch (e) {
                alert("The place your are looking was not found :(");
                document.location.reload();
            }
            setQuery("");
        } else {
            alert("Please enter any city name :)");
            document.location.reload();
        }
    }

    return (
        <div className="form-group">
            <form onSubmit={handleSubmit}>
                <input onChange={handleChange} name="city" type="text" placeholder="Enter your location..." value={query} />
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default Input;
