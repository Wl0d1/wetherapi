import "./WeatherButton.css";

const WeatherButton = (props) => {
  return (
    <div>
      <form className="wrapper" onSubmit={props.onSubmit}>
        <label> Weather location </label>
        <input
          type="text"
          onChange={props.onChange}
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
