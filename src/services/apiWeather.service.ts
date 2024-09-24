import axios, { AxiosResponse } from "axios";
import { IGetCoordinates } from "./apiWeather.types";

class ApiWeatherService {
    static getCoordinates = ({city}: IGetCoordinates) : Promise<AxiosResponse<any>> => {
        const appid = import.meta.env.VITE_API_KEY
        const urlApi = import.meta.env.VITE_API_URL
        const url = `${urlApi}geo/1.0/direct?q=${city}&appid=${appid}}`
        return axios.get(url)
    }
}

export { ApiWeatherService };

