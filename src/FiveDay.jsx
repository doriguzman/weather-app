import React, { Component } from "react";
import axios from "axios";

const FiveDay = ({ data }) => {
  console.log(data);
  // the data.list return an array of 40 objects
  //at every 8th it returns a new day
  let obj = [];
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday"
  ];
  for (let i = 0; i < data.list.length; i ++) {
      if(data.list[i].dt_txt.slice(11,13) ==='12'){
    let date = new Date(data.list[i].dt_txt);

    let day = {
        reg:data.list[i].dt_txt,
      day: days[date.getDay()],
      icon: data.list[i].weather[0].icon,
      temp: Math.round(data.list[i].main.temp),
      min_temp: Math.round(data.list[i].main.temp_min),
      max_temp: Math.round(data.list[i].main.temp_max),
      wind: data.list[i].wind.speed,
      humidity: data.list[i].main.humidity,
      description: data.list[i].weather[0].description
    };
    obj = [...obj, day];
  }
}

  console.log(obj);
  return (
    <div className="five-day-weather-div">
      5 day
      {obj.map(elem => {
        return (
          <div className="card">
            <h2> {elem.day}</h2>
            <img src={`http://openweathermap.org/img/w/${elem.icon}.png`}/>
            <h3>
              {elem.max_temp}
              <br />
              {/* {elem.min_temp} */}
            </h3>
          </div>
        );
      })}
    </div>
  );
};

export default FiveDay;
