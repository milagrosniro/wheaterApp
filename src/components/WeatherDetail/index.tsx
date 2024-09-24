import { formatTemp } from "../../utils/format.utils";
import { IWeatherDetailProps } from "./weather.types";
import styles from './weatherDetail.module.css';

const WeatherDetail = ({data}: IWeatherDetailProps) => {
    const {name, main : {temp, temp_max,temp_min} } = data;
    
  return (
    <div className={styles.container}>
        <h2>Weather in: {name} </h2>
        <p className={styles.current}>{formatTemp(temp)}&deg;C</p>
        <div className={styles.temperatures}>
            <p>Min: <span>{formatTemp(temp_min)}&deg;C</span></p>
            <p>Min: <span>{formatTemp(temp_max)}&deg;C</span></p>

        </div>

    </div>
  )
}

export default WeatherDetail