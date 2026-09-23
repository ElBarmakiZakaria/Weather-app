import "./styles.css";

import DisplayData, { displayDataInit } from "./componenets/displayData.js";
import Placeholder from "./componenets/placeholder.js";

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("search-form");
  const searchInput = document.getElementById("search-input");

  const content = document.getElementById("content");

  let isCelcieus = false;

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

      loadPage(weatherData);
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

  async function loadPage(weatherData) {
    content.innerHTML = await DisplayData(weatherData, isCelcieus);
    displayDataInit().addEventListener("click", () => {
      isCelcieus = !isCelcieus;
      console.log("clicking", isCelcieus);
      loadPage(weatherData);
    });
  }

  getWeatherData("london");
});
