function updateWeather(response) {
  let temperatureElement = document.querySelector("#weather-temperature-js");
  let temperature = response.data.temperature.current;

  temperatureElement.innerHTML = Math.round(temperature);

  let cityElement = document.querySelector("#city-js");
  let descriptionElement = document.querySelector("#description");
  descriptionElement.innerHTML = response.data.condition.description;
  cityElement.innerHTML = response.data.city;
  let humidityElement = document.querySelector("#humidity");
  humidityElement.innerHTML = `${response.data.temperature.humidity}%`;
  let windElement = document.querySelector("#wind-speed");

  windElement.innerHTML = `${response.data.wind.speed}km/h`;
  let timeElement = document.querySelector("#time");
  let date = new Date(response.data.time * 1000);

  timeElement.innerHTML = formatDate(date);
  let iconElement = document.querySelector("#icon");

  iconElement.innerHTML = `<img
              src="${response.data.condition.icon_url}"
              class="weather-emoji"
            />`;
}

function formatDate(date) {
  let hours = date.getHours();
  let minutes = date.getMinutes();
  let days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  let day = days[date.getDay()];
  if (minutes < 10) {
    minutes = `0${minutes}`;
  }
  return `${day} ${hours}:${minutes}`;
}

function searchCity(city) {
  let apiKey = "tc6b22c02231b7009184f4b92obd4a5f";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${city}&key=${apiKey}&units=metric`;
  axios.get(apiUrl).then(updateWeather);
}

function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-js");

  searchCity(searchInput.value);
}
let searchFormElement = document.querySelector("#search-form-js");
searchFormElement.addEventListener("submit", handleSearchSubmit);
searchCity("Ibadan");
