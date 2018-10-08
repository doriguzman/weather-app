import React, { Component } from "react";
import axios from "axios";
import FiveDay from "./FiveDay";
import Current from "./Current";
import './Current.css'


class Weather extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
      currentData: "",
      fiveDayData: ""
    };
  }

  loadData(input) {
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          input.city
        }&units=${input.unitFormat}&APPID=0b4d245262809c27d15f47cc9c0d60d5`
      )
      .then(res => {
        this.setState({
          currentData: res.data
        });
      });

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          input.city
        }&units=${input.unitFormat}&APPID=0b4d245262809c27d15f47cc9c0d60d5`
      )
      .then(res => {
        this.setState({
          fiveDayData: res.data
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
    const { currentData, fiveDayData } = this.state;

    if (currentData && fiveDayData) {
      return (
        <div className='weather-container'>
          <Current data={currentData} />
          <FiveDay data={fiveDayData} />
        </div>
      );
    }

    return <div> </div>;
  }
}

export default Weather;
