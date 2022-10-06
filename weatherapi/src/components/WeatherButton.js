import "./WeatherButton.css";

const WeatherButton = (props) => {
  return (
    <div>
      <h2 className="search-title"> Find Weather of your city </h2>
      <form className="wrapper" onSubmit={props.onSubmit}>
        <input type="text" onChange={props.onChange} placeholder="City"  />

      </form>
    </div>
  );
};

export default WeatherButton;
