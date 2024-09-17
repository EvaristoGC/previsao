/* eslint-disable react/prop-types */
import './WeatherInformations5Days.css'


function WeatherInformations5Days({ city5Days }) {
    console.log(city5Days)

    let dailyForecast = {}

    for (let forecast of city5Days.list) {
        const date = new Date(forecast.dt * 1000).toLocaleDateString()

        if (!dailyForecast[date]) {
            dailyForecast[date] = forecast
        }
    }
    const next5DaysForecast = Object.values(dailyForecast).slice(1, 6)

    function convertDate(date) {
        return (
            new Date(date * 1000)
            .toLocaleDateString('pt', {weekday: 'long', day: '2-digit'})
        )
    }

    return (
        <div className='weather-container'>
            <p>Previsão dos próximos 5 Dias</p>
            {next5DaysForecast.map(forecast => (
                <div key={forecast.dt}>
                    <p>{convertDate(forecast.dt)}</p>
                    <img src={`http://openweathermap.org/img/wn/${forecast.weather[0].icon}.png`} />
                    <p>{forecast.weather[0].description}</p>
                    <p>
                        {Math.round(forecast.main.temp_min)}ºC min. /
                        {Math.round(forecast.main.temp_max)}ºC máx.
                    </p>
                </div>
            ))}
        </div>
    )
}

export default WeatherInformations5Days