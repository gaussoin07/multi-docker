import React, { useState, useEffect } from "react";
import axios from "axios";

export default () => {
    const [index, setIndex] = useState("");
    const [values, setValues] = useState({});
    const [seenIndexes, setSeenIndexes] = useState([]);

    const fetchValues = async () => {
        try {
            const response = await axios.get("/api/values/current");
            setValues(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    const fetchIndexes = async () => {
        try {
            const response = await axios.get("/api/values/all");
            setSeenIndexes(response.data);
        } catch (e) {
            console.log(e);
        }
    };

    useEffect(() => {
        fetchValues();
        fetchIndexes();
    }, []);

    const onChange = event => setIndex(event.target.value);
    const onSubmit = async event => {
        event.preventDefault();
        await axios.post("/api/values", { index });
        setIndex("");
    };

    const renderSeenIndexes = () => seenIndexes.map(({ number }) => number).join(", ");
    const renderValues = () =>
        values
            ? Object.keys(values).map(k => (
                  <div key={k}>
                      For index {k} I calculated {values[k]}
                  </div>
              ))
            : null;

    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Enter your index:</label>
                <input onChange={onChange} value={index} />
                <button>Submit</button>
            </form>

            <h3>Indexes I have seen</h3>
            {renderSeenIndexes()}

            <h3>Calculated values:</h3>
            {renderValues()}
        </div>
    );
};
