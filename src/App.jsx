import Search from './components/Search/Search.component';
import CurrentWeather from './components/CurrentWeather/CurrentWeather.component';
import Forecast from './components/Forecast/Forecast.component';

import { WEATHER_API_URL, WEATHER_API_KEY } from './utils/api';
import { motion } from 'framer-motion';

import './App.css';
import { useState } from 'react';

function App() {
  const [currentWeather, setCurrentWeather] = useState(null);
  const [forecastWeather, setForecastWeather] = useState(null);

  const onSearchChangeHandler = (searchData) => {
    const [lat, lon] = searchData.value.split(' ');

    const currentWeatherFetch = fetch(
      `${WEATHER_API_URL}/weather?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );
    const forecastWeatherFetch = fetch(
      `${WEATHER_API_URL}/forecast?lat=${lat}&lon=${lon}&appid=${WEATHER_API_KEY}&units=metric`
    );

    Promise.all([currentWeatherFetch, forecastWeatherFetch])
      .then(async (res) => {
        const weatherResponse = await res[0].json();
        const forecastResponse = await res[1].json();

        setCurrentWeather({ city: searchData.label, ...weatherResponse });
        setForecastWeather({ city: searchData.label, ...forecastResponse });
      })
      .catch((err) => {
        throw new Error(err);
      });
  };

  // currentWeather && console.log(currentWeather);
  // forecastWeather && console.log(forecastWeather);

  return (
    <div className='container'>
      <motion.div animate={{ opacity: 1 }} initial={{ opacity: 0 }}>
        <Search onSearchChange={onSearchChangeHandler} />
      </motion.div>
      {currentWeather && <CurrentWeather data={currentWeather} />}
      {forecastWeather && <Forecast data={forecastWeather} />}
    </div>
  );
}

export default App;
