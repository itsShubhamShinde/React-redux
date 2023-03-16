import React, { useContext } from 'react'
import './Header.css'
import { Link } from 'react-router-dom'
import { GlobalData } from '../App';


const bttheamDark ={ color:"white", backgroundColor: "#0f172a"}
const bttheamLight ={ color:"aqua", backgroundColor: "#051c50"}

const Header = () => {
  const context = useContext(GlobalData)


  return (
    <div className="HeaderMainDiv" >
      <div className='Logo'>
        <h1>Geekstar</h1>
      </div>

      <div className='menu' >
        <ul>
          <Link to='/'>
            <li>Home</li>
          </Link>
          <Link to='/Contact'>
            <li>Contact</li>
          </Link>

          <Link to='/Services'>
            <li>Services</li>

          </Link>
        </ul>
      </div>

      <div className='button'>
        <button onClick={() => {
                    context.setTheam(!context.theam)
                }} style={context.theam ? bttheamLight : bttheamDark}>Toggle Theam to {context.theam ? "Light..!" : "Dark..!"}</button>
      </div>
    </div>
  )
}

export default Header