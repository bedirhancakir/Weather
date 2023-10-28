import weather from '../cssdocs/Flooter.module.css';
import React, { useState } from 'react';
import TodayScreen from '../jsdocs/TodayScreen';
import WeekScreen from '../jsdocs/WeekScreen';

export default function Flooter(props) {
  const [chanceScreen, setChanceScreen] = useState(0);
  console.log("flooter", props)

  return (
    <div className={weather.tertiary}>
      <div className={weather.day_class_panel}>
        <div className={weather.t_button}>
          <button className={weather.t} onClick={() => { setChanceScreen(0) }}>Today</button>
        </div>
        <div className={weather.w_button}>
          <button className={weather.w} onClick={() => { setChanceScreen(1) }}>Week</button>
        </div>
      </div>
      {chanceScreen == 0 ? TodayScreen(props) : WeekScreen(props)}
    </div>
  )

}