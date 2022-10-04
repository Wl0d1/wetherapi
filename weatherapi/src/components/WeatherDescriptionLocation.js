const WeatherDescriptionLocation = (props) => {
  const { value, descriptionWeather } = props;

  return (
    <p>
      {value} | {descriptionWeather}
    </p>
  );
};

export default WeatherDescriptionLocation;
