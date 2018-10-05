import React, { Component } from "react";

class CurrentWeather extends React.Component {

  render() {
    const {
      data,
      description,
      metric,
      temp,
      high,
      low,
      wind,
      humidity
    } = this.props;
    let newTemp;
    let newLow;
    let newHigh;

    console.log("in curr weather", this.props);

    if (metric === "Fahrenheit") {
      newTemp = Math.round((temp * 9) / 5 - 459.67) + ' F'
      newHigh = Math.round((high * 9) / 5 - 459.67) + ' F'
      newLow = Math.round((low * 9) / 5 - 459.67) + ' F'
    } else if (metric === "Celsius") {
      newTemp = Math.round(temp - 273.5) + ' C'
      newHigh = Math.round(high - 273.5) +  ' C'
      newLow = Math.round(low - 273.5) +  ' C'
    } else if (metric === "Kelvin") {
      newTemp = Math.round(temp) + ' K'
      newHigh = Math.round(high)+ ' K'
      newLow = Math.round(low)+ ' K'
    }

    return (
      <div className="current-weather-div">
        <img />
        <h2>Current Weather in {data.name}</h2>
        <h3>
          {" "}
          {description}, {newTemp}
        </h3>
        <div className="current-Weather-Left">
          <p>
            <span>High:</span> {newHigh}
            <br />
            <span>Low: </span>
            {newLow}
          </p>
        </div>
        <div>
          <p>
            <span>Wind: </span>
            {wind}
            <br />
            <span>Humidity: </span>
            {humidity}%
          </p>
        </div>{" "}
        
      </div>
    );
  }
}

export default CurrentWeather;
