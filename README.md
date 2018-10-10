# Live

[Click here to check out the app!](https://dori-weather-app.netlify.com/)

# Weather App

Landing Page 
<img src="./public/preview/home.png" />
IMG

Once a valid city is submitted

IMAGE 

## Thought Process on App

* I wanted to implement a simple, user-friendly, and attractive weather app.
* Originally the [OpenWeatherMap forecast API](https://openweathermap.org/forecast16) given is a paid api. Thus I decided to use two apis: one for the [Current Weather] (https://openweathermap.org/current) and one for the [Five Day Forecast] (https://openweathermap.org/forecast5). 
* People use different units to measure temperature, so I'm giving people the option to choose their preferred measurement through radio buttons. 
* For the current weather I wanted to display only the most important data as to not overwhelm the user. Thus only displaying:
 day/date, weather description, wind speed,  humidity, and  high/lows for that day. 

  - Tradeoffs: 
* The five day api returned the weather forecast for 5 days with data every 3 hours by city name- which was a lot of information.    Therefore, I decided to only display the five day weather at the peak time in the day (which is 12pm). 

* I wanted to display the high/lows for the five days, however the five day forecast api stated that the min/max temperature they provided are the mean min/max temperatures in the city at that moment- which they provided to see the deviation from the temperature they give for reference. 

## Future Features:
* Implement usage of zipcodes 
* Use the five day forcast api to full extent: OnClick of day it would expand and show the weather every 3 hours for that day. 
* fix css of submit bar to be more visually appealing. 


## Built Using:  
* [Open Weather Map API](https://openweathermap.org/api)
* JavaScript(ES2016)
* React
* CSS

## Available Scripts
Clone this repo and follow the instructions below to get the application running locally. 

In the project directory, you can run:
  - [npm start](#npm-start)
  - [npm test](#npm-test)
  - [npm run build](#npm-run-build)
  - [npm run eject](#npm-run-eject)

### `npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.<br>
See the section about [running tests](#running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!

See the section about [deployment](#deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (Webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.


