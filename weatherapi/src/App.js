import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import WeatherLocation from "./components/WeatherLocation";
import useFetch from "./components/customHook/useFetch.js";
import WeatherHeadline from "./components/WeatherHeadline";
import WeatherIcon from "./components/WeatherIcon";
import WeatherButton from "./components/WeatherButton";
import WeatherDescriptionLocation from "./components/WeatherDescriptionLocation";
import WeatherDay from "./components/WeatherDay";

import WeatherIconLocation from "./components/WeatherIconLocation";
import { GiWindsock } from "react-icons/gi";
import { GiTopaz } from "react-icons/gi";
import { GiPressureCooker } from "react-icons/gi";
import { BsSun } from "react-icons/bs";

function App() {
  const dataWeather = useFetch();
  const { weather, addLocation, onButtonClick, getTime } = dataWeather;



  return (
    <div className="container">
      <WeatherHeadline />
      <WeatherIcon />
      <WeatherButton onSubmit={onButtonClick} onChange={addLocation} />

      <WeatherHeadline />
      <WeatherDescriptionLocation
        value={`${Math.floor(weather?.main?.temp - 273)}°C`}
        descriptionWeather={weather?.weather[0].description}
      />
      <WeatherIconLocation value={weather?.weather[0].icon} />
      <WeatherLocation
        location={weather?.name}
        country={weather?.sys?.country}
      />
      <BsSun />
      <WeatherInfo
        name={weather?.weather[0].icon.includes("d") ? "sunrise" : "sunset"} value={`${getTime(weather?.sys[weather?.weather[0].icon.includes("d") ? "sunrise" : "sunset"])}`}
      />
      <GiWindsock />
      <WeatherInfo name={"wind"} value={weather?.wind?.speed} />
      <GiTopaz />
      <WeatherInfo name={"humidity"} value={weather?.main?.humidity} />
      <GiPressureCooker />
      <WeatherInfo name={"pressure"} value={weather?.main?.pressure} />
    </div>
  );
}

export default App;
