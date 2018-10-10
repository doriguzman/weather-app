import React, { Component } from "react";
import "./App.css";
import axios from "axios";
// import Weather from "./Weather";
import FiveDay from "./FiveDay";
import Current from "./Current";
class App extends React.Component {
  constructor() {
    super();
    this.radioOptions = ["Kelvin", "Celsius", "Fahrenheit"];
    this.unitFormatObj = {
      Kelvin: "",
      Celsius: "metric",
      Fahrenheit: "imperial"
    };
    this.state = {
      valid: false,
      input: "",
      city: "",
      metric: "Fahrenheit",
      unitFormat: "imperial",
      errorMessage: ""
    };
  }

  handleInput = e => {
    let unitFormat;
    this.setState({
      [e.target.name]: e.target.value
    });

    if (e.target.name === "metric") {
      unitFormat = this.unitFormatObj[e.target.value];
      this.setState({
        unitFormat: this.unitFormatObj[e.target.value]
      });
      this.renderApi(this.state.city, unitFormat);
    }
  };

  renderApi = (city, unitFormat) => {
    axios
      .all([
        axios.get(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unitFormat}&APPID=654b4bc63dca7307ee635f91f0d41465`
        ),
        axios.get(
          `https://api.openweathermap.org/data/2.5/forecast?q=${city}&units=${unitFormat}&APPID=654b4bc63dca7307ee635f91f0d41465`
        )
      ])
      .then(
        axios.spread((currentRes, fiveDayRes) => {
          this.setState({
            valid: true,
            currentData: currentRes.data,
            fiveDayData: fiveDayRes.data,
            errorMessage: ""
          });
        })
      )
      .catch(error => {
        this.setState({
          errorMessage: "Enter a valid city (i.e. San Francisco)"
        });
      });
  };

  handleSubmit = e => {
    console.log("submitting");
    this.setState({
      city: this.state.input
    });
    this.renderApi(this.state.input, this.state.unitFormat);
  };

  render() {
    console.log(this.state);
    const {
      input,
      city,
      current,
      metric,
      submitted,
      unitFormat,
      errorMessage,
      valid,
      currentData,
      fiveDayData
    } = this.state;
    return (
      <div className="App">
        <div className={valid ? "submit-top" : "submit-center"}>
          {/* submit-center */}
          <div className={valid ? "title-top" : "title-center"}>
            {" "}
            <h2> Weather App</h2>{" "}
          </div>
          <div className={valid ? "location-top" : "location-center"}>
            <label>City</label>
            <input
              className={valid ? "text-input-top" : "text-input-center"}
              type="text"
              name="input"
              value={input}
              onChange={this.handleInput}
            />
            <button
              type="submit"
              className={valid ? "button-top" : ""}
              onClick={this.handleSubmit}
            >
              <i class="fa fa-search" />
            </button>
            <div
              className={valid ? "error-message-top" : "error-message-center"}
            >
              {errorMessage}{" "}
            </div>
          </div>

          <div className={valid ? "metric-top" : "metric-center"}>
            {/* <label>Metric:</label> */}
            {this.radioOptions.map(value => (
              <span>
                {" "}
                {value}{" "}
                <input
                  className="radio"
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

        {valid ? (
          <div>
            <Current data={currentData} metric={metric} />
            <FiveDay data={fiveDayData} />
          </div>
        ) : (
          ""
        )}
      </div>
    );
  }
}

export default App;
