import getIcon from "./getIcons.js";

const getHours = async (weatherData) => {
  try {
    const hoursArray = await Promise.all(
      weatherData.hours.map(async (hour) => {
        const iconSrc = await getIcon(hour.icon);

        return `<div class="display-weather">
        <div>${hour.datetime.split(":")[0]}</div>
        <div>
          <img
              src="${iconSrc}"
              width="40"
              height="40"
              alt="${hour.conditions || "weather icon"}"
          />
        </div>
        <div>${hour.temp}</div>
    </div>`;
      }),
    );

    return hoursArray.join("");
  } catch (err) {
    console.error("Failed to map Hours: ", err);
    return "";
  }
};

export default getHours;
