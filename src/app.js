function handleSearchSubmit(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-input-js");
  let cityElement = document.querySelector("#city-js");
  cityElement.innerHTML = searchInput.value;
}
let searchFormElement = document.querySelector("#search-form-js");
searchFormElement.addEventListener("submit", handleSearchSubmit);
