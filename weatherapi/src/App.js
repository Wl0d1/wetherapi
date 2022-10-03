import React, { useState } from "react";
import "./App.css";
import WeatherCity from "./components/WeatherCity";
import WeatherInfo from "./components/WeatherInfo";
import WeatherLocation from "./components/WeatherLocation";
import useFetch from "./components/customHook/useFetch.js";
import WeatherHeadline from "./components/WeatherHeadline";
import WeatherIcon from "./components/WeatherIcon";
import WeatherButton from "./components/WeatherButton";

function App() {
  const dataWeather = useFetch(2);
  const { weather, addLocation } = dataWeather;

  return (
    <div className="container">

      <WeatherHeadline />
      <WeatherIcon />
      <WeatherButton />
        {/* {weather?.name}
        {weather?.sys?.country} */}
      <WeatherLocation location={weather?.name} />
      <WeatherInfo name={"wind:"} value={weather?.wind?.speed} />
      <WeatherInfo name={"humidity:"} value={weather?.main?.humidity} />
      <WeatherInfo name={"pressure:"} value={weather?.main?.pressure} />
    </div>
  );
}

export default App;
