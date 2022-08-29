import { useContext } from "react"
import { SearchContext } from "../../../context/searchContext/searchContext"
import "./locationInfo.scss"

export default function LocationInfo() {
  const {weatherData, isFetching, error, selectedLanguage} = useContext(SearchContext)

  const {name, country, localtime} = weatherData.location

  return (
    <div className="locationInfo">
      <h2>{name}</h2>
      <h2>{country}</h2>
      <h2>{localtime}</h2>
    </div>
  )
}
