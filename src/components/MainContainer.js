
import React from "react";

const MainContainerText = (props) => {
  if (!Object.keys(props.data).length) {
    return <div>...loading...data...</div>;
  } else if (!Object.keys(props.dataText).length) {
    return (
      <div>
        <h2>{props.data.name}</h2>
        <h2>{props.data.sys.country}</h2>
        <h3>{props.data.main.temp - 273.15}° Celsius</h3>
        <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png?appid=d912839c4460e5222e6b782129c7fff4`} alt="" />
        <h3>{props.data.weather[0].main}</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{props.dataText.name}</h2>
        <h2>{props.dataText.sys.country}</h2>
        <h3>{props.dataText.main.temp - 273.15}° Celsius</h3>
        <img src={`http://openweathermap.org/img/wn/${props.dataText.weather[0].icon}.png?appid=d912839c4460e5222e6b782129c7fff4`} alt="" />
        <h3>{props.dataText.weather[0].main}</h3>
      </div>
    );
  };
};

const MainContainerName = (props) => {
  if (!Object.keys(props.data).length) {
    return <div>...loading...data...</div>;
  } else if (!Object.keys(props.dataName).length) {
    return (
      <div>
        <h2>{props.data.name}</h2>
        <h2>{props.data.sys.country}</h2>
        <h3>{props.data.main.temp - 273.15}° Celsius</h3>
        <img src={`http://openweathermap.org/img/wn/${props.data.weather[0].icon}.png?appid=d912839c4460e5222e6b782129c7fff4`} alt="" />
        <h3>{props.data.weather[0].main}</h3>
      </div>
    );
  } else {
    return (
      <div>
        <h2>{props.dataName.name}</h2>
        <h2>{props.dataName.sys.country}</h2>
        <h3>{props.dataName.main.temp - 273.15}° Celsius</h3>
        <img src={`http://openweathermap.org/img/wn/${props.dataName.weather[0].icon}.png?appid=d912839c4460e5222e6b782129c7fff4`} alt="" />
        <h3>{props.dataName.weather[0].main}</h3>
      </div>
    );
  };
};

export {MainContainerText, MainContainerName};