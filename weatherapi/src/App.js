import "./App.css";
import WeatherInfo from "./components/WeatherInfo";
import WeatherLocation from "./components/WeatherLocation";
import useFetch from "./components/customHook/useFetch.js";
import WeatherHeadline from "./components/WeatherHeadline";
import WeatherIcon from "./components/WeatherIcon";
import WeatherButton from "./components/WeatherButton";
import WeatherDescriptionLocation from "./components/WeatherDescriptionLocation";

import WeatherIconLocation from "./components/WeatherIconLocation";
import { GiWindsock } from "react-icons/gi";
import { GiTopaz } from "react-icons/gi";
import { GiPressureCooker } from "react-icons/gi";
import { BsSun } from "react-icons/bs";
import styled from "styled-components";

function App() {
  const dataWeather = useFetch();
  const { weather, addLocation, onButtonClick, getTime } = dataWeather;

  const WeatherInfoContainerAll = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    background-color: #f7f8fa;
    width: 100%;
  `;
  const WeatherInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
    width: 50%;
  `;

  return (
    <div className="container">
      {weather === undefined ? (
        <>
          <WeatherHeadline />
          <WeatherIcon />
          <WeatherButton onSubmit={onButtonClick} onChange={addLocation} />
        </>
      ) : (
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
                name={
                  weather?.weather[0].icon.includes("d") ? "sunrise" : "sunset"
                }
                value={`${getTime(
                  weather?.sys[
                    weather?.weather[0].icon.includes("d")
                      ? "sunrise"
                      : "sunset"
                  ]
                )}`}
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
          </WeatherInfoContainerAll>{" "}
        </>
      )}
    </div>
  );
}

export default App;
