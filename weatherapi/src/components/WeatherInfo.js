import "./WeatherInfo.css";

const WeatherInfo = (props) => {
  const { name, value } = props;
  return (
    <div>
      <p> {value} </p>
      <span> {name}</span>
    </div>
  );
};

export default WeatherInfo;
