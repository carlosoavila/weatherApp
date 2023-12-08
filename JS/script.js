const apiKey = 'a2a800b9757efb616e99d73bbad5e1fc'
const apiCountryFlagUrl = 'https://flagsapi.com/BE/flat/64.png'
const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")
const citySky = document.querySelector("#city-sky")
const cityName = document.querySelector('.city-name')
const cityTemperature = document.querySelector('#city-temperature')
const cityHumidity = document.querySelector('#city-humidity')
const cityWind = document.querySelector('#city-wind')
const countryFlag = document.querySelector('.country-flag')


//functions

const getWeatherData = async(city) => {
  
  const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

  const response = await fetch(apiWeatherUrl)
  const data = await response.json()

  getCityWeather(data)
  console.log(data)
}

const getCityWeather = (city) => {
  cityName.innerText = city.name
  citySky.innerText = city.weather[0].description
  cityTemperature.innerText = city.main.temp + " ºC"
  cityHumidity.innerText = city.main.humidity + " Umidade"
  cityWind.innerText = Math.round(city.wind.speed * 3.6).toFixed(2) + " km/h"
  countryFlag.src = `https://flagsapi.com/${city.sys.country}/flat/64.png`
}


//Events

searchBtn.addEventListener("click", (e) => {
  e.preventDefault()

  getWeatherData(cityInput.value)
})