import React, { useEffect, useState } from "react";

const WeatherAndDate = () => {
  const [date, setDate] = useState("");
  const [weather, setWeather] = useState({ description: "Loading...", temp: "..." });

  useEffect(() => {
    // Update the date
    const today = new Date();
    const options = { weekday: "long", year: "numeric", month: "long", day: "numeric" };
    setDate(today.toLocaleDateString(undefined, options));

    // Fetch weather data (example using OpenWeatherMap API)
    const fetchWeather = async () => {
      const apiKey = "your-api-key"; // Replace with your API key
      const city = "New York"; // Replace with desired city
      const response = await fetch(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
      );
      const data = await response.json();
      setWeather({
        description: data.weather[0].description,
        temp: `${data.main.temp}°C`,
      });
    };

    fetchWeather();
  }, []);

  return (
    <div className="weather-date-section flex justify-between items-center p-4 ">
      {/* Date Section */}
      <div className="date-section text-gray-700 text-lg">
        <span>{date}</span>
      </div>

      {/* Weather Section */}
      <div className="weather-section text-gray-700 text-lg flex items-center">
        <img
          src={`https://openweathermap.org/img/wn/01d.png`} // Replace with API icon URL dynamically
          alt="Weather Icon"
          className="weather-icon w-8 h-8 mr-2"
        />
        <span>
          {weather.description}, {weather.temp}
        </span>
      </div>
    </div>
  );
};

export default WeatherAndDate;
