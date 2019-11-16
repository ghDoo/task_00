
import React, { useState, useEffect } from 'react';

import ReactDOM from "react-dom";

import {MainContainerText, MainContainerName} from "./components/MainContainer";
import MainForm from "./components/MainForm";

import "./styles.css";


const App = () => {

    const [data, setResponse] = useState({});
    const [dataText, setResponseText] = useState({});
    const [dataName, setResponseName] = useState({});
    const [error, setError] = useState("");
    const [name, setName] = useState("");

    console.log(name);
    console.log(error);

    useEffect(() => {
        const FetchData = async () => {
            try {
                const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=Kaunas&APPID=d912839c4460e5222e6b782129c7fff4`);
                const json = await res.json();
                setResponse(json);
            } catch {
                setError(error)
        }};
        FetchData();
    }, [error]);

    const onSubmitText = (event, text) => {
        event.preventDefault();
        const FetchText = async () => {
            try {
              const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${text}&APPID=d912839c4460e5222e6b782129c7fff4`);
              const json = await res.json();
              setResponseText(json);
            } catch {
                setError(error)
        }};
        FetchText();
    };

    const onSubmitName = (event, name) => {
        event.preventDefault();
        const FetchText = async () => {
            try {
              const res = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${name}&APPID=d912839c4460e5222e6b782129c7fff4`);
              const json = await res.json();
              setResponseName(json);
            } catch {
                setError(error)
        }};
        FetchText();
    };

    const handleChange = (event) => {
        setName(event.target.value);
    };

    return (
        <div className="App">
            <h1>Weather app</h1>
            <h2>What would you like to see?</h2>
            <MainForm onSubmitText={onSubmitText} />
            <br />
            <form onSubmit={event => onSubmitName(event, name)}>
                <input type="text" name="name" value={name} onChange={handleChange} />
                <button>Click Me</button>
            </form>
            <MainContainerText data={data} dataText={dataText} />
            <MainContainerName data={data} dataName={dataName} />
        </div>
    );
};

export default App;

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);