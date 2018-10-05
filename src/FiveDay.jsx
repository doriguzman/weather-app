import React, { Component } from "react";
import axios from "axios";

class FiveDay extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      city: this.props.city,
      current: "", 
      array:[], 
      testing:''
    };
  }

  callApi(props){
      console.log('in the calling funtion', props)
    axios
    .get(

      `https://api.openweathermap.org/data/2.5/forecast?q=${
        props.city
      }&units=${props.unitFormat}&APPID=0b4d245262809c27d15f47cc9c0d60d5&cnt=7`
    )
    .then(res => {

      this.setState({
          array:res.data,
          testing:props.unitFormat

      //   current: res.data,
      //   temp: res.data.main.temp,
      //   high: res.data.main.temp_max,
      //   low: res.data.main.temp_min,
      //   description: res.data.weather[0].description,
      //   humidity: res.data.main.humidity,
      //   wind: res.data.wind.speed
      });
    });

  }

//   componentWillMount() {
//       this.callApi(this.props)
    // axios
    //   .get(

    //     `https://api.openweathermap.org/data/2.5/forecast?q=${
    //       this.props.city
    //     }&units=${this.props.unitFormat}&APPID=0b4d245262809c27d15f47cc9c0d60d5&cnt=7`
    //   )
    //   .then(res => {

    //     this.setState({
    //         array:res.data,
    //         testing:this.props.unitFormat

    //     //   current: res.data,
    //     //   temp: res.data.main.temp,
    //     //   high: res.data.main.temp_max,
    //     //   low: res.data.main.temp_min,
    //     //   description: res.data.weather[0].description,
    //     //   humidity: res.data.main.humidity,
    //     //   wind: res.data.wind.speed
    //     });
    //   });
//   }
  componentDidMount(){
      this.callApi(this.props)
  }

  render() {
    const {
        data
    //   city,
    //   current,
    //   temp,
    //   high,
    //   low,
    //   description,
    //   humidity,
    //   wind
    } = this.state;
    let metric = this.props.metric;
console.log(this.props)
console.log(this.state)
    return (
      <div className="current-weather-div">
      FIVE DAY BOI 
        {/* <img />
        <h2>Current Weather in {current.name}</h2>
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
        </div>{" "} */}
      </div>
    );
  }
}

export default FiveDay;
