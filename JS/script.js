const apiKey = 'a2a800b9757efb616e99d73bbad5e1fc'
const apiCountryFlagUrl = 'https://flagsapi.com/BE/flat/64.png'
const cityInput = document.querySelector("#city-input")
const searchBtn = document.querySelector("#search")
const cityName = document.querySelector('.city-name')
const cityTemperature = document.querySelector('#city-temperature')
const cityHumidity = document.querySelector('#city-humidity')


//functions

const getWeatherData = async(city) => {
  
  const apiWeatherUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`

  const response = await fetch(apiWeatherUrl)
  const data = await response.json()

  cityName.innerText = data.name
  cityTemperature.innerText = data.main.temp + " ºC"
  cityHumidity.innerText = data.main.humidity + " Umidade"
  console.log(data)
}


//Events

searchBtn.addEventListener("click", (e) => {
  e.preventDefault()

  getWeatherData(cityInput.value)
})