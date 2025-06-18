async function getWeather() {
  const apiKey = 'YOUR_API_KEY_HERE'; // 🔑 Replace with your OpenWeatherMap API key
  const city = 'London';
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

  try {
    const response = await fetch(url);
    if (!response.ok) throw new Error("Failed to fetch weather data");

    const data = await response.json();
    const weather = data.weather[0].main;

    document.getElementById("weatherData").innerText =
      `Current weather in ${city}: ${weather}`;
  } catch (error) {
    document.getElementById("weatherData").innerText =
      "Error fetching weather data. Please try again.";
    console.error(error);
  }
}
