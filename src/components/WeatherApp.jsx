import { useState, useEffect } from "react";
import WeatherForm from "./WeatherForm"; 
import WeatherMainInfo from "./WeatherMainInfo";

const WeatherApp = () => {
    const [ weather, setWeather ] = useState(null);

    useEffect(()=>{
        loadInfo();
    }, []);

    useEffect(()=>{
        document.title = `Weather | ${weather?.location.name ?? ""}`;
    }, [weather])

    async function loadInfo(ciudad = "london"){
        try {
            const request = await fetch(`${import.meta.env.VITE_APP_URL}&key=${import.meta.env.VITE_APP_KEY}&q=${ciudad}`);

            const json = await request.json();

            console.log(json);

            setWeather(json);
        } catch (error) {
            console.log(error);
        }
    }

    function onChangeCity(ciudad){
        setWeather(null);
        loadInfo(ciudad);
    }

  return (
    <div className="">
        <div className="bg-white p-10 my-10 rounded-lg shadow-lg">
            <WeatherForm onChangeCity={onChangeCity} />
        </div>
        
        <div className="bg-white p-10 my-10 rounded-lg shadow-lg flex justify-center">
            <WeatherMainInfo weather={weather} />
        </div>
        
    </div>
  )
}

export default WeatherApp
