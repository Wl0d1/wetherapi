import { useState } from "react";

const useFetch = (id) => {
  const [weather, setWeather] = useState();
  const [textInput, setTextInput] = useState("");

  const API_KEY = "ea5a5a5829f3ab9bed3d41737afb27c3";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${textInput}&appid=${API_KEY}`;

  const onButtonClick = (e) => {
    e.preventDefault();
    fetch(API_URL)
      .then((res) => res.json())
      .then((weather) => setWeather(weather));
  };

  const addLocation = (e) => {
    setTextInput(e.target.value);
  };

  const addHandleChange = (e) => {
    e.preventDefault();
    setTextInput(textInput);
  };

  return { weather, addLocation, onButtonClick, addHandleChange };
};
export default useFetch;
