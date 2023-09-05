import {
  fetchWeatherData,
  clearCachedWeatherData
} from './data.js';
import {
  getIcon,
  getMoonIcon,
  nightMode
} from './style.js';
import {
    Style
} from './index.css'

let units = 'Metric';
let currentLocation = 'Tokyo';

const logoDiv = document.createElement('div');
logoDiv.className = 'logo';
logoDiv.textContent = 'WeatherApp';

const searchContainerDiv = document.createElement('div');
searchContainerDiv.className = 'search-container';

const searchInput = document.createElement('input');

searchInput.type = 'search';
searchInput.id = 'search';
searchInput.placeholder = 'Search...';

const searchButton = document.createElement('button');
searchButton.className = 'submit';
searchButton.textContent = '🔍';

searchContainerDiv.appendChild(searchInput);
searchContainerDiv.appendChild(searchButton);

const unitsDiv = document.createElement('div');
unitsDiv.className = 'units';

const metricUnitsButton = document.createElement('button');
metricUnitsButton.className = 'metric-units';
metricUnitsButton.textContent = '°C, m/s';

const usUnitsButton = document.createElement('button');
usUnitsButton.className = 'us-units';
usUnitsButton.textContent = '°F, mph';

unitsDiv.appendChild(metricUnitsButton);
unitsDiv.appendChild(usUnitsButton);

const currentWeatherDiv = document.createElement('div');
currentWeatherDiv.className = 'current-weather';

const locationDiv = document.createElement('div');
locationDiv.className = 'location';

const timeDiv = document.createElement('div');
timeDiv.className = 'time';

const currentTempDiv = document.createElement('div');
currentTempDiv.className = 'current-temp';

const textDiv = document.createElement('div');
textDiv.className = 'text';

const feelsLikeDiv = document.createElement('div');
feelsLikeDiv.className = 'feels-like';



currentWeatherDiv.appendChild(locationDiv);
currentWeatherDiv.appendChild(timeDiv);
currentWeatherDiv.appendChild(currentTempDiv);
currentWeatherDiv.appendChild(textDiv);
currentWeatherDiv.appendChild(feelsLikeDiv);

const weatherDetailsDiv = document.createElement('div');

weatherDetailsDiv.className = 'weather-details';

const windDiv = document.createElement('div');
windDiv.className = 'wind';
const windTitle = document.createElement('div');
windTitle.textContent = 'Wind';
const windValue = document.createElement('div');
windDiv.appendChild(windTitle);
windDiv.appendChild(windValue);

const humidityDiv = document.createElement('div');
const humidityTitle = document.createElement('div');
humidityTitle.textContent = 'Humidity';
const humidityValue = document.createElement('div');

humidityDiv.appendChild(humidityTitle);
humidityDiv.appendChild(humidityValue);

const uvIndexDiv = document.createElement('div');
const uvIndexTitle = document.createElement('div');
uvIndexTitle.textContent = 'UV index';
const uvIndexValue = document.createElement('div');

uvIndexDiv.appendChild(uvIndexTitle);
uvIndexDiv.appendChild(uvIndexValue);

const visibilityDiv = document.createElement('div');
const visibilityTitle = document.createElement('div');
visibilityTitle.textContent = 'Visibility';
const visibilityValue = document.createElement('div');
visibilityDiv.appendChild(visibilityTitle);
visibilityDiv.appendChild(visibilityValue);

const cloudinessDiv = document.createElement('div');
const cloudinessTitle = document.createElement('div');
cloudinessTitle.textContent = 'Cloudiness';
const cloudinessValue = document.createElement('div');
cloudinessDiv.appendChild(cloudinessTitle);
cloudinessDiv.appendChild(cloudinessValue);

const chanceOfRainDiv = document.createElement('div');
const chanceOfRainTitle = document.createElement('div');
chanceOfRainTitle.textContent = 'Chance of rain';
const chanceOfRainValue = document.createElement('div');
chanceOfRainDiv.appendChild(chanceOfRainTitle);
chanceOfRainDiv.appendChild(chanceOfRainValue);

const sunriseDiv = document.createElement('div');
const sunriseTitle = document.createElement('div');
sunriseTitle.textContent = 'Sunrise';
const sunriseValue = document.createElement('div');
sunriseDiv.appendChild(sunriseTitle);
sunriseDiv.appendChild(sunriseValue);

