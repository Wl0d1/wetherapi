import "./WeatherButton.css";

const WeatherButton = (props) => {
  return (
    <div>
      <h2 className="search-title"> Find Weather of your city </h2>
      <form className="wrapper" onSubmit={props.onSubmit}>
        <input type="text" onChange={props.onChange} placeholder="City" />
        <button className="btn-search" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default WeatherButton;
