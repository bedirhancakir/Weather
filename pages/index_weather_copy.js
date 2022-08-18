import Head from 'next/head'
import Image from 'next/image'
import { EffectFade, Navigation } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import weather from '../styles/Weather.module.css'
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/pagination";
import { RiMenu4Line } from 'react-icons/ri';
import { FaGithub } from 'react-icons/fa';
import React, { useState } from 'react';

export default function Home() {
  const [chanceScreen, setChanceScreen] = useState(0);

  const weekScreen = () => {
    return (
      <div className={weather.swiper_panel}>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        className={weather.swiper_panel}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>Mon</span>
          <div className={weather.weather_icons}>
            <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>18°</span>
        </SwiperSlide>

        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>Tue</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>19°</span>
        </SwiperSlide>

        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>Wed</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>20°</span>
        </SwiperSlide>

        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>Thu</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>20°</span>
        </SwiperSlide>

        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>Fri</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>21°</span>
          </SwiperSlide>

        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>Sat</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>22°</span>
          </SwiperSlide>
          
        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>Sun</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>23°</span>
          </SwiperSlide>
      </Swiper>
    </div>
    )
  }

  const todayScreen = () => {
    return (
      <div className={weather.swiper_panel}>
      <Swiper
        spaceBetween={50}
        slidesPerView={5}
        className={weather.swiper_panel}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
      >
        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>Now</span>
          <div className={weather.weather_icons}>
            <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>18°</span>
        </SwiperSlide>

        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>07:00</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>19°</span>
        </SwiperSlide>

        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>08:00</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>20°</span>
        </SwiperSlide>

        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>09:00</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>20°</span>
        </SwiperSlide>

        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>10:00</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>21°</span>
          </SwiperSlide>

        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>11:00</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>22°</span>
          </SwiperSlide>
          
        <SwiperSlide className={weather.SwiperSlide}>
          <span className={weather.time}>12:00</span>
          <div className={weather.weather_icons}>
          <img src="images/main_cloudy.png" className={weather.img3_img}></img>
          </div>
          <span className={weather.degree}>23°</span>
          </SwiperSlide>
      </Swiper>
    </div>
    )
  } 
  return (
    
  <div className={weather.all_page}>
    <div className={weather.container}>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <div className={weather.primary}>
          <div> <FaGithub/> </div>
          <div> <RiMenu4Line/> </div>
        </div>

        <div className={weather.secondary}>
          <div className={weather.secondary_panel}>
            <span className={weather.location_id}>Kiev</span>
            <span className={weather.main_degree}>18°</span>
            <div className={weather.main_image}>
              <img src="/images/main_cloudy.png" className={weather.weather_image}></img>
            </div>
          </div>
          <div className={weather.sun_position}>
            <div className={weather.sun_time_bar}>
              <div className={weather.sun_time}><span className={weather.small}>Sunrise</span><span>06:05</span></div>
              <div className={weather.sun_time}><span className={weather.small}>Sunset</span><span>18:45</span></div>
            </div>
            
            <div className={weather.curved_panel}>
              <div className={weather.curved}></div>
              <div className={weather.sun}></div>
            </div>
            <svg class="svg" xmlns="http://www.w3.org/2000/svg" viewBox="0 115 1400 112"><path fill="#fff" fill-opacity="1" d="M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,144C672,117,768,107,864,128C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
          </div>      
        </div>
        <div className={weather.tertiary}>
          <div className={weather.day_class_panel}>
            <div className={weather.t_button}>
              <button className={weather.t} onClick={()=> {setChanceScreen(0)}}>Today</button>
            </div>
            <div className={weather.w_button}>
              <button className={weather.w} onClick={()=> {setChanceScreen(1)}}>Week</button>
            </div>
          </div>

          {chanceScreen==0 ? todayScreen() : weekScreen()}
        </div>
      </main>
    </div>
  </div>
  )
}
