import React, { useEffect, useState } from 'react'
import TWScreen from '../cssdocs/TWScreen.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from "moment-timezone"
import "swiper/css";

export default function WeekScreen() {
  const [data, setData] = useState([])
  const fetchData = () => {
      fetch("http://api.weatherapi.com/v1/forecast.json?key=ba4b6030a4494543aa6143147221808&q=istanbul&days=7&aqi=no&alerts=no")
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
  console.log("alertws:",)

  return (
    <div className={TWScreen.swiper_panel}>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        className={TWScreen.swiper_panel}
      >
        {data?.forecast?.forecastday.map(value => {
          return (

            <SwiperSlide className={TWScreen.SwiperSlide}>
              <span className={TWScreen.time}>{moment.unix(value.date_epoch).format("ddd")}</span>
              <div className={TWScreen.weather_icons}>
                {
                  <img src={"https:" + value.day.condition.icon} className={TWScreen.weather_mood}></img>
                }

              </div>
              <span className={TWScreen.degree}>{Math.round(value.day.avgtemp_c)}</span>
            </SwiperSlide>
          );
        })}
      </Swiper>
    </div>
  )
}