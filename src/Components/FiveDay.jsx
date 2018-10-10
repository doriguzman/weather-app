import React from "react";
import '../Stylesheets/FiveDay.css'


const FiveDay = ({ data }) => {
  
  // constructing an array of day objects
  let obj = [];

  // using the days array to help display the abbreviated day
  let days = [
    "SUN",
    "MON",
    "TUE",
    "WED",
    "THU",
    "FRI",
    "SAT"
  ];


  // the data.list return an array of 40 objects
  //we are retrieving the weather data everyday at 12pm

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
    <div className="five-day-weather">
      {obj.map(elem => {
        return (
          <div className="card">
           <div className='day'> <p>{elem.day}</p></div>
           <div className='five-day-img-container'> <img className='five-day-img' src={`http://openweathermap.org/img/w/${elem.icon}.png`} alt='forecast-icon'/></div>
            <div className='temp'>
              {elem.max_temp}&deg;
              
              {/* {elem.min_temp} */}
            
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default FiveDay;
