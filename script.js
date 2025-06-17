//your JS code here. If required.
function getWeather() {
  const apiKey = 'YOUR_API_KEY'; // Replace with your actual API key
  const city = 'London';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  fetch(url)
    .then(response => {
      if (!response.ok) {
        throw new Error('Weather data could not be fetched');
      }
      return response.json();
    })
    .then(data => {
      const weatherCondition = data.weather[0].main;
      document.getElementById("weatherData").textContent =
        `Current weather in ${city}: ${weatherCondition}`;
    })
    .catch(error => {
      document.getElementById("weatherData").textContent =
        'Error fetching weather data.';
      console.error('Error:', error);
    });
}
