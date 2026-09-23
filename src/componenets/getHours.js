import getIcon from "./getIcons.js";

const getHours = async (weatherData, isCelcieus) => {
  try {
    const hoursArray = await Promise.all(
      weatherData.hours.map(async (hour) => {
        const iconSrc = await getIcon(hour.icon);

        return `<div class="display-weather">
        <div>${hour.datetime.split(":")[0]}</div>
        <div>
          <img
              src="${iconSrc}"
              width="50"
              height="50"
              alt="${hour.conditions || "weather icon"}"
          />
        </div>
        <div>
        ${isCelcieus ? parseInt((hour.temp - 32) / 1.8) + "°C" : hour.temp + "F"}
        </div>
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
