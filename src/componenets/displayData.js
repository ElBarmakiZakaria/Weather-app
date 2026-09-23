import getIcon from "./getIcons.js";
import { format } from "date-fns";
import getHours from "./getHours.js";
import getDays from "./getDays.js";

async function DisplayData(weatherData) {
  return `
        <div class="left-section">
          <div class="city">${weatherData.address}</div>
          <div>${weatherData.timezone}</div>

          <div class="temp">${weatherData.currentConditions.temp}</div>
          <div>
            <img
              src="${await getIcon(weatherData.currentConditions.icon)}"
              width="250"
              height="250"
              alt=""
            />
          </div>
          <div>${format(new Date(), "EEE, d MMMM")}</div>
          <div>${weatherData.description}</div>

          <div>
            <div class="display-weather">
              <div>Feel like</div>
              <div>
                <img
                  src="${await getIcon("sleet")}"
                  width="40"
                  height="40"
                  alt=""
                />
              </div>
              <div>${weatherData.currentConditions.feelslike}</div>
            </div>

            <div class="display-weather">
              <div>Humidity</div>
              <div>
               <img
                  src="${await getIcon("humidity")}"
                  width="40"
                  height="40"
                  alt=""
                />
                </div>
              <div>${weatherData.currentConditions.humidity}</div>
            </div>
          </div>
        </div>

      <div class="right-section">
        <div class="hourly-forecast">
          <div class="header">Hourly Forecast</div>
          <div class="element">
            ${await getHours(weatherData.days[0])}
          </div>
        </div>

        <div class="daily-forecast">
            <div class="header">10 days Forecast</div>
            <div class="element">
            ${await getDays(weatherData)}
            </div>
        </div>

        <div class="bottom-right">

        <div class="display-weather">
          <div>Sunrise</div>
          <div>
            <img
              src="${await getIcon("clear-day")}"
              width="40"
              height="40"
              alt=""
            />
            </div>
          <div>${weatherData.currentConditions.sunrise}</div>
        </div>

        <div class="display-weather">
          <div>Sunset</div>
          <div>
               <img
                  src="${await getIcon("clear-night")}"
                  width="40"
                  height="40"
                  alt=""
                />
                </div>
          <div>${weatherData.currentConditions.sunset}</div>
        </div>

       <div class="display-weather">
          <div>Visibility</div>
          <div>${weatherData.currentConditions.visibility}</div>
        </div> 

        <div class="display-weather">
          <div>Wind Speed</div>
          <div>
               <img
                  src="${await getIcon("wind")}"
                  width="40"
                  height="40"
                  alt=""
                />
                </div>
          <div>${weatherData.currentConditions.windspeed}</div>
        </div>

        <div class="display-weather">
          <div>Cloud Cover</div>
          <div>
               <img
                  src="${await getIcon("cloudy")}"
                  width="40"
                  height="40"
                  alt=""
                />
                </div>
          <div>${weatherData.currentConditions.cloudcover}</div>
        </div>
        </div>



      </div>

        `;
}

export default DisplayData;
