import weather from '../cssdocs/Body.module.css'
import React, { useEffect, useState } from 'react'

export default function Body() {
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
    console.log("alertbody: ",)

    return (
        <div className={weather.secondary}>

            <div className={weather.secondary_panel}>
                <span className={weather.location_id}>{data?.location?.name}</span>
                <span className={weather.main_degree}>{data?.current?.temp_c}</span>
                <div className={weather.main_image}>
                    {
                        <img src={data?.current?.condition.icon} className={weather.weather_image}></img>
                    }
                </div>
            </div>
            <div className={weather.sun_position}>
                <div className={weather.sun_time_bar}>
                    <div className={weather.sun_time}><span className={weather.small}>Sunrise</span><span>{data?.forecast?.forecastday[0].astro.sunrise.split(" ")[0]}</span></div>
                    <div className={weather.sun_time}><span className={weather.small}>Sunset</span><span>{data?.forecast?.forecastday[0].astro.sunset.split(" ")[0]}</span></div>
                </div>

                <div className={weather.curved_panel}>
                    <div className={weather.curved}></div>
                    <div className={weather.sun}></div>
                </div>
                <svg className='svg' xmlns="http://www.w3.org/2000/svg" viewBox="0 115 1400 112"><path fill="#fff" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,144C672,117,768,107,864,128C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}