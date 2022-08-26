import weather from '../cssdocs/Body.module.css'
import React, { useEffect, useState } from 'react'
import cities_data from "../../cities.json"

export default function Body() {
    const [api, setApi] = useState("http://api.weatherapi.com/v1/forecast.json?key=ba4b6030a4494543aa6143147221808&q=adana&days=7&aqi=no&alerts=no")
    const [data, setData] = useState([])
    const [selected, setSelected] = useState(cities_data.cities[0].city);
    const fetchData = () => {
        fetch(api)
            .then(response => {
                return response.json()
            })
            .then(response => {
                setData(response)
            })
    }

    useEffect(() => {
        fetchData()
    }, [api])

    const handleChange = event => {
        console.log(event.target.value);
        setApi("http://api.weatherapi.com/v1/forecast.json?key=ba4b6030a4494543aa6143147221808&q=" + event.target.value + "&days=7&aqi=no&alerts=no");
        setSelected(event.target.value);
    };

    return (
        <div className={weather.secondary}>
            <div className={weather.secondary_panel}>
                <span className={weather.location_id}>
                    <div>
                        <select value={selected} onChange={handleChange}>
                            {cities_data.cities.map(option => (
                                <option key={option.value} value={option.value}>
                                    {option.city}
                                </option>
                            ))}
                        </select>
                    </div>
                </span>
                <span className={weather.main_degree}>{data?.current?.temp_c}&deg;</span>
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
                <svg className={weather.svg} xmlns="http://www.w3.org/2000/svg" viewBox="38 115 1400 109"><path className='path' fill="#fff" fillOpacity="1" d="M0,128L48,149.3C96,171,192,213,288,213.3C384,213,480,171,576,144C672,117,768,107,864,128C960,149,1056,203,1152,218.7C1248,235,1344,213,1392,202.7L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
            </div>
        </div>
    )
}