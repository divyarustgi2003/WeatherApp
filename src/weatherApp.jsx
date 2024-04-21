import SearchBox from './searchBox';
import InfoBox from './infoBox';
import { useState } from 'react';
export default function WeatherApp(){
    let [weatherInfo, setWeatherInfo] = useState({
        city:"Dehi",
        feelslike:24.84,
        temp:25,
        tempMin:25,
        tempMax:28,
        humidity:47,
        weather:"haze",
        sunrise:234,
        sunset:423,
    });

    let updateInfo = (result) => {
        setWeatherInfo(result);
    }
    return(
        <div>
      <h1>Weather App</h1>
       <SearchBox updateInfo = {updateInfo}/>
       <InfoBox Info={weatherInfo} />
     </div>
    )
}