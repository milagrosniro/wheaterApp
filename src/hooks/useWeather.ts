import axios from "axios"
import { useMemo, useState } from "react"
import { ISearchState } from "../components/Form/form.types"
import { Weather } from "./useweather.types"

export const useWeather = () =>{
    const initialState :Weather = {
        name:'',
        main: {
            temp: 0,
            temp_max:0,
            temp_min:0
        }
    }

    const [weatherInfo, setWeatherInfo] = useState<Weather>(initialState)

    const [loading, setLoading] = useState<boolean>(false)
    const [notFound, setNotFound] = useState<boolean>(false)
    
    const fetchWeather = async (search: ISearchState) =>{
        const appid = import.meta.env.VITE_API_KEY
        const apiUrl = import.meta.env.VITE_API_URL

        setLoading(true)
        setWeatherInfo(initialState)
        setNotFound(false)

        try{

            const urlCoordinates = `${apiUrl}geo/1.0/direct?q=${search.city},${search.country}&appid=${appid}`
            const {data: coordinates} = await axios(urlCoordinates)
            if(coordinates[0])return setNotFound(true)
            const {lat, lon} = coordinates[0];

            const urlWeather = `${apiUrl}data/2.5/weather?lat=${lat}&lon=${lon}&appid=${appid}`
            const {data: dataWeather} = await axios(urlWeather)
           const result = Weather.safeParse(dataWeather) // ZOD
            // const result = isWeatherResponse(dataWeather)
            if(result.success){
                console.log(result.data)
                setWeatherInfo(result.data)

            }

            //Valibot
            // const result = parse(WeatherSchema, dataWeather)
            // if(result){

            // }
        

        }catch(err){
            console.log(err)
           return err
        }finally{
            setLoading(false)
            // setWeatherInfo(initialState)
        }
        
    }

    const hasWeatherData = useMemo(()=>weatherInfo.name,[weatherInfo]);

    return{
        fetchWeather,
        weatherInfo,
        setWeatherInfo,
        hasWeatherData,
        loading,
        setLoading,
        notFound,
        setNotFound
  
    }
}