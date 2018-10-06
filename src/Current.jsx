import React, {Component} from 'react'

const Current =({data})=>{
return(
    <div className="current-weather-div"> 
    <img src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}/>
    <h2>Current Weather in {data.name}</h2>
    <h3>
      {" "}
      {data.weather[0].description} , {Math.round(data.main.temp)}
    </h3>
    <div className="current-Weather-Left">
      <p>
        <span>High:</span> {Math.round(data.main.temp_max)}
        <br />
        <span>Low: </span>
        {Math.round(data.main.temp_min)}
      </p>
    </div>
    <div>
      <p>
        <span>Wind: </span>
        {data.wind.speed}
        <br />
        <span>Humidity: </span>
        {data.main.humidity}%
      </p>
    </div>{" "}
  </div>
)
}



export default Current; 