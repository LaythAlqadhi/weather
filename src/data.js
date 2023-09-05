import { loadingSpinner, searchContainerDiv } from './dom.js'
let weatherData = null;

export async function fetchWeatherData(currentLocation) {
  if (!weatherData || weatherData.location !== currentLocation) {
    try {
      searchContainerDiv.classList.remove('active');
      loadingSpinner.classList.add('active');
      
      const response = await fetch(`https://api.weatherapi.com/v1/forecast.json?key=449114a6155e494f9e6101536232908&q=${currentLocation}&days=3`, { mode: 'cors' });
      loadingSpinner.classList.remove('active');
      const fetchedData = await response.json();
      weatherData = processWeatherData(fetchedData, currentLocation);
    } catch (error) {
      searchContainerDiv.classList.add('active');
      loadingSpinner.classList.remove('active');

      throw error;
    }
  }
  return weatherData;
}

export function clearCachedWeatherData() {
  weatherData = null;
}

function processWeatherData(data) {
  const { current, forecast, location } = data;
  const [forecast1, forecast2, forecast3] = forecast.forecastday;
  const [day1, day2, day3] = [forecast1, forecast2, forecast3].map((forecast) => forecast.day);
  const [astro1, astro2, astro3] = [forecast1, forecast2, forecast3].map((forecast) => forecast.astro);
  
  return {
    current,
    forecast,
    location,
    forecast1,
    forecast2,
    forecast3,
    day1,
    day2,
    day3,
    astro1,
    astro2,
    astro3,
  };
}

