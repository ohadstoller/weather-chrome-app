import {dateBuilder} from "../utils/datebuilder";
import React from "react";

export function WeatherBox(props) {
  return <div>
    <div className="location-box">
      <div className="location">{props.weather.name}, {props.weather.sys.country}</div>
      <div className="date">{dateBuilder(new Date())}</div>
    </div>
    <div className="weather-box">
      <div className="temperature">
        {Math.round(props.weather.main.temp)}°c
      </div>
      <div className="weather">{props.weather.weather[0].main}</div>
    </div>
  </div>;
}