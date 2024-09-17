/* eslint-disable react/prop-types */
import './WeatherInformations.css'


function WeatherInformations({ city }) {
    
    return (
        <div className='weather-container'>
            <h2>{city.name}</h2>

            <div className='weather-info'>
                <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} />
                <p className='temperature'>
                    {Math.round(city.main.temp)}ºC
                </p>
            </div>

            <p className='description'>{city.weather[0].description}</p>

            <div className='details'>
                <p>Sensação Térmica: {Math.round(city.main.feels_like)}ºC</p>
                <p>Humidade: {city.main.humidity}%</p>
                <p>Pressão: {city.main.pressure}</p>
            </div>
            
        </div>
    )
}

export default WeatherInformations