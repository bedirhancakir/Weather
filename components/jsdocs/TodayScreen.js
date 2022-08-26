import TWScreen from '../cssdocs/TWScreen.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React, { useEffect, useState } from 'react'
import moment from "moment-timezone"

import "swiper/css";

export default function TodayScreen() {
  const [data, setData] = useState([])
  const fetchData = () => {
    fetch("http://api.weatherapi.com/v1/forecast.json?key=ba4b6030a4494543aa6143147221808&q=adana&days=7&aqi=no&alerts=no")
      .then(response => {
        return response.json()
      })
      .then(response => {
        setData(response)
      })
  }

  useEffect(() => {
    fetchData()
  }, [])

  return (
    <div className={TWScreen.swiper_panel}>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        className={TWScreen.swiper_panel}
      >
        {data?.forecast?.forecastday[0].hour.map(value => {
          return (
            <SwiperSlide className={TWScreen.SwiperSlide}>
              <span className={TWScreen.time}>{moment.unix(value.time_epoch).format("HH:mm")}</span>
              <div className={TWScreen.weather_icons}>
                {
                  <img src={value.condition.icon} className={TWScreen.weather_mood}></img>
                }
              </div>
              <span className={TWScreen.degree}>{Math.round(value.temp_c)}&deg;</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}