import { useState, useEffect } from "react";

const useFetch = () => {
  const [weather, setWeather] = useState();
  const [textInput, setTextInput] = useState("");

  const API_KEY = "ea5a5a5829f3ab9bed3d41737afb27c3";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=${API_KEY}`;

  const onButtonClick = (e) => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((weather) => setWeather(weather));
  };


  useEffect(() => {
    const timer = setTimeout(() => {
      onButtonClick()
    },5000,)
    return () => clearTimeout(timer)
  }, [textInput])

  

  const getTime = (timestamp) => {
    return `${new Date(timestamp * 1000).getHours()} : ${new Date(
      timestamp * 1000
    ).getMinutes()} : ${new Date(timestamp * 1000).getSeconds()}`;
  };

  return { weather, setTextInput , onButtonClick, getTime };
};
export default useFetch;
