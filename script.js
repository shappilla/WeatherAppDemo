// Define event listener for the fetch button
document.getElementById("fetch-button").addEventListener("click", function() {
    var locationInput = document.getElementById("location-input");
    var weatherOutput = document.getElementById("weather-output");

    var location = locationInput.value;
    
    // Perform a simulated API call or fetch real weather data using an API library
    // Simulated Example:
    var weatherData = {
        location: location,
        temperature: 25,
        description: "Sunny"
    };

    // Display the weather data
    weatherOutput.innerHTML = `Weather in ${weatherData.location}:<br>Temperature: ${weatherData.temperature}°C<br>Description: ${weatherData.description}`;
});
