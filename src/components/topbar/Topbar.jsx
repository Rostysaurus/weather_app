import Languages from '../UI/languages/Languages'
import PopularCities from '../UI/popularCities/PopularCities'
import './topbar.scss'

export default function Topbar() {

  //Handlers
  const homeHandler = () => {
    window.location.reload()
  }

  return (
    <div className="topbar">
      <div className="left">
        <h1 onClick={homeHandler}>Weather App</h1>
      </div>
      <div className="mid">
       <PopularCities/>
      </div>
      <div className="right">
        <Languages/>
      </div>
    </div>
  )
}
