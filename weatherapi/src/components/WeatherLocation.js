import React from "react";

const Location = (props) => {
  return (
    <ul>
      {props.location.map((location) => (
        <li>{location}</li>
      ))}
    </ul>
  );
};

export default Location;
