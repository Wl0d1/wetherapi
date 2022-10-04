const WeatherIconLocation = (props) => {
  return <span>
         <img
        src={props.icon}
        alt=''
        width="140"
        height="140"
      ></img>
      </span>;
};

export default WeatherIconLocation;
