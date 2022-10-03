import { useState, useEffect } from "react";

const useFetch = (id) => {
  const [weather, setWeather] = useState();
  const [location, setLocation] = useState("");
  const [textInput, setTextInput] = useState('')

  const API_KEY = "ea5a5a5829f3ab9bed3d41737afb27c3";
  const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${API_KEY}`;

  useEffect(() => {
    fetch(API_URL)
      .then((res) => res.json())
      .then((weather) => setWeather(weather));
  }, []);

  const addLocation = (e) => {
    setTextInput(e.target.value)
  }


  return { weather, addLocation };
};
export default useFetch;
