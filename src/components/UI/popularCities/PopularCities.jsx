import "./popularCities.scss"
import { useContext, useState } from "react"
import { SearchContext } from "../../../context/searchContext/searchContext"
import { selectCity } from "../../../context/searchContext/searchActions"

export default function PopularCities() {

  const {dispatch, selectedCity} = useContext(SearchContext)
  const popularCities = ["Berlin", "London", "Paris", "Madrid"]

  // Handlers
  const selectCityHandler = (e) => {
    e.preventDefault()
    dispatch(selectCity(e.target.innerText))
  }
  return (
    <ul className='cities'>
    {popularCities.map((city, index) => (
      <li
        className={`${city === selectedCity ? `selected` : null}`}
        key={index}
        onClick={selectCityHandler}
        >
          {city}</li>
    ))}
  </ul>
  )
}
