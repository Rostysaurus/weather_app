import { Fragment, useContext } from "react"
import { SearchContext } from "../../../context/searchContext/searchContext"
import LocationInfo from "../locationInfo/LocationInfo"
import CurrentWeather from "./currentWeather/CurrentWeather"
import Forecast from "./forecast/Forecast"
import "./weatherCard.scss"

export default function WeatherCard() {

  const {weatherData, isFetching, error, errorMessage, selectedLanguage} = useContext(SearchContext)

  console.log(error)

  return (
    <Fragment>
      <LocationInfo/>
      { !error && (<div className="weatherCard">
        <Fragment>
          <CurrentWeather/>
          <Forecast/>
        </Fragment>
      </div>)}
    </Fragment>
  )
}
