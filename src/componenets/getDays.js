import getIcon from "./getIcons.js";
import { format } from "date-fns";

// (°F - 32) ÷ 1.8

const getDays = async (weatherData, isCelcieus = false) => {
  try {
    const daysArray = await Promise.all(
      weatherData.days.slice(1).map(async (day) => {
        const iconSrc = await getIcon(day.icon);

        return `<div class="display-weather">
        <div>${format(day.datetime, "EEE")}</div>
        <div>
          <img
              src="${iconSrc}"
              width="50"
              height="50"
              alt="${day.conditions || "weather icon"}"
          />
        </div>
        <div>
        ${isCelcieus ? parseInt((day.temp - 32) / 1.8) + "°C" : day.temp + "F"}
      </div>
    </div>`;
      }),
    );

    return daysArray.join("");
  } catch (err) {
    console.error("Failed to map days: ", err);
    return "";
  }
};

export default getDays;