const sunsetDiv = document.createElement('div');
const sunsetTitle = document.createElement('div');
sunsetTitle.textContent = 'Sunset';
const sunsetValue = document.createElement('div');
sunsetDiv.appendChild(sunsetTitle);
sunsetDiv.appendChild(sunsetValue);

const moonPhaseDiv = document.createElement('div');
const moonPhaseTitle = document.createElement('div');
moonPhaseTitle.textContent = 'Moon phase';
const moonPhaseValue = document.createElement('div');
moonPhaseValue.id = 'moon-phase';
moonPhaseDiv.appendChild(moonPhaseTitle);
moonPhaseDiv.appendChild(moonPhaseValue);

weatherDetailsDiv.appendChild(windDiv);
weatherDetailsDiv.appendChild(humidityDiv);
weatherDetailsDiv.appendChild(uvIndexDiv);
weatherDetailsDiv.appendChild(visibilityDiv);
weatherDetailsDiv.appendChild(cloudinessDiv);
weatherDetailsDiv.appendChild(chanceOfRainDiv);
weatherDetailsDiv.appendChild(moonPhaseDiv);
weatherDetailsDiv.appendChild(sunriseDiv);
weatherDetailsDiv.appendChild(sunsetDiv);

document.body.appendChild(weatherDetailsDiv);

const forecastDiv = document.createElement('div');
forecastDiv.className = 'forecast';

const day1Div = document.createElement('div');

const day1NameDiv = document.createElement('div');

const day1MaxTempDiv = document.createElement('div');

const day1MinTempDiv = document.createElement('div');

const day1IconDiv = document.createElement('div');

day1Div.appendChild(day1NameDiv);
day1Div.appendChild(day1MaxTempDiv);
day1Div.appendChild(day1MinTempDiv);
day1Div.appendChild(day1IconDiv);

const day2Div = document.createElement('div');

const day2NameDiv = document.createElement('div');

const day2MaxTempDiv = document.createElement('div');

const day2MinTempDiv = document.createElement('div');

const day2IconDiv = document.createElement('div');

day2Div.appendChild(day2NameDiv);
day2Div.appendChild(day2MaxTempDiv);
day2Div.appendChild(day2MinTempDiv);
day2Div.appendChild(day2IconDiv);

const day3Div = document.createElement('div');

const day3NameDiv = document.createElement('div');

const day3MaxTempDiv = document.createElement('div');

const day3MinTempDiv = document.createElement('div');

const day3IconDiv = document.createElement('div');

day3Div.appendChild(day3NameDiv);
day3Div.appendChild(day3MaxTempDiv);
day3Div.appendChild(day3MinTempDiv);
day3Div.appendChild(day3IconDiv);

forecastDiv.appendChild(day1Div);
forecastDiv.appendChild(day2Div);
forecastDiv.appendChild(day3Div);

const footerDiv = document.createElement('div');
footerDiv.className = 'footer';

const usernameLink = document.createElement('a');
usernameLink.href = 'https://github.com/laythalqadhi/';
usernameLink.textContent = 'LaythAlqadhi';

const sourceCodeLink = document.createElement('a');
sourceCodeLink.href = 'https://github.com/Username/weather-app';
sourceCodeLink.textContent = 'Source code';

const separatorDiv = document.createElement('div');
separatorDiv.textContent = ' | ';

footerDiv.textContent = 'Built by ';
footerDiv.appendChild(usernameLink);
footerDiv.appendChild(separatorDiv);
footerDiv.appendChild(sourceCodeLink);

const loadingSpinner = document.createElement('div');
loadingSpinner.className = 'loading-spinner';

document.body.appendChild(logoDiv);
document.body.appendChild(searchContainerDiv);
document.body.appendChild(unitsDiv);
document.body.appendChild(currentWeatherDiv);
document.body.appendChild(weatherDetailsDiv);
document.body.appendChild(forecastDiv);
document.body.appendChild(footerDiv);
document.body.appendChild(loadingSpinner);

