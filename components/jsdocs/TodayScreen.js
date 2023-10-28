import TWScreen from '../cssdocs/TWScreen.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import React from 'react'
import moment from "moment-timezone"
import "swiper/css";

export default function TodayScreen(props) {
  const data = props.data

  return (
    <div className={TWScreen.swiper_panel}>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        className={TWScreen.swiper_panel}
      >
        {data?.forecast?.forecastday[0].hour.map((value, key) => {
          return (
            <SwiperSlide key={key} className={TWScreen.SwiperSlide}>
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