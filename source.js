// Start your journey here by writing your first function!

const weatherResponse = await Functions.makeHttpRequest({
  url: `https://api.weatherapi.com/v1/current.json?key=${secrets.apiKey}&q=London`,
});

if (weatherResponse.error) {
  throw new Error(JSON.stringify(weatherResponse));
}

const currentWeather = weatherResponse.data.current;

const result = `Temp: ${currentWeather.temp_c}, Condition: ${currentWeather.condition.text}`;

console.log(result)

return Functions.encodeString(result);