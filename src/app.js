function updateWeather(response) {
  let temperatureElement = document.querySelector("#weather-temperature-js");
  let temperature = response.data.temperature.current;
  temperatureElement.innerHTML = Math.round(temperature);
  let cityElement = document.querySelector("#city-js");
  cityElement.innerHTML = response.data.city;
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
searchCity("Nigeria");
