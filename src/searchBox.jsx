import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { useState } from 'react';

export default function SearchBox({updateInfo}) {
    const [city, setCity] = useState("");
    
    const API_URL = "http://api.openweathermap.org/data/2.5/weather";
    const API_Key = "03e027657c200498127cbdae4a3d21b6";

const getWeatherInfo = async (city) => {
let response = await fetch(`${API_URL}?q=${city}&appid=${API_Key}&units=metric`);
let weatherInfo = await response.json();

let result ={
city:city,
temp: weatherInfo.main.temp,
tempMin:weatherInfo.main.temp_min,
tempMax:weatherInfo.main.temp_max,
humidity:weatherInfo.main.humidity,
feelsLike:weatherInfo.main.feelsLike,
pressure:weatherInfo.main.pressure,
weather:weatherInfo.weather[0].description,
sunrise: weatherInfo.sys.sunrise,
sunset: weatherInfo.sys.sunset,
}
console.log(result);
return result;
}



const handleChange = (event) => {
setCity(event.target.value);
}

const handleSubmit =async (event) => {
event.preventDefault();
console.log(city);
let newInfo = await getWeatherInfo(city); // Pass the city parameter here
setCity("");
updateInfo(newInfo); // Clear the city input after submission

}

    return (
        <div>
    
            <form>
                <TextField id="outlined-basic" label="City Name" variant="outlined" value={city} onChange={handleChange} required/><br /><br />
                <Button variant="contained" type="submit" onClick={handleSubmit}>Search</Button>
            </form>
            
        </div>
    );
}
