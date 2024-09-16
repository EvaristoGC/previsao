/* eslint-disable react/prop-types */


function WeatherInformations({ city }) {
    return (
        <div>
            <h2>{city.name}</h2>
            <div>
                {city.weather && <img src={`http://openweathermap.org/img/wn/${city.weather[0].icon}.png`} />}
                <p>{Math.round(city.main.temp)}ºC</p>
            </div>
            <p>{city.weather[0].description}</p>
            <div>
                <p>Sensação Térmica: {Math.round(city.main.feels_like)}ºC</p>
                <p>Humidade: {city.main.humidity}%</p>
                <p>Pressão: {city.main.pressure}</p>
            </div>
        </div>
    )
}

export default WeatherInformations