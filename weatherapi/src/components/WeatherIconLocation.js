import "./WeatherIconLocation.css";

const WeatherIconLocation = (props) => {
  console.log(props);
  if (props.icon === "01d") {
    return (
      <span className="iconss">
        <img src={"./icon/sunny.svg"} alt="" width="140" height="140"></img>
      </span>
    );
  } else if (props.icon === "01n") {
    return (
      <span className="iconss">
        <img src={"./icon/night.svg"} alt="" width="140" height="140"></img>
      </span>
    );
  } else if (props.icon === "02d") {
    return (
      <span className="iconss">
        <img src={"./icon/day.svg"} alt="" width="140" height="140"></img>
      </span>
    );
  } else if (props.icon === "03d") {
    return (
      <span className="iconss">
        <img src={"./icon/cloudy.svg"} alt="" width="140" height="140"></img>
      </span>
    );
  } else if (props.icon === "03n") {
    return (
      <span className="iconss">
        <img src={"./icon/cloudy.svg"} alt="" width="140" height="140"></img>
      </span>
    );
  } else if (props.icon === "04d") {
    return (
      <span className="iconss">
        <img
          src={"./icon/perfect-day.svg"}
          alt=""
          width="140"
          height="140"
        ></img>
      </span>
    );
  } else if (props.icon === "04n") {
    return (
      <span className="iconss">
        <img
          src={"./icon/cloudy-night.svg"}
          alt=""
          width="140"
          height="140"
        ></img>
      </span>
    );
  } else if (props.icon === "09d") {
    return (
      <span className="iconss">
        <img src={"./icon/rain.svg"} alt="" width="140" height="140"></img>
      </span>
    );
  } else if (props.icon === "09n") {
    return (
      <span className="iconss">
        <img
          src={"./icon/rain-night.svg"}
          alt=""
          width="140"
          height="140"
        ></img>
      </span>
    );
  } else if (props.icon === "10d") {
    return (
      <span className="iconss">
        <img src={"./icon/rain.svg"} alt="" width="140" height="140"></img>
      </span>
    );
  } else if (props.icon === "1n") {
    return (
      <span className="iconss">
        <img
          src={"./icon/rain-night.svg"}
          alt=""
          width="140"
          height="140"
        ></img>
      </span>
    );
  } else if (props.icon === "11d") {
    return (
      <span className="iconss">
        <img src={"./icon/storm.svg"} alt="" width="140" height="140"></img>
      </span>
    );
  } else if (props.icon === "11n") {
    return (
      <span className="iconss">
        <img src={"./icon/storm.svg"} alt="" width="140" height="140"></img>
      </span>
    );
  }
};

export default WeatherIconLocation;
