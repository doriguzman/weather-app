import React, { Component } from "react";
import "./Current.css";
const Current = ({ data }) => {
  console.log(data);
  let days = [
    "SUNDAY",
    "MONDAY",
    "TUESDAY",
    "WEDNESDAY",
    "THURSDAY",
    "FRIDAY",
    "SATURDAY"
  ];
  let date = new Date();
  let month= date.getUTCMonth()+1 //month from 1-12 
  let day = date.getUTCDate();
  let year = date.getUTCFullYear();
  let fullDate= day + '/' + month + '/' + year
  let currentDay = days[date.getDay()];
  console.log(date);
  console.log(currentDay);
  return (
    <div className="current-weather">
      <div className="top-line">
        <div className="top-line-left">{data.name}</div>
        <div className="top-line-right">
          <i className="fa fa-long-arrow-down" />{" "}
          {Math.round(data.main.temp_min)}
          &deg;
          <span>
            <i className="fa fa-long-arrow-up"  />{" "}
            {Math.round(data.main.temp_max)}
            &deg;
          </span>
        </div>
      </div>
      <div className="middle">
        <div className="middle-left">
          <p className="date">
          <span className='todays-day'>{currentDay}</span> 
            <br />
           <span className='full-date'>{fullDate} </span>
             </p>

             <p className="weather-details">
            <span >
              Wind: {data.wind.speed}
              <br />
              Humidity: {data.main.humidity}%
            </span>
          </p>
        </div>
        <div className="middle-center">
          <img
            src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
          />

         <p className='weather-description'> {data.weather[0].description}</p>
        </div>
        <div className="middle-right">
           {Math.round(data.main.temp)}&deg;
        </div>
      </div>
  
    </div>
  );
};

export default Current;
