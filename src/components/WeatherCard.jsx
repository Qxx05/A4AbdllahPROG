{/* Abdllah Abbara - 991798700*/}

function WeatherCard(props) {
    const weather = props.weather;

    return (
        <div className="weather card">
            <h2 id="city-name">{weather.name}</h2>

            <p>
                <strong>Temperature:</strong> {weather.main.temp} °C
            </p>

            <p>
                <strong>Description:</strong> {weather.weather[0].description}
            </p>

            <p>
                <strong>Humidity:</strong> {weather.main.humidity}%
            </p>

            <p>
                <strong>Wind Speed:</strong> {weather.wind.speed} m/s
            </p>
        </div>
    )
}
export default WeatherCard;