import React, { Component } from "react";
import axios from "axios";
import FiveDay from "./Components/FiveDay";
import Current from "./Components/Current";
import './Current.css'


class Weather extends React.Component {
  constructor(props) {
    console.log('PROPS',props.valid)

    super(props);
    this.state = {
      city: this.props.city,
      currentData: "",
      fiveDayData: "",
      valid:false
    };
  }
 

  loadData(input) {
    console.log('hi')
  
    console.log(input.unitFormat)
    console.log(input)
    axios
      .get(
        `https://api.openweathermap.org/data/2.5/weather?q=${
          input.city
        }&units=${input.unitFormat}&APPID=654b4bc63dca7307ee635f91f0d41465

        `
      )
      .then((res) => {
        this.setState({
          currentData: res.data,
        });
      })
      .catch((error)=>{
        console.log(error)
        this.setState({
          valid:false
        })
      })
      

    axios
      .get(
        `https://api.openweathermap.org/data/2.5/forecast?q=${
          input.city
        }&units=${input.unitFormat}&APPID=654b4bc63dca7307ee635f91f0d41465

        `
      )
      .then((res) => {
        this.setState({
          fiveDayData: res.data,
          errorMessage:'', 
          valid:true
        });

      })
      .catch((error)=>{
        this.setState({
          valid:false
        })
        console.log(error)
      });
   
  }


  componentDidMount() {
    this.loadData(this.props);
    
  }

  componentWillReceiveProps(nextProps) {
    console.log(nextProps)
    
    if (this.props !== nextProps) {
      console.log("newprops", nextProps);
      this.loadData(nextProps);
    }
  }




  render() {
    const { currentData, fiveDayData, errorMessage } = this.state;
    console.log(this.state)

   
  
  if (currentData && fiveDayData) {
      return (
        <div className='weather-container'>
          <Current data={currentData} metric={this.props.metric}/>
          <FiveDay data={fiveDayData} />
        </div>
      );
    }

    return <div > </div>;
  }
}

export default Weather;
