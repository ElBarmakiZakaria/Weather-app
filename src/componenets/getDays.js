import getIcon from "./getIcons.js";
import { format } from "date-fns";

const getDays = async (weatherData) => {
  try {
    const daysArray = await Promise.all(
      weatherData.days.slice(1).map(async (day) => {
        const iconSrc = await getIcon(day.icon);

        return `<div class="display-weather">
        <div>${format(day.datetime, "EEE")}</div>
        <div>
          <img
              src="${iconSrc}"
              width="40"
              height="40"
              alt="${day.conditions || "weather icon"}"
          />
        </div>
        <div>${day.temp}</div>
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
