import "./styles.css";

import DisplayData from "./componenets/displayData.js";
import Placeholder from "./componenets/placeholder.js";

const form = document.getElementById("search-form");
const searchInput = document.getElementById("search-input");

const content = document.getElementById("content");

async function getWeatherData(location) {
  content.innerHTML = Placeholder();
  try {
    const response = await fetch(
      `https://weather.visualcrossing.com/VisualCrossingWebServices/rest/services/timeline/${location}?key=${process.env.WEATHER_API}`,
    );

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    const weatherData = await response.json();

    content.innerHTML = await DisplayData(weatherData);
  } catch (error) {
    console.log(error);
    content.innerHTML = `
    <div>Unable to find city: ${location}</div>
    `;
  }
}

form.addEventListener("submit", (event) => {
  event.preventDefault();

  getWeatherData(searchInput.value);
});
