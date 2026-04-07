{/* Abdllah Abbara - 991798700*/}

function ForecastList(props) {
    const forecast = props.forecast;

    return (
        <div>

            <h2 id="forecast-length">5 day Forecast</h2>

            {forecast.map(function(item) {

                return (
                    <div key={item.dt}>
                        <p>{item.dt_text}</p>

                        <p>Temp: {item.main.temp} °C</p>

                        <p>{item.weather[0].descritpion}</p>
                        
                    </div>
                );

            })}
        </div>
    );
}

export default ForecastList;