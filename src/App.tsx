import styles from "./app.module.css";
import Alert from "./components/Alert";
import Form from "./components/Form";
import Spinner from "./components/Spinner";
import WeatherDetail from "./components/WeatherDetail";
import { useWeather } from "./hooks/useWeather";

const App = () => {
  const { fetchWeather, weatherInfo, hasWeatherData, loading, notFound } = useWeather();
  return (
    <>
      <h1 className={styles.title}>Wheater App</h1>
      <div className={styles.container}>
        <Form fetchWeather={fetchWeather} />
        {loading && <Spinner/>}
        {hasWeatherData && <WeatherDetail data={weatherInfo} />}
        {notFound && <Alert>City Not found</Alert>}

      </div>
    </>
  );
};

export default App;