export async function createContent(givenLocation) {
  if (givenLocation) {
    currentLocation = givenLocation;
  }

  let weather = await fetchWeatherData(currentLocation);
  
  const currentDayCode = weather.current.condition.code;
  const day1Code = weather.day1.condition.code;
  const day2Code = weather.day2.condition.code;
  const day3Code = weather.day3.condition.code;

  nightMode(weather.astro1.sunset, weather.astro1.sunrise);

  appendData(locationDiv, `${weather.location.name}, ${weather.location.country}`);
  appendData(textDiv, weather.current.condition.text);
  appendData(timeDiv, weather.location.localtime);
  appendData(currentTempDiv, `${getIcon(currentDayCode)} ${weather.current.temp_c}°C`);
  appendData(feelsLikeDiv, `${weather.current.feelslike_c}°C`);
  appendData(windValue, `${weather.current.wind_kph}kph`);
  appendData(humidityValue, `${weather.current.humidity}%`);
  appendData(uvIndexValue, weather.current.uv);
  appendData(visibilityValue, `${weather.current.vis_km}km`);
  appendData(cloudinessValue, `${weather.current.cloud}%`);
  appendData(chanceOfRainValue, `${weather.current.precip_in}%`);
  appendData(sunriseValue, weather.astro1.sunrise);
  appendData(sunsetValue, weather.astro1.sunset);
  appendData(moonPhaseValue, getMoonIcon(weather.astro1.moon_phase));
  appendData(day1MaxTempDiv, `${weather.day1.maxtemp_c}°C`);
  appendData(day2MaxTempDiv, `${weather.day2.maxtemp_c}°C`);
  appendData(day3MaxTempDiv, `${weather.day3.maxtemp_c}°C`);
  appendData(day1MinTempDiv, `${weather.day1.mintemp_c}°C`);
  appendData(day2MinTempDiv, `${weather.day2.mintemp_c}°C`);
  appendData(day3MinTempDiv, `${weather.day3.mintemp_c}°C`);
  appendData(day1NameDiv, getDayNameFromDate(weather.forecast1.date));
  appendData(day2NameDiv, getDayNameFromDate(weather.forecast2.date));
  appendData(day3NameDiv, getDayNameFromDate(weather.forecast3.date));
  appendData(day1IconDiv, getIcon(day1Code));
  appendData(day2IconDiv, getIcon(day2Code));
  appendData(day3IconDiv, getIcon(day3Code));

  if (units === 'US') {
    appendData(currentTempDiv, `${getIcon(day1Code, getMoonIcon(weather.astro1.moon_phase))} ${weather.current.temp_f}°F`);
    appendData(feelsLikeDiv, `${weather.current.feelslike_f}°F`);
    appendData(windValue, `${weather.current.wind_mph}mph`);
    appendData(visibilityValue, `${weather.current.vis_miles}miles`);
    appendData(day1MaxTempDiv, `${weather.day1.maxtemp_f}°F`);
    appendData(day2MaxTempDiv, `${weather.day2.maxtemp_f}°F`);
    appendData(day3MaxTempDiv, `${weather.day3.maxtemp_f}°F`);
    appendData(day1MinTempDiv, `${weather.day1.mintemp_f}°F`);
    appendData(day2MinTempDiv, `${weather.day2.mintemp_f}°F`);
    appendData(day3MinTempDiv, `${weather.day3.mintemp_f}°F`);
  }

  if (uvIndexValue.textContent < 3) {
    uvIndexValue.classList = 'low-uv';
  } else if (uvIndexValue.textContent < 6) {
    uvIndexValue.classList = 'mid-uv';
  } else if (uvIndexValue.textContent < 8) {
    uvIndexValue.classList = 'high-uv';
  } else if (uvIndexValue.textContent >= 8) {
    uvIndexValue.classList = 'very-high-uv';
  }
}
createContent();

searchButton.addEventListener('click', () => {
  clearCachedWeatherData();
  createContent(searchInput.value);
  searchInput.value = '';
});

searchInput.addEventListener('keyup', (e) => {
  if (e.key === 'Enter') {
    searchButton.click();
  }
});

usUnitsButton.addEventListener('click', () => {
  units = 'US';
  createContent();
});

metricUnitsButton.addEventListener('click', () => {
  units = 'Metric';
  createContent();
});

function appendData(element, dataLocation) {
  let data = dataLocation;
  element.textContent = data;
}

function getDayNameFromDate(date) {
  const options = { weekday: 'long' };

  const dayName = new Intl.DateTimeFormat('en-US', options).format(new Date(date));
  return dayName;
}

export { loadingSpinner, searchContainerDiv };