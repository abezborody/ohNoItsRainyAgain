import './CurrentWeather.css';
import { motion } from 'framer-motion';

const CurrentWeather = ({ data }) => {
  return (
    <motion.div
      animate={{ y: 0, opacity: 1 }}
      initial={{ y: 16, opacity: 0 }}
      transition={{ type: 'spring', stiffness: 150 }}
    >
      <div className='currentWeather-container'>
        <div className='currentWeather-top'>
          <div>
            <p className='currentWeather-mainInfo-city'>{data.city}</p>
            <p className='currentWeather-mainInfo-description'>
              {data.weather[0].description}
            </p>
          </div>
          <img
            alt='weather'
            className='weather-icon'
            src={`icons/${data.weather[0].icon}.png`}
          />
        </div>
        <div className='currentWeather-bottom'>
          <p className='temperature'>{Math.round(data.main.temp)}°C</p>
          <div className='details'>
            <div className='details-row border'>
              <span className='detail-label bold-label'>Details:</span>
            </div>
            <div className='details-row'>
              <span className='detail-label'>Feels like</span>
              <span className='detail-value'>
                {Math.round(data.main.feels_like)}°C
              </span>
            </div>
            <div className='details-row'>
              <span className='detail-label'>Wind</span>
              <span className='detail-value'>
                {Math.round(data.wind.speed)} m/s
              </span>
            </div>
            <div className='details-row'>
              <span className='detail-label'>Humidity</span>
              <span className='detail-value'>
                {Math.round(data.main.humidity)}%
              </span>
            </div>
            <div className='details-row'>
              <span className='detail-label'>Pressure</span>
              <span className='detail-value'>
                {Math.round(data.main.pressure)} mm
              </span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
};

export default CurrentWeather;
