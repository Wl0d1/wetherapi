import React from "react";
import "./WeatherLocation.css";

const Location = (props) => {
    return (
   <p className='title-location'>{props.location} {props.country}</p>
    )
  };

export default Location;
