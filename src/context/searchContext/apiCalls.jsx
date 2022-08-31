import { fetchingFailure, fetchingSuccess } from "./searchActions"

export const searchCityForecast = async (dispatch, cityInput, languageInput) => {

  const searchUrl = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.REACT_APP_KEY}&q=${cityInput}&lang=${languageInput}&days=7`

  const res = await fetch(searchUrl)
  const data = await res.json()

  if (!res.ok) {
    dispatch(fetchingFailure(data.error))
  }

  if (res.ok) {
    dispatch(fetchingSuccess(data))
  }
}
