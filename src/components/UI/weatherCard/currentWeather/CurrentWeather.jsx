import { useContext } from "react"
import { SearchContext } from "../../../../context/searchContext/searchContext"
import "./currentWeather.scss"

export default function CurrentWeather() {

  const {weatherData, isFetching, error, selectedLanguage} = useContext(SearchContext)

  console.log(error)

  const {text} = weatherData.current.condition

  return (
    <div className="current">

    { weatherData &&
    (<div className="suka">
      <p>{text}</p>
      </div>)
    }
  </div>
  )
}
