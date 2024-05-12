import humidity from './images/temperature.png'
import wind from './images/wind.jpg'

import React from 'react'
const Weather = ({temp,location,country,latitude,longitude,Humidity,Wind,icons}) => {
  return (
    <>
    <img src={icons} alt="no image" id="img"/>
    <h1 id="temp">{temp}°C</h1>
    <h1 id="location">{location}</h1>
    <h1 id="country">{country}</h1>
    <div id="lat-long">
    <div id="lat">
        <p>latitude</p>
        <p id="p-lat">{latitude}</p>
    </div>
    <div id="long">
        <p>longitude</p>
        <p id="p-long">{longitude}</p>
    </div>
    </div>
    
    <div id="Hum-Wind">

    <div id="humidity">
        <img src={humidity} alt="no image" id="Humidity"/>
        <p id="p-lat">{Humidity}%</p>
        <p >Humidity</p>
    </div>

    <div id="windspeed">
        <img src={wind} alt="no image" id="windspeedimg"/>
        <p id="p-lat">{Wind}Km/h</p>
        <p>Wind Speed</p>
    </div>
    
    </div>

    </>
  )
}

export default Weather