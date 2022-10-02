import React, { useState } from "react";
import "./App.css";
import WeatherCity from "./components/WeatherCity";
import WeatherInfo from "./components/WeatherInfo";
import WeatherLocation from "./components/WeatherLocation";
import useFetch from "./components/customHook/useFetch.js";

function App() {
  const dataWeather = useFetch(2);
  const { weather, onSearchLocation } = dataWeather;

  return (
    <div className="container">
      <WeatherCity />
      <div>
        {weather?.name}
        {weather?.sys?.country}
      </div>
      <WeatherInfo name={"wind:"} value={weather?.wind?.speed} />
      <WeatherInfo name={"humidity:"} value={weather?.main?.humidity} />
      <WeatherInfo name={"pressure:"} value={weather?.main?.pressure} />
    </div>
  );
}

export default App;
