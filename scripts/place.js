const temperature = 30; // celsius
const wind_speed = 5;

function calculateWindChill(temperature, wind_speed) {
    if (temperature <= 50 && wind_speed > 3) {
        let windchill = 13.12 + (0.6215 * temperature) - (11.37 * wind_speed ** 0.16) + (0.3965 * temperature * wind_speed ** 0.16); // celsius
        windchill = windchill.toFixed(2);
        return wind_speed.toString();
    } else {
        return "N/A";
    }
}