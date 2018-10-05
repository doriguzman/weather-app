import React, {Component} from 'react'

const Current =({data})=>{
return(
    <div className="current-weather-div"> 
    <img />
    <h2>Current Weather in {data.name}</h2>
    <h3>
      {" "}
      {data.weather[0].description} , {data.main.temp}
    </h3>
    <div className="current-Weather-Left">
      <p>
        <span>High:</span> {data.main.temp_max}
        <br />
        <span>Low: </span>
        {data.main.temp_min}
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