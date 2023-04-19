import {
  Accordion,
  AccordionItem,
  AccordionItemButton,
  AccordionItemHeading,
  AccordionItemPanel,
} from 'react-accessible-accordion';
import './Forecast.styles.css';
import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';

const WEEK_DAYS = [
  'Monday',
  'Tuesday',
  'Wednesday',
  'Thursday',
  'Friday',
  'Saturday',
  'Sunday',
];

const Forecast = ({ data }) => {
  const dayInAWeek = new Date().getDay();
  const forecastDays = WEEK_DAYS.slice(dayInAWeek, WEEK_DAYS.length).concat(
    WEEK_DAYS.slice(0, dayInAWeek)
  );

  return (
    <>
      <motion.label
        animate={{ opacity: 1 }}
        initial={{ opacity: 0 }}
        transition={{ delay: 0.2, duration: 0.5 }}
        className='forecast-title'
      >
        Daily forecast
      </motion.label>
      <Accordion allowZeroExpanded className='accordion-container'>
        <AnimatePresence>
          {data.list.splice(0, 7).map((item, index) => (
            <motion.div
              key={index}
              exit={{ scale: 0.5, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              initial={{ y: 16, opacity: 0 }}
              transition={{
                type: 'spring',
                delay: 0.2 + index * 0.05,
                stiffness: 150,
              }}
            >
              <AccordionItem>
                <AccordionItemHeading>
                  <AccordionItemButton onChange={}>
                    <div className='daily-item '>
                      <img
                        alt='daily weather icon'
                        className='icon-small'
                        src={`icons/${item.weather[0].icon}.png`}
                      />
                      <label className='daily-item-day'>
                        {forecastDays[index]}
                      </label>
                      <label className='daily-item-description'>
                        {item.weather[0].description}
                      </label>
                      <label className='daily-item-min-max'>
                        {Math.round(item.main.temp_min)}°C /
                        {Math.round(item.main.temp_max)}°C
                      </label>
                    </div>
                  </AccordionItemButton>
                </AccordionItemHeading>
                <AccordionItemPanel>
                  <div className='daily-details-container'>
                    <div className='daily-details-item'>
                      <label>Feels like</label>
                      <label>{Math.round(item.main.feels_like)}°C</label>
                    </div>
                    <div className='daily-details-item'>
                      <label>Pressure</label>
                      <label>{item.main.pressure} mm</label>
                    </div>
                    <div className='daily-details-item'>
                      <label>Humidity</label>
                      <label>{item.main.humidity}%</label>
                    </div>
                    <div className='daily-details-item'>
                      <label>Clouds</label>
                      <label>{item.clouds.all}%</label>
                    </div>
                    <div className='daily-details-item'>
                      <label>Wind speed</label>
                      <label>{item.wind.speed} m/s</label>
                    </div>
                    <div className='daily-details-item'>
                      <label>Sea level</label>
                      <label>{item.main.sea_level} m</label>
                    </div>
                  </div>
                </AccordionItemPanel>
              </AccordionItem>
            </motion.div>
          ))}
        </AnimatePresence>
      </Accordion>
    </>
  );
};

export default Forecast;
