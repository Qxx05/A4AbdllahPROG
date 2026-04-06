{/* Abdllah Abbara - 991798700*/}
import { useState, useEffect } from 'react'
import './App.css'
import SearchBar from './components/SearchBar';
import Loading from './components/Loading';
import ErrorMessage from './components/ErrorMessage';
import WeatherCard from './components/WeatherCard';
import ForecastList from './components/ForecastList';

function App() {

  const [searchCity, setSearchCity] = useState("");
  const [weather, setWeather] = useState(null);
  const [forecast, setForecast] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const apiKey = "24b30766f970b0b8d551fdda30d5c876";

  function handleSearch(city) {
    setSearchCity(city);
  }

  useEffect(function () {
    
    if (searchCity === "") {
      return;
    }

    setLoading(true);
    setError("");
    setWeather(null);
    setForecast([]);

    fetch("https://api.openweathermap.org/data/2.5/weather?q=" + searchCity + "&appid=" + apiKey + "&units=metric")

    .then(function(response) {
      
      if (!response.ok) {
        throw new Error("City not found");
      }
      
      return response.json();
    })

    .then(function (data) {
      setWeather(data);
    })

    .catch(function() {
      setError("Error pulling weather data");
    });

    // forecast (bonus)

  })
}
export default App
