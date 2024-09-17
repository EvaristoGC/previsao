import { useState, useRef } from 'react'
import axios from 'axios'

import WeatherInformations from './components/weatherInformations/weatherInformations'
import WeatherInformations5Days from './components/weatherInformations5Days/weatherInformations5Days'

import './App.css'

function App() {
  const [weather, setWeather] = useState()
  const [weather5Days, setWeather5Days] = useState()
  const inputRef = useRef()

  const searchCity = async () => {
    const cityName = inputRef.current.value
    const api_key = import.meta.env.VITE_API_KEY

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${api_key}&lang=pt&units=metric`
    const url5Days = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${api_key}&lang=pt&units=metric`

    const apiInfo = await axios.get(url)
    const apiInfo5Days = await axios.get(url5Days)

    setWeather(apiInfo.data)
    setWeather5Days(apiInfo5Days.data)

  }

  return (
    <div className='container'>
      <h1>Previsão do Tempo</h1>
      <input ref={inputRef} type="text" placeholder='Digite o nome da cidade' />
      <button onClick={searchCity}>Buscar</button>
      {weather && <WeatherInformations city={weather} />}
      {weather5Days && <WeatherInformations5Days city5Days={weather5Days} />}
    </div>
  )
}

export default App