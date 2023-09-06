const apiKey = 'YOUR_OPENWEATHERMAP_API_KEY';
const searchButton = document.getElementById('searchButton');
const cityInput = document.getElementById('cityInput');
const temperatureElement = document.querySelector('.temperature');
const conditionElement = document.querySelector('.condition');

searchButton.addEventListener('click', () => {
  const city = cityInput.value;

  if (city) {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`)
      .then(response => response.json())
      .then(data => {
        const temperature = data.main.temp;
        const condition = data.weather[0].description;

        temperatureElement.textContent = `Temperature: ${temperature}°C`;
        conditionElement.textContent = `Condition: ${condition}`;
      })
      .catch(error => {
        console.error('Error fetching weather data:', error);
        temperatureElement.textContent = 'Temperature: N/A';
        conditionElement.textContent = 'Condition: N/A';
      });
  }
});
