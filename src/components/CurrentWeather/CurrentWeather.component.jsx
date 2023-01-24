import "./CurrentWeather.css";

const CurrentWeather = (city) => {
  return (
    <div className="currentWeather-container">
      <div className="currentWeather-top">
        <div>
          <p className="currentWeather-mainInfo-city">Belgrade</p>
          <p className="currentWeather-mainInfo-description">Rainy</p>
        </div>
        <img alt="weather" className="weather-icon" src="icons/01d.png" />
      </div>
      <div className="currentWeather-bottom">
        <p className="temperature">18°C</p>
        <div className="details">
          <div className="details-row border">
            <span className="detail-label">Details</span>
          </div>
          <div className="details-row">
            <span className="detail-label">Feels like</span>
            <span className="detail-value">25°C</span>
          </div>
          <div className="details-row">
            <span className="detail-label">Wind</span>
            <span className="detail-value">5 m/s</span>
          </div>
          <div className="details-row">
            <span className="detail-label">Humidity</span>
            <span className="detail-value">20%</span>
          </div>
          <div className="details-row">
            <span className="detail-label">Pressure</span>
            <span className="detail-value">722 mm</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CurrentWeather;
