import { Fragment, useContext } from "react"
import { SearchContext } from "../../../context/searchContext/searchContext"
import LocationInfo from "../locationInfo/LocationInfo"
import CurrentWeather from "./currentWeather/CurrentWeather"
import Forecast from "./forecast/Forecast"
import "./weatherCard.scss"

export default function WeatherCard() {

  const {weatherData, isFetching, error, selectedLanguage} = useContext(SearchContext)

  console.log(error)

  const {text} = weatherData.current.condition

  console.log(weatherData)

  return (
    <Fragment>
      <LocationInfo/>
    <div className="weatherCard">
      {error && <p>{error.message}</p>}
      {weatherData && (
      <Fragment>
        <CurrentWeather/>
        <Forecast/>
      </Fragment>
      )}
  </div>
    </Fragment>
  )
}

{/* <div className="weatherCard">
{error && <p>{error.message}</p>}
{weatherData && (
 <Fragment>
   <CurrentWeather/>
   <Forecast/>
 </Fragment>
)}
</div>  */}

{/* <div className="weatherCard">
<div className="current">
  {error && <p>{error.message}</p>}
  { weatherData &&
  (<div className="suka">
    <p>{text}</p>
    </div>)
  }
</div>
<div className="forecast"></div>
</div> */}
