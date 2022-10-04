import React from "react";
import "./WeatherLocation.css";

const Location = (props) => {
    return (
      <>
    <p>{props.location} {props.country}</p>
    </>
    )
  };

export default Location;
