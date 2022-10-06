import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import WeatherLocation from "./components/WeatherLocation";
import useFetch from "./components/customHook/useFetch.js";
import WeatherHeadline from "./components/WeatherHeadline";
import WeatherIcon from "./components/WeatherIcon";
import WeatherButton from "./components/WeatherButton";
import WeatherDescriptionLocation from "./components/WeatherDescriptionLocation";
import WeatherInfoContainerAll from "./components/WeatherInfoContainerAll";
import WeatherInfoContainer from "./components/WeatherInfoContainer";

import WeatherIconLocation from "./components/WeatherIconLocation";
import { GiWindsock } from "react-icons/gi";
import { GiTopaz } from "react-icons/gi";
import { GiPressureCooker } from "react-icons/gi";
import { BsSun } from "react-icons/bs";


function App() {
  const dataWeather = useFetch();
  const {weather, addLocation, onButtonClick, getTime } = dataWeather;

  const isDay = weather?.weather[0].icon.includes("d");

  return (
    <div className="container">
      <>
        <WeatherHeadline />
        <WeatherIcon />
        <WeatherButton onSubmit={onButtonClick} onChange={addLocation} />
      </>

      <>
        <WeatherHeadline />
        <WeatherDescriptionLocation
          value={`${Math.floor(weather?.main?.temp - 273)}°C`}
          descriptionWeather={weather?.weather[0].description}
        />
        <WeatherIconLocation icon={weather?.weather[0].icon} />
        <WeatherLocation
          location={weather?.name}
          country={weather?.sys?.country}
        />
        <WeatherInfoContainerAll>
          <WeatherInfoContainer>
            <BsSun />
            <WeatherInfo
              name={isDay ? "sunrise" : "sunset"}
              value={`${getTime(weather?.sys[isDay ? "sunrise" : "sunset"])}`}
            />
          </WeatherInfoContainer>
          <WeatherInfoContainer>
            <GiWindsock />
            <WeatherInfo name={"wind"} value={weather?.wind?.speed} />
          </WeatherInfoContainer>
          <WeatherInfoContainer>
            <GiTopaz />
            <WeatherInfo name={"humidity"} value={weather?.main?.humidity} />
          </WeatherInfoContainer>
          <WeatherInfoContainer>
            <GiPressureCooker />
            <WeatherInfo name={"pressure"} value={weather?.main?.pressure} />
          </WeatherInfoContainer>
        </WeatherInfoContainerAll>
      </>
    </div>
  );
}

export default App;
