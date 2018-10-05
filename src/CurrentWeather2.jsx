import React, { Component } from "react";
import axios from "axios";

class CurrentWeather2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
      data: ""
    };
  }

  loadData(input) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          input.city
        }&units=${
          input.unitFormat
        }&APPID=0b4d245262809c27d15f47cc9c0d60d5&cnt=7`
      )
      .then(res => {
        this.setState({
          data: res.data,
          city: res.data.name,
          temp: res.data.main.temp,
          high: res.data.main.temp_max,
          low: res.data.main.temp_min,
          description: res.data.weather[0].description,
          humidity: res.data.main.humidity,
          wind: res.data.wind.speed
        });
      });
  }

  componentDidMount() {
    this.loadData(this.props);
  }

  componentWillReceiveProps(nextProps) {
    if (this.props !== nextProps) {
      console.log("newprops");
      this.loadData(nextProps);
    }
  }

  render() {
    const {
      data,
      city,
      current,
      temp,
      high,
      low,
      description,
      humidity,
      wind
    } = this.state;

    return (
      <div className="current-weather-div">
        <img />
        <h2>Current Weather in {data.name}</h2>
        <h3>
          {" "}
          {description} , {temp}
        </h3>
        <div className="current-Weather-Left">
          <p>
            <span>High:</span> {high}
            <br />
            <span>Low: </span>
            {low}
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

export default CurrentWeather2;
