import { IWeather } from "../hooks/useweather.types"

//Type GUARD
export const isWeatherResponse = (weather:unknown) : weather is IWeather => {
    return(
        Boolean(weather) && 
        typeof weather === 'object' &&
        typeof (weather as IWeather).name === 'string' &&   
        typeof (weather as IWeather).main.temp === 'number' &&   
        typeof (weather as IWeather).main.temp_max === 'number' &&   
        typeof (weather as IWeather).main.temp_min === 'number'    
        

    )
}