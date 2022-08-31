import { Fragment, useContext, useEffect, useState } from "react"
import { FaFrown, FaMapMarkerAlt } from "react-icons/fa"
import { SearchContext } from "../../../context/searchContext/searchContext"
import { countryConverter, countryNameToGermanTest } from "../../Translation/countryNameConverter"
import { getFullDate } from "../hooks/dateConverters/getFullDate"
import "./locationInfo.scss"

export default function LocationInfo() {
  const {weatherData, isFetching, error, selectedLanguage, errorMessage} = useContext(SearchContext)
  const [countryInGerman, setCountryInGerman] = useState("")

  const {name, country, localtime, tz_id} = weatherData.location

  useEffect(() => {
    if (selectedLanguage === "de") {
      const countryNameToGerman = (country) => {
        const url = `https://pkgstore.datahub.io/core/country-list/data_json/data/8c458f2d15d9f2119654b29ede6e45b8/data_json.json`
        fetch(url)
          .then((res) => {
            return res.json()
          })
          .then((data) => {
            const filtered = data.filter(cpuntries => cpuntries.Name === country)
            const countryCode = filtered[0].Code
            const regionNames = new Intl.DisplayNames(
              ['de'], {type: 'region'}
            );
            const countryName = regionNames.of(countryCode)
            setCountryInGerman(countryName)
          })
          .catch((err) => {
            console.log(err)
          })
      }
    countryNameToGerman(country)
  }
}, [weatherData])

// const suka = async () => {
//   const data = await countryConverter(country)
//   console.log(data)
// }
// console.log(countryConverter(country).then((data) => {return data}))

  return (
    <div className="locationInfo">
      {error ? <h1><FaFrown/> {errorMessage.message}</h1> : (
        <Fragment>
          <h2>{`${getFullDate(localtime, selectedLanguage)}`}</h2>
          <h1><FaMapMarkerAlt/> {`${name}, ${ selectedLanguage === "de" ? countryInGerman : country}`}</h1>
        </Fragment>
      )}

    </div>
  )
}
