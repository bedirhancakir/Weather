import React from 'react'
import TWScreen from '../cssdocs/TWScreen.module.css'
import { Swiper, SwiperSlide } from 'swiper/react';
import moment from "moment-timezone"
import "swiper/css";

export default function WeekScreen(props) {
  const data = props.data
  return (
    <div className={TWScreen.swiper_panel}>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        className={TWScreen.swiper_panel}
      >
        {data?.forecast?.forecastday.map((value, key) => {
          return (
            <SwiperSlide key={key} className={TWScreen.SwiperSlide}>
              <span className={TWScreen.time}>{moment.unix(value.date_epoch).format("ddd")}</span>
              <div className={TWScreen.weather_icons}>
                {
                  <img src={value.day.condition.icon} className={TWScreen.weather_mood}></img>
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