import { useState, useEffect } from "react";

const useFetch = (id) => {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("");

  const API_KEY = "ea5a5a5829f3ab9bed3d41737afb27c3";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((weather) => setWeather(weather));
  }, []);

  // const WeatherComponent = (props) => {
  //   const {weather} = props;
  //   const isDay = weather?.weather[0].icon?.includes('d')
  //   const getTime = (time) => {
  //       return `${new Date(time * 1000).getHours()} : ${new Date(time * 1000).getMinutes()}`
  //   }
  // }

  return { weather };
};
export default useFetch;
