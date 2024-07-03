import SearchBox from "./searchbox";
import InfoBox from "./infobox";
import { useState } from "react";
export default function WeatherApp(){
    const [WeatherInfo, setWeatherInfo]=useState({
        city:"delhi",
        feelsLike:24.84,
        temp:25.05,
        tempMin:25.05,
        tempMax: 25.05,
        humidity: 47,
        weather:"haze",
    });
    let updateInfo=(newInfo)=>{
      setWeatherInfo(newInfo);
    }
    return(
        <div style={{textAlign:"center"}}>
            <h2>WeatherApp</h2>
        <SearchBox updateInfo={updateInfo} />
        <InfoBox Info={WeatherInfo} />
        </div>
    );
}