import React, { useEffect, useState } from "react";

const WeatherAndDate = () => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState({ description: "Loading...", temp: "..." });
  const [icon, setIcon] = useState("");
  const [cityName, setCityName] = useState(""); // State to store the city name

  useEffect(() => {
    // Update the date
    const today = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    setDate(today.toLocaleDateString(undefined, options));

    // Fetch weather data (example using OpenWeatherMap API)
    const fetchWeather = async () => {
      const apiKey = "a6817a264f29950cd107b04c8d4d614a"; // Replace with your API key
      const city = "Gwalior"; // Replace with desired city
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();

      if (data.cod === 200) {
        // Extract the weather information
        const weatherData = data.weather[0];
        const mainData = data.main;

        setWeather({
          description: weatherData.description,
          temp: `${mainData.temp}°C`, // Ensure the temperature is set correctly
        });
        setIcon(weatherData.icon); // Set the weather icon code
        setCityName(data.name); // Set the city name
      } else {
        setWeather({
          description: "Error fetching weather data.",
          temp: "",
        });
      }
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-date-section flex justify-between gap-3 items-center px-1">
      {/* Date Section */}
      <div className="date-section text-gray-700 text-lg">
        <span>{date}</span>
      </div>

      {/* Weather Section */}
      <div className="weather-section text-gray-700 text-lg flex items-center">
        <img
          src={`https://openweathermap.org/img/wn/${icon}.png`} // Dynamic weather icon based on data
          alt="Weather Icon"
          className="weather-icon w-8 h-8 mr-2"
        />
        <span>
          {cityName}, {weather.description}, {weather.temp}
        </span>
      </div>
    </div>
  );
};

export default WeatherAndDate;