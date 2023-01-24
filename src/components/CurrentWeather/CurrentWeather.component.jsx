import "./CurrentWeather.css";

const CurrentWeather = (city) => {
  const { value, label } = city;
  return (
    <div className="currentWeather-container">
      <div className="currentWeather-mainInfo">
        <p className="currentWeather-mainInfo-city">Belgrade</p>
        <p className="currentWeather-mainInfo-description">Rainy</p>
      </div>
      <img alt="weather" className="weather-icon" src="" />
    </div>
  );
};

export default CurrentWeather;
