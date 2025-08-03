document.getElementById('getWeatherBtn').addEventListener('click', () => {
  const city = document.getElementById('cityInput').value.trim();
  if (city === "") {
    alert("Please enter a city name.");
    return;
  }
  getWeather(city);
});

function getWeather(city) {
  const apiKey = "c52e5023c494144be26abe45b9ef8155"; // Replace this with your real API key
  const apiUrl = https://api.openweathermap.org/data/2.5/weather?q=${encodeURIComponent(city)}&appid=${apiKey}&units=metric;

  fetch(apiUrl)
    .then(response => {
      if (!response.ok) {
        throw new Error("City not found");
      }
      return response.json();
    })
    .then(data => {
      const weatherDiv = document.getElementById('weatherResult');
      weatherDiv.innerHTML = `
        <h2>${data.name}, ${data.sys.country}</h2>
        <p><strong>Temperature:</strong> ${data.main.temp} °C</p>
        <p><strong>Weather:</strong> ${data.weather[0].description}</p>
        <p><strong>Humidity:</strong> ${data.main.humidity}%</p>
        <p><strong>Wind Speed:</strong> ${data.wind.speed} m/s</p>
      `;
    })
    .catch(error => {
      document.getElementById('weatherResult').innerHTML = <p style="color:red;">${error.message}</p>;
    });
}