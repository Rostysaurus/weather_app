import "./main.scss"
import { FaSearch } from 'react-icons/fa';
import { useContext, useState } from "react";
import { SearchContext } from "../../context/searchContext/searchContext";
import SearchForm from "../UI/searchForm/SearchForm";
import WeatherCard from "../UI/weatherCard/WeatherCard";

export default function Main() {

  const {weatherData, isFetching, error} = useContext(SearchContext)

  return (
    <div className="main">
        <SearchForm/>
        {weatherData && <WeatherCard/>}
    </div>
  )
}
