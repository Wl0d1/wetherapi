import "./WeatherButton.css";
import React, { useState } from "react";

const WeatherButton = (props) => {
  const [textInput, setTextInput] = useState("");

  const addLocation = (e) => {
    setTextInput(e.target.value);
    console.log(textInput);
  };

  const addHandleChange = (e) => {
    e.preventDefault();
    const newUser = {
      value: textInput.value,
    };
    setTextInput([newUser]);
  };

  return (
    <div>
      <form className="wrapper" onSubmit={addHandleChange}>
        <label> Weather location </label>
        <input
          value={textInput}
          type="text"
          onChange={addLocation}
          placeholoder="type a message"
        />
        <button className="btn-search" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default WeatherButton;
