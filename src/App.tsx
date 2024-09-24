import styles from "./app.module.css";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import WeatherDetail from "./components/WeatherDetail";
import { useWeather } from "./hooks/useWeather";

const App = () => {
  const { fetchWeather, weatherInfo, hasWeatherData, loading } = useWeather();
  return (
    <>
      <h1 className={styles.title}>Wheater App</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {hasWeatherData && <WeatherDetail data={weatherInfo} />}
        {loading && <Spinner/>}
      </div>
    </>
  );
};

export default App;
