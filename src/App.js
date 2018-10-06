import React, { Component } from "react";
import "./App.css";
// import CurrentWeather from "./CurrentWeather";
import Weather from "./Weather";

class App extends React.Component {
  constructor() {
    super();
    this.radioOptions = ["Kelvin", "Fahrenheit", "Celsius"];
    this.state = {
      submitted: "",
      input: "",
      city: "",
      metric: "Fahrenheit",
      unitFormat: "imperial"
    };
  }

  handleInput = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
    if (e.target.value === "Fahrenheit") {
      this.setState({
        unitFormat: "imperial"
      });
    } else if (e.target.value === "Celsius") {
      this.setState({
        unitFormat: "metric"
      });
    } else if (e.target.value === "Kelvin") {
      this.setState({
        unitFormat: ""
      });
    }
  };

  handleSubmit = e => {
    console.log("submitting");
    e.preventDefault();
    this.setState({
      submitted: true,
      city: this.state.input,
      // input: ""
    });
  };

  render() {
    console.log(this.state);
    const { input, city, current, metric, submitted, unitFormat } = this.state;
    return (
      <div className="body-div">
        <div className="search">
          Your Location{" "}
          <input
            type="text"
            name="input"
            value={input}
            onChange={this.handleInput}
          />
          <button type="submit" onClick={this.handleSubmit}>
            {" "}
            SUBMIT{" "}
          </button>
          <div className="metric">
            Select metric:{" "}
            {this.radioOptions.map(value => (
              <span>
                {" "}
                {value}{" "}
                <input
                  type="radio"
                  name="metric"
                  value={value}
                  checked={metric === value}
                  onChange={this.handleInput}
                />
              </span>
            ))}{" "}
          </div>
        </div>

        {submitted ? (
          
            <Weather
              city={city}
              metric={metric}
              unitFormat={unitFormat}
            />
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
