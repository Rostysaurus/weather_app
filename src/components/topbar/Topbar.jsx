import { FaBolt, FaCloudRain, FaCloudSun, FaSun } from 'react-icons/fa'
import Languages from '../UI/languages/Languages'
import PopularCities from '../UI/popularCities/PopularCities'
import './topbar.scss'

export default function Topbar() {

  //Handlers
  const homeHandler = () => {
    window.location.reload()
  }

  return (
    <div data-testid="topbar" className="topbar">
      <div
        data-testid="left"
        className="left"
        onClick={homeHandler}
        >
        <FaSun className='icon'/>
        <FaCloudSun className='icon'/>
        <FaCloudRain className='icon'/>
        <FaBolt className='icon'/>
      </div>
      <div
        data-testid="mid"
        className="mid">
       <PopularCities/>
      </div>
      <div
        data-testid="right"
        className="right">
        <Languages/>
      </div>
    </div>
  )
}
