import { useContext } from "react"
import { FaTint, FaUmbrella, FaWind } from "react-icons/fa"
import { SearchContext } from "../../../../context/searchContext/searchContext"
import { currentConditions } from "../../../Translation/currentConditions"
import "./currentWeather.scss"

export default function CurrentWeather() {

  const {weatherData, isFetching, error, selectedLanguage} = useContext(SearchContext)
  const {text, icon} = weatherData.current.condition
  const {temp_c, humidity, gust_kph, precip_mm} = weatherData.current

  return (
    <div className="current">
      <table>
        <thead>
          <tr>
            <td>
              <h2>{currentConditions[`${selectedLanguage}`]}:</h2>
            </td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="left">
              <img src={icon}></img>
              <p>{text}</p>
            </td>
            <td className="right">
              <h1>{temp_c}&deg;C</h1>
              <div className="container">
                <div className="IconText">
                  <FaTint className="faIcon"/> <p>{humidity}%</p>
                </div>
                <div className="IconText">
                  <FaUmbrella className="faIcon"/> <p>{precip_mm}mm</p>
                </div>
                <div className="IconText">
                  <FaWind className="faIcon"/> <p>{gust_kph}kph</p>
                </div>
              </div>
            </td>
          </tr>
        </tbody>
      </table>
  </div>
  )
}
