const iconMapping = {
    1000: "☀️",
    1003: "🌤️",
    1006: "☁️",
    1009: "🌫️",
    1030: "🌫️",
    1063: "🌦️",
    1066: "🌨️",
    1069: "🌧️",
    1072: "🌧️",
    1087: "⛈️",
    1114: "🌨️",
    1117: "🌨️",
    1135: "🌫️",
    1147: "🌫️",
    1150: "🌧️",
    1153: "🌧️",
    1168: "🌧️",
    1171: "🌧️",
    1180: "🌧️",
    1183: "🌧️",
    1186: "🌧️",
    1189: "🌧️",
    1192: "🌧️",
    1195: "🌧️",
    1198: "🌧️",
    1201: "🌧️",
    1204: "🌨️",
    1207: "🌨️",
    1210: "🌨️",
    1213: "🌨️",
    1216: "🌨️",
    1219: "🌨️",
    1222: "🌨️",
    1225: "🌨️",
    1237: "🌨️",
    1240: "🌧️",
    1243: "🌧️",
    1246: "🌧️",
    1249: "🌨️",
    1252: "🌨️",
    1255: "🌨️",
    1258: "🌨️",
    1261: "🌨️",
    1264: "🌨️",
    1273: "⛈️",
    1276: "⛈️",
    1279: "🌨️",
    1282: "🌨️",
};

const moonIcons = {
  'Waning Gibbous': '🌖',
  'Waxing Gibbous': '🌔',
  'Full Moon': '🌕',
  'Last Quarter': '🌗',
  'First Quarter': '🌓',
  'New Moon': '🌑',
  'Waning Crescent': '🌘',
  'Waxing Crescent': '🌒',
};

function getMoonIcon(type) {
  return moonIcons[type] || '🌕';
}

function getIcon(code) {
  return iconMapping[code];
}

function nightMode(sunsetTime, sunriseTime) {
  const date = new Date();
  const hours = date.getHours();
  const minutes = date.getMinutes();

  const formattedHours = hours % 12 || 12;
  const ampm = hours >= 12 ? 'PM' : 'AM';

  const currentTime = `${String(formattedHours).padStart(2, '0')}:${String(minutes).padStart(2, '0')} ${ampm}`;

  const parseTime = (timeStr) => {
    const match = timeStr.match(/(\d+):(\d+) (AM|PM)/i);
    if (match) {
      let hours = parseInt(match[1]);
      const minutes = parseInt(match[2]);
      const ampm = match[3].toUpperCase();
      if (ampm === 'PM' && hours !== 12) {
        hours += 12;
      } else if (ampm === 'AM' && hours === 12) {
        hours = 0;
      }
      return { hours, minutes };
    }
    return null;
  };

  const sunsetParts = parseTime(sunsetTime);
  const sunriseParts = parseTime(sunriseTime);

  if (sunsetParts && sunriseParts) {
    const { hours: sunsetHour, minutes: sunsetMinute } = sunsetParts;
    const { hours: sunriseHour, minutes: sunriseMinute } = sunriseParts;

    const isNight =
      (hours > sunsetHour || (hours === sunsetHour && minutes >= sunsetMinute)) ||
      (hours < sunriseHour || (hours === sunriseHour && minutes < sunriseMinute));
    iconMapping[1000] = isNight ? '🌕' : '☀️';
    document.body.style.background = isNight ? 'var(--nightmode)' : 'var(--daymode)';
  }
}

export { getIcon, getMoonIcon, nightMode };
