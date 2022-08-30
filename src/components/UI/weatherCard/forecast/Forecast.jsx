import { Fragment, useContext } from "react"
import { FaTemperatureHigh, FaTemperatureLow, FaUmbrella } from "react-icons/fa"
import { SearchContext } from "../../../../context/searchContext/searchContext"
import { getWeekDay } from "../../hooks/dateConverters/getWeekDay"
import "./forecast.scss"

export default function Forecast() {
  const {weatherData, isFetching, error, selectedLanguage} = useContext(SearchContext)

  console.log(error)

  const {forecastday} = weatherData.forecast

  return (
   <div className="forecast">
    {forecastday.map((day, i) => (
      <Fragment key={i}>
        <table>
          <thead>
            <tr>
              <td>
                <h2 >{getWeekDay(day.date, selectedLanguage)}</h2>
              </td>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <img src={day.day.condition.icon}></img>
              </td>
            </tr>
            <tr>
              <td>
                <h4>{day.day.condition.text}</h4>
              </td>
            </tr>
            <tr>
              <td>
                <p><FaTemperatureHigh/> <strong className="max">{day.day.maxtemp_c}&deg;C</strong></p>
              </td>
              <td>
                <p><FaTemperatureLow/> <strong className="min">{day.day.mintemp_c}&deg;C</strong></p>
              </td>
            </tr>
            <tr>
              <td>
                <p><FaUmbrella/> {day.day.daily_chance_of_rain}%</p>
              </td>
            </tr>
          </tbody>
        </table>
      </Fragment>
    ))}
   </div>
  )
}
